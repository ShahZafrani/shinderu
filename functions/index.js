// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

const serviceAccount = require("./crd.json");


// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
// admin.initializeApp({
//     credential: admin.credential.applicationDefault()
// });
const db = admin.firestore();
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((req, res) => {
 res.send("Hello from Firebase!");
});

exports.createNewGame = functions.https.onRequest((req, res) => {
  const newGame = createEmptyGame();
  const addDoc = db.collection('games').add(newGame).then(ref => {
    // console.log("success");
    // console.log(ref);
    // console.log(ref.id);
    ref.collection('moves').add({valid: true, timestamp: admin.firestore.Timestamp.fromDate(new Date())});
    return res.status(201).send(ref.id);
  }).catch(error => {
    res.status(500).send(error);
  });
});

exports.onMoveCreate = functions.firestore
  .document('games/{gameId}/moves/{moveId}')
  .onCreate((snap, context) => {
    const move = snap.data();
    if (move.timestamp) {
      let gameRef = db.doc('games/'+context.params.gameId);
      gameRef.update({lastMove: move.timestamp});
    }
    
   });

exports.getCards = functions.https.onRequest((req, res) => {
  res.send(cards);
});

function validateMove(game, move) {
  if (!isInDeck(game.deck, move.card)) {
    return "card not in deck";
  }
  if (!isInPlayerHand(game.players, move.card, move.player)) {
    return "card not in player hand";
  }
  if (!isSpaceValid(game.board, move.to)) {
    return "move space invalid";
  }
  if (!matchesCardOption(move.card, move.card.option, move.from, move.to)) {
    return "invalid card option"
  }
  return "valid"
}

function isInDeck(deck, card) {
  return true;
}

function isInPlayerHand() {
  return true;
}

function isSpaceValid(board, to) {
  return true;
}

function matchesCardOption(card, option, from, to) {
  return true;
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
  g.gameBegin = admin.firestore.Timestamp.fromDate(new Date()),
  g.players = {
    red: {
      hand: [cardKeys[0], cardKeys[1]]
    },
    blue: {
      hand: [cardKeys[2], cardKeys[3]]
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

// /**
//  * this matching function taken from: https://github.com/CodingDoug/firebase-tic-tac-toe/blob/master/functions/index.js
//  * I'll figure out the license stuff later
//  * Thanks Coding Doug!
//  * @param {admin.database.Reference} root
//  * @param {string} uid
//  * @type {Promise}
//  */
// function match(root, uid) {
//   let p1uid, p2uid
//   return root.child('matching').transaction((data) => {
//       if (data === null) {
//           console.log(`${uid} waiting for match`)
//           return { uid: uid }
//       }
//       else {
//           p1uid = data.uid
//           p2uid = uid
//           if (p1uid === p2uid) {
//               console.log(`${p1uid} tried to match with self!`)
//               return
//           }
//           else {
//               console.log(`matched ${p1uid} with ${p2uid}`)
//               return {}
//           }
//       }
//   },
//   (error, committed, snapshot) => {
//       if (error) {
//           throw error
//       }
//       else {
//            return {
//               committed: committed,
//               snapshot: snapshot
//           }
//       }
//   },
//   false)
//   .then(result => {
//       const matching = result.snapshot.val()
//       if (matching && matching.uid) {
//           return root.child(`player_states/${uid}`).set({
//               matching: true
//           })
//       }
//       else {
//           // Create a new game state object and push it under /games
//           const now = new Date().getTime()
//           const ref_game = root.child("games").push()
//           const pr_game = ref_game.set({
//               p1uid: p1uid,
//               p2uid: p2uid,
//               turn: p1uid,
//               p1checkin: now,
//               p2checkin: now
//           })
//           const game_id = ref_game.key
//           console.log(`starting game ${game_id} with p1uid: ${p1uid}, p2uid: ${p2uid}`)
//           const pr_state1 = root.child(`player_states/${p1uid}`).set({
//               game: game_id,
//               message: "It's your turn! Make a move!"
//           })
//           const pr_state2 = root.child(`player_states/${p2uid}`).set({
//               game: game_id,
//               message: "Waiting for other player..."
//           })
//           return Promise.all([pr_game, pr_state1, pr_state2])
//       }
//   })
// }

// // also taken from Coding Doug
// const checkin_period = 20000

// exports.command = functions.database
//         .ref('/commands/{uid}/{cmd_id}')
//         .onWrite(event => {
//     const uid = event.params.uid
//     const cmd_id = event.params.cmd_id

//     if (! event.data.exists()) {
//         console.log(`command was deleted ${cmd_id}`)
//         return
//     }

//     const command = event.data.val()
//     const cmd_name = command.command
//     console.log(`command ${cmd_name} uid=${uid} cmd_id=${cmd_id}`)
//     const root = event.data.adminRef.root
//     let pr_cmd
//     switch (cmd_name) {
//         case 'match':
//             pr_cmd = match(root, uid)
//             break
//         case 'move':
//             pr_cmd = move(root, uid, command)
//             break
//         case 'checkin':
//             pr_cmd = checkin(root, uid)
//             break
//         default:
//             console.log(`Unknown command: ${cmd_name}`)
//             pr_cmd = Promise.reject("Unknown command")
//             break
//     }

//     const pr_remove = event.data.adminRef.remove()
//     return Promise.all([pr_cmd, pr_remove])
// })