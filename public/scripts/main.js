'use strict';

// Checks that the Firebase SDK has been correctly setup and configured.
function checkSetup() {
  if (!window.firebase || !(firebase.app instanceof Function) || !firebase.app().options) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
        'Make sure you go through the codelab setup instructions and make ' +
        'sure you are running the codelab using `firebase serve`');
  }
}

// Checks that Firebase has been imported.
checkSetup();

// Remove the warning about timstamps change.
var firestore = firebase.firestore();
var settings = {};
firestore.settings(settings);

const root = document.body;
const letters = ['a', 'b', 'c', 'd', 'e']
var Header = {
  view: function() {
    return m('header',
     m('div',
      [m('h3', 'Shinderu'),
      m(User)]));
  }
}

var User = {
  oninit: function() {
    firebase.auth().onAuthStateChanged(User.authStateObserver);    
  },
  authStateObserver: function(firebaseUser) {
    if (firebaseUser) { 
      User.currentUser = firebase.auth().currentUser;
      User.userName = User.currentUser.displayName;
    } else { 
      User.userName = 'Not Signed In';
      User.currentUser = null;
    }
    m.redraw();
  },
  currentUser: null,
  userName:'',   
  signIn: function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  },
  signOut: function() {
    firebase.auth().signOut();
  },
  view: function() {
    return  m('div.user-container', {id: 'user-container'},
    [m('div', {id:'user-name'}, User.userName),
     m('button', {id:'sign-out', hidden: !User.currentUser, onclick: User.signOut}, 'Sign-Out'),
     m('button', {id:'sign-in', hidden: !!User.currentUser, onclick: User.signIn}, 'Sign-In')])
  }
}

var CardDisplay = {
  view: function(vnode) {
    if (vnode.attrs.players) {
       return  m('div.card-display', [
        m('h4', 'Cards: '),
        m('div', 'Red', m('div', [m(CardDetails, { deck: vnode.attrs.deck, card: vnode.attrs.players.red.hand[0]}),m(CardDetails, { deck: vnode.attrs.deck, card: vnode.attrs.players.red.hand[1]})])),
        m('div', 'Table', m('div', m(CardDetails, { deck: vnode.attrs.deck, card:vnode.attrs.tableCard}))),
        m('div', 'Blue', m('div', [m(CardDetails, { deck: vnode.attrs.deck, card: vnode.attrs.players.blue.hand[0]}), ,m(CardDetails, { deck: vnode.attrs.deck, card: vnode.attrs.players.blue.hand[1]})]))
      ]);
    } else {
      return m('h4.card-display', 'shuffling cards...');
    }
  }
}

var CardDetails = {
  view: function(vnode) {
    let details = [];
    Object.entries(vnode.attrs.deck[vnode.attrs.card].options).map(entry => {
      details.push(m('p', entry[0] + '- x: ' + entry[1].x + ', y:' + entry[1].y ));
    })
    return m('p', vnode.attrs.card, details);
  }
}

var Board = {
  currentGame: {},
  oninit: function(vnode){
    Board.loadGame(vnode.attrs.gameId);
  },
  gameRef: null,
  loadGame: function(gameId) {
    var query = firebase.firestore()
    .doc('games/' + gameId).onSnapshot(function(doc) {
      console.log(doc);
      Board.currentGame = doc.data();
      Board.gameRef = doc.ref;
      m.redraw();
    });
  },
  inputMove: function(move){
    console.log(firebase.auth().currentUser.uid)
    Board.gameRef.collection('player_moves').doc(firebase.auth().currentUser.uid).set(move, {merge: true});
  },
  view: function(vnode) {
    return m('div.float-right', 
      [m(GameStatus, {status: Board.currentGame.gameStatus}),
      m(BoardGrid, {boardState : Board.currentGame.board}),
      m(CardDisplay, {deck: Board.currentGame.deck, players: Board.currentGame.players, tableCard: Board.currentGame.tableCard}),
      m(MoveInput, {submitMove : this.inputMove, turn_uid: Board.currentGame.turn_uid})]);
  }
}

