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
        m('div', 'Red', m('div', vnode.attrs.players.red.hand[0] + ', ' + vnode.attrs.players.red.hand[1])),
        m('div', 'Table', m('div', vnode.attrs.tableCard)),
        m('div', 'Blue', m('div', vnode.attrs.players.blue.hand[0] + ', ' + vnode.attrs.players.blue.hand[1]))
      ]);
    } else {
      return m('h4.card-display', 'shuffling cards...');
    }
  }
}

var Board = {
  currentGame: {},
  oninit: function(vnode){
    Board.loadGame(vnode.attrs.gameId);
  },
  loadGame: function(gameId) {
    var query = firebase.firestore()
    .doc('games/' + gameId).onSnapshot(function(doc) {
      console.log(doc.data());
      Board.currentGame = doc.data();
      m.redraw();
    });
  },
  view: function(vnode) {
    return m('div.float-right', 
      [m(GameStatus, {status: Board.currentGame.gameStatus}),
      m(BoardGrid, {boardState : Board.currentGame.board}),
      m(CardDisplay, {players: Board.currentGame.players, tableCard: Board.currentGame.tableCard})]);
  }
}

var BoardGrid = {
  view: function(vnode) {
    var rows = [];
    for (let i = 0; i < letters.length; i++) {
      rows.push(m(Row, {boardState: vnode.attrs.boardState, tiles : [letters[i]+'0', letters[i]+'1', letters[i]+'2', letters[i]+'3', letters[i]+'4']}));
    }
    return m('table.board', rows);
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
      let tileClass = (vnode.attrs.tileKey !== 'a2') ? (vnode.attrs.tileKey !== 'e2') ?  '' : '.tile-blue' : '.tile-red';
      if (vnode.attrs.value === '') {
        return m('td' + tileClass,  vnode.attrs.value);
      } else {
        let color = (vnode.attrs.value[0] === 'r') ? 'red' : 'blue';
        let type = vnode.attrs.value[1] === '2' ? 'master-' + color : 'player-' + color;
        return m('td' + tileClass, m('div.' + type))
      }
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

var GameLobby = {
  view: function(vnode) {
    return m('div', [m(Header), m('h1', 'Join a game!')]);
  }
}

m.route(document.body, '/', {
    '/': GameLobby,
    '/game/:gameId': GameView
})