// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.createNewGame = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    res.status(200).send();
  }
  if (req.body.id !== null && req.body.id !== undefined && req.body.id !== '') {
    const newGame = createEmptyGame();
    newGame.players.red.uid = req.body.id;
    const addDoc = db.collection('games').add(newGame).then(ref => {
      ref.collection('moves').add({description: 'gameStart', timestamp: admin.firestore.Timestamp.fromDate(new Date())});
      ref.collection('player_moves').doc('gm').set({timestamp: admin.firestore.Timestamp.fromDate(new Date())});
      return res.status(201).send({gameId: ref.id});
    }).catch(error => {
      res.status(500).send(error);
    });
  } else {
    return res.status(400).send(`InvalidID: ${req.body}`);
  }

});

exports.onMoveUpdate= functions.firestore
  .document('games/{gameId}/player_moves/{uid}')
  .onUpdate((change, context) => {
    const move = change.after.data();
    gameRef = change.after.ref.parent.parent;
    let write = gameRef.get().then(snap => {
      let game = snap.data();
      let player = whichPlayer(game.players, context.params.uid);
      let validity = validateMove(game, move, player);
      let message = '';
      let destroyed = '';
      let isWin = false;
      let victor = null;
      const newPlayers = game.players;
      let newTableCard = game.tableCard;
      const newBoard = game.board;
      let nextTurn = game.players[player].uid;
      if (validity !== "valid") {
        message = `Player ${player} made an invalid move: ${validity}`;   
      } else {
        let from = getFromSpace(newBoard, move.gamePiece);
        let to = getLandingSpace(newBoard, move, player);
        let destroyed = newBoard[to];
        victor = checkForWin(to, player, move.gamePiece, destroyed);
        newBoard[to] = move.gamePiece;
        newBoard[from] = '';
        let otherPlayer = player === 'red' ? 'blue' : 'red';
        message = victor === null ? `Player ${player} played the card: ${move.cardChoice}, and move the piece ${move.gamePiece} from ${from} to ${to}.${destroyedText(destroyed)}` : `${player}: "Omae Wa Mo Shinderu.", ${otherPlayer}: "NANI!"`;
        nextTurn = victor === null ? game.players[otherPlayer].uid : 'game_over';
        newTableCard = move.cardChoice;
        let oldCardIndex = newPlayers[player].hand.indexOf(move.cardChoice);
        newPlayers[player].hand.splice(oldCardIndex, 1);
        newPlayers[player].hand.push(game.tableCard);
      }
      game.gameStatus = message;
      return gameRef.set(
        {gameStatus: message,
          board: newBoard,
          turn_uid: nextTurn, 
          victor: victor,
          tableCard: newTableCard,
          players: newPlayers}
        , {merge: true});
    }).catch(error => {console.log(error)});
    return write;
});

function checkForWin(to, player, piece, destroyed) {
  if (destroyed[1] === '2') {
    return player;
  }
  let victorySpace = player === 'red' ? 'e2' : 'a2';
  if (piece[1] === '2' && to === victorySpace) {
    return player;
  }
  return null;
}

function destroyedText(destroyed) {
  if (destroyed !== '') {
    return ` ${destroyed} was slain!`;
  }
  return destroyed;
}

exports.getCards = functions.https.onRequest((req, res) => {
  res.send(cards);
});

function whichPlayer(players, uid) {
  if (players.red.uid !== uid) {
    return 'blue';
  }
  return 'red';
}

function validateMove(game, move, playerColor) {
  if (!isInDeck(game.deck, move.cardChoice)) {
    return "card not in deck";
  }
  if (!isInPlayerHand(game.players, move.cardChoice, playerColor)) {
    return "card not in player hand";
  }
  if (move.gamePiece[0] !== playerColor[0]) {
    return 'Player tried to move a piece that is not theirs';
  }
  let to = getLandingSpace(game.board, move, playerColor);
  let spaceValidity = isSpaceValid(game.board, to, playerColor);
  if (spaceValidity !== 'valid') {
    return spaceValidity;
  }
  if (!matchesCardOption(move.cardChoice, move.cardOption)) {
    return "invalid card option"
  }
  return "valid";
}