var BoardGrid = {
  view: function(vnode) {
    var rows = [];
    for (let i = 0; i < letters.length; i++) {
      rows.push(m(Row, {boardState: vnode.attrs.boardState, tiles : [letters[i]+'0', letters[i]+'1', letters[i]+'2', letters[i]+'3', letters[i]+'4']}));
    }
    let rotate = '';
    if((vnode.attrs.boardState) && (vnode.attrs.boardState.players) && (vnode.attrs.boardState.players.red.uid === firebase.auth().currentUser.uid)) {
      rotate = '-rotated';
    }
    return m('table.board' + rotate, rows);
  }
}

var Row = {
  view: function(vnode) {
      let row = []
      if (vnode.attrs.boardState) {
        for (let j = 0; j < vnode.attrs.tiles.length; j ++) {
          row.push(m(Tile, {tileKey: vnode.attrs.tiles[j], value : vnode.attrs.boardState[vnode.attrs.tiles[j]]}));
        }
      }
      return m('tr.row', row);
  }
}

var Tile = {
  view: function(vnode) {
      let tileClass = (vnode.attrs.tileKey !== '02') ? (vnode.attrs.tileKey !== '42') ?  '' : '.tile-blue' : '.tile-red';
      if (vnode.attrs.value === '') {
        return m('td' + tileClass,  vnode.attrs.value);
      } else {
        let color = (vnode.attrs.value[0] === 'r') ? 'red' : 'blue';
        let type = vnode.attrs.value[1] === '2' ? 'master-' + color : 'player-' + color;
        return m('td' + tileClass, m('div.' + type))
      }
  }
}

var MoveInput = {
  disableForm: function(vnode){
    return vnode.attrs.turn_uid !== firebase.auth().currentUser.uid;
  },
  view: function(vnode) {
    return m('form',  { action: '#', onsubmit: e =>{
      e.preventDefault();
      let move = {};
      move.cardChoice = vnode.state.cardChoice;
      move.cardOption = vnode.state.cardOption;
      move.gamePiece = vnode.state.gamePiece;
      move.uid = firebase.auth().currentUser.uid;
      vnode.attrs.submitMove(move);
    }}, 
    [
      m('input', {type: "text", value: vnode.state.cardChoice, oninput: event => vnode.state.cardChoice = event.target.value}),
      m('input', {type: "text", value: vnode.state.cardOption, oninput: event => vnode.state.cardOption = event.target.value}),
      m('input', {type: "text", value: vnode.state.gamePiece, oninput: event => vnode.state.gamePiece = event.target.value}),
      m("button", {id: "submit", disabled: this.disableForm(vnode), type:"submit"}, "Send")
    ]);
  }
}

var GameStatus = {
  view: function (vnode) {
    return m('h3', vnode.attrs.status);
  }
}

var GameView = {
  view: function(vnode) {
    return m('div',[m(Header), m(Board, {gameId: vnode.attrs.gameId})]);
  }
}

var CreateGame = {
  requestNewGame: function(){
    m.request({
        method: "POST",
        url: "https://us-central1-shinderu-707e1.cloudfunctions.net/createNewGame",
        body: {id: firebase.auth().currentUser.uid}
    })
    .then(function(result) {
      CreateGame.gameId = result.gameId;
    })
    .catch(error => {console.log(error)});
  },
  gameId: null,
  view: function(vnode) {
    if (!CreateGame.gameId) {
      return m('button', {onclick: CreateGame.requestNewGame}, 'create new game');
    } else {
      m.route.set('/game/' + CreateGame.gameId);
    }
  }
}

var GameLobby = {
  view: function(vnode) {
    return m('div', [m(Header), m(GameList), m(CreateGame)]);
  }
}

var GameList = {
  games : [],
  oninit: function() {
    var query = firebase.firestore()
    .collection('games').orderBy('gameBegin', 'desc').limit(12);
    query.onSnapshot(function(snapshot) {
      console.log(snapshot);
      let tempGames = [];
      snapshot.docChanges().forEach(function(change) {
        tempGames.push(change.doc.id);
      });
      GameList.games = tempGames;
      m.redraw();
    });
  },
  view: function(vnode) {
    let elems = [];
    GameList.games.map(doc => {
      elems.push(m('li', m(m.route.Link, {href: '/game/' + doc}, doc)));
    })
    return m('h3', 'existing games: ',m('ul',elems));
  }
}

m.route(document.body, '/', {
    '/': GameLobby,
    '/game/:gameId': GameView
})