function getLandingSpace(board, move, playerColor) {
  let fromSpace = getFromSpace(board, move.gamePiece);

  let cardCoords = cards[move.cardChoice].options[move.cardOption];
  let newX = speculativeX(fromSpace[0], cardCoords.y, playerColor);
  if (newX === 'invalid') {
    return 'invalid xPos';
  } 
  let newY = speculativeY(fromSpace[1], cardCoords.x, playerColor);
  if (newY === 'invalid') {
    return 'invalid yPos';
  }
  return String(newX) + String(newY);
}

function speculativeX(fromX, xDiff, playerColor) {
  let xi = letters.indexOf(fromX);
  xDiff *= playerColor === 'blue' ? -1 : 1;
  let newXi = xi + parseInt(xDiff);
  if (newXi < 0 || newXi > 4) {
    return "invalid";
  }
  return letters[newXi];
}

function speculativeY(fromY, yDiff, playerColor) {
  yDiff *= playerColor === 'red' ? -1 : 1;
  let toY = parseInt(fromY) + parseInt(yDiff);
  if (toY < 0 || toY > 4) {
    return "invalid";
  }
  return toY;
}

function getFromSpace(board, piece) {
  var fromSpace = '';
  Object.entries(board).map(space => {
    if (space[1] === piece) {
      fromSpace = space[0];

    }
  });
  return fromSpace;
}

function isInDeck(deck, card) {
  if (Object.keys(deck).includes(card)) {
    return true;
  }
  return false;
}

function isInPlayerHand(players, card, player) {
  if (players[player].hand.includes(card)) {
    return true;
  }
  return false;
}

function isSpaceValid(board, to, playerColor) {
  if (to.length > 2) {
    return to;
  }
  let existingSpace = board[to];
  if (existingSpace !== '' && existingSpace[0] === playerColor[0]) {
    return 'invalid space: cannot move onto your own piece';
  }
  return 'valid';
}

function matchesCardOption(card, option) {
  return cards[card].options[option] !== undefined;
}

function isWinCondition() {
  return true;
}

const cards = {
  tiger: {
    flavorText : "rawr",
    options : {
      a: {
        x: 0,
        y: 2
      },
      b: {
        x: 0,
        y: -1
      }
    }
  },
  crab: {
    flavorText : "the clamp",
    options : {
      a: {
        x: 0,
        y: 1
      },
      b: {
        x: 2,
        y: 0
      },
      c: {
        x:-2,
        y: 0
      }
    }
  },
  horse: {
    flavorText : "power of friendship",
    options : {
      a: {
        x: 0,
        y: 1
      },
      b: {
        x: 0,
        y: -1
      },
      c: {
        x:-1,
        y: 0
      }
    }
  },
  frog: {
    flavorText : "leap",
    options : {
      a: {
        x: -1,
        y: 1
      },
      b: {
        x: -2,
        y: 0
      },
      c: {
        x: 1,
        y: -1
      }
    }
  },
  rooster: {
    flavorText : "they spit on me in my homeland",
    options : {
      a: {
        x: 1,
        y: 1
      },
      b: {
        x: 1,
        y: 0
      },
      c: {
        x:-1,
        y: 0
      },
      d: {
        x: -1,
        y: -1
      }
    }
  },
  elephant : {
    flavorText : "cage the",
    options : {
      a: {
        x: 1,
        y: 1
      },
      b: {
        x: 1,
        y: 0
      },
      c: {
        x:-1,
        y: 0
      },
      d: {
        x: -1,
        y: 1
      }
    }
  },
  ox: {
    flavorText : "xoxo",
    options : {
      a: {
        x: 0,
        y: 1
      },
      b: {
        x: 1,
        y: 0
      },
      c: {
        x: 0,
        y: -1
      }
    }
  },
  rabbit: {
    flavorText : "Zip-a-dee-doo-dah, Zip-a-dee-ay!",
    options : {
      a: {
        x: 1,
        y: 1
      },
      b: {
        x: 2,
        y: 0
      },
      c: {
        x:-1,
        y: -1
      }
    }
  },
  cobra: {
    flavorText : "the evolved form of ekans",
    options : {
      a: {
        x: 1,
        y: 1
      },
      b: {
        x: 1,
        y: -1
      },
      c: {
        x:-1,
        y: 0
      }
    }
  },
  mantis: {
    flavorText : "you know that feel after you have sex with a guy, and you just wanna chop is head off?",
    options : {
      a: {
        x: 1,
        y: 1
      },
      b: {
        x: 0,
        y: -1
      },
      c: {
        x:-1,
        y: 1
      }
    }
  },
  monkey: {
    flavorText : "this *mmokney-man* is a good *m-m-monkey-man* game",
    options : {
      a: {
        x: 1,
        y: 1
      },
      b: {
        x: 1,
        y: -1
      },
      c: {
        x:-1,
        y: 1
      },
      d: {
        x: -1,
        y: -1
      }
    }
  },
  dragon: {
    flavorText : "DRAGON, DRAGON! Not Lizard. I don't do that tongue thing.",
    options : {
      a: {
        x:2,
        y: 1
      },
      b: {
        x: -2,
        y: 1
      },
      c: {
        x: 1,
        y: -1
      },
      d: {
        x: -1,
        y: -1
      }
    }
  },
  boar: {
    flavorText : "like a pig, but scary",
    options : {
      a: {
        x: 1,
        y: 0
      },
      b: {
        x: -1,
        y: 0
      },
      c: {
        x:0,
        y: 1
      }
    }
  },
  eel: {
    flavorText : "dang, now I'm in the mood for unagi-don",
    options : {
      a: {
        x: -1,
        y: 1
      },
      b: {
        x: -1,
        y: -1
      },
      c: {
        x: 1,
        y: 0
      }
    }
  },
  crane: {
    flavorText : "ya best protect ya neck",
    options : {
      a: {
        x: 1,
        y: -1
      },
      b: {
        x: -1,
        y: -1
      },
      c: {
        x: 0,
        y: 1
      }
    }
  },
  goose: {
    flavorText : "Come on, Mav, do some of that pilot shit!",
    options : {
      a: {
        x: 1,
        y: -1
      },
      b: {
        x: 1,
        y: 0
      },
      c: {
        x:-1,
        y: 1
      },
      d: {
        x: -1,
        y: 0
      }
    }
  }
};

const letters = ["a", "b", "c", "d", "e"];

function generateBoard() {
  let b = {};
  for (let i = 0; i < 5; i ++) {
    for (let j = 0; j < 5; j ++) {
      b[letters[i] + j] = "";
    }
  }
  for (let j = 0; j < 5; j ++) {
    b["a" + j] = "r" + j;
    b["e" + j] = "b" + j;
  }
  return b;
}

function createEmptyGame() {
  let g = {};
  g.board = generateBoard();
  g.deck = randomSelectCards(cards, 5);
  let cardKeys = Object.keys(g.deck);
  g.gameBegin = admin.firestore.Timestamp.fromDate(new Date());
  g.turn_uid = '';
  g.players = {
    red: {
      hand: [cardKeys[0], cardKeys[1]],
      uid: ''
    },
    blue: {
      hand: [cardKeys[2], cardKeys[3]],
      uid: ''
    }
  }
  g.tableCard = cardKeys[4];
  return g;
}

function randomSelectCards(cardSet, numToSelect) {
  var keys = Object.keys(cardSet);
  var selected = {};
  for (let i = 0; i < numToSelect; i++) {
    let sel = Math.floor(Math.random() * Math.floor(keys.length));
    let card = cardSet[keys[sel]];
    selected[keys[sel]] = card;
    keys.splice(sel, 1);
  }
  return selected;
}
