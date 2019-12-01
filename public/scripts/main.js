'use strict';
const root = document.body;
const letters = ["a", "b", "c", "d", "e"]
var Header = {
  view: function() {
    return m("header",
     m("div",
      [m("h3", "Shinderu"),
      m(User)]));
  }
}

var User = {
  view: function() {
    return  m("div.user-container", {id: "user-container"},
    [m("div", {id:"user-pic", hidden:!isUserSignedIn}),
     m("div", {id:"user-name", hidden:!isUserSignedIn}),
     m("button", {id:"sign-out", hidden: isUserSignedIn, onclick: signOut}, "Sign-Out"),
     m("button", {id:"sign-in", hidden:!isUserSignedIn, onclick: signIn}, "Sign-In")])
  }
}

var Main = {
  oncreate: function(vnode){
    loadMessages(vnode.attrs.chatId);
  },
  view: function(vnode) {
    return m("div", {id: "messages-card-container"},
      m("div", [
        m("h3", vnode.attrs.chatId || "all"),
        m("div", {id:"messages"}),
        m(ChatForm, {msgText: '', chatId: vnode.attrs.chatId})
      ]),
      m("div", {id:"must-signin-snackbar"}))
  }
}


var Tile = {
  view: function(vnode) {
      if (vnode.attrs.value === '') {
        return m("td.tile",  vnode.attrs.value);
      } else {
        let color = (vnode.attrs.value[0] === 'r') ? "red" : "blue";
        let type = vnode.attrs.value[1] === '2' ? 'master-' + color : 'player-' + color;
        return m("td.tile", m("div." + type))
      }
  }
}

var Row = {
  view: function(vnode) {
      let row = []
      if (vnode.attrs.boardState) {
        for (let j = 0; j < vnode.attrs.tiles.length; j ++) {
          row.push(m(Tile, {value : vnode.attrs.boardState[vnode.attrs.tiles[j]]}));
        }
      }
      return m("tr.row", row);
  }
}

var CardDisplay = {
  view: function(vnode) {
    if (vnode.attrs.players) {
       return  m("div.card-display", [
        m("h4", "Cards: "),
        m("div", "Red", m("div", vnode.attrs.players.red.hand[0] + ", " + vnode.attrs.players.red.hand[1])),
        m("div", "Table", m("div", vnode.attrs.tableCard)),
        m("div", "Blue", m("div", vnode.attrs.players.blue.hand[0] + ", " + vnode.attrs.players.blue.hand[1]))
      ]);
    } else {
      return m("h4.card-display", "shuffling cards...");
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
    return m("div", 
      [m(BoardGrid, {boardState : Board.currentGame.board}),
      m(CardDisplay, {players: Board.currentGame.players, tableCard: Board.currentGame.tableCard})]);
  }
}

var BoardGrid = {
  view: function(vnode) {
    var rows = [];
    for (let i = 0; i < letters.length; i++) {
      rows.push(m(Row, {boardState: vnode.attrs.boardState, tiles : [letters[i]+"0", letters[i]+"1", letters[i]+"2", letters[i]+"3", letters[i]+"4"]}));
    }
    return m("table.board", rows);
  }
}

var GameView = {
  view: function(vnode) {
    return m("div",[m(Header), m(Board, {gameId: vnode.attrs.gameId})]);
  }
}

m.route(document.body, "/", {
    "/": GameView,
    "/game/:gameId": GameView
})
// Signs-in Friendly Chat.
function signIn() {
  // Sign into Firebase using popup auth & Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

// Signs-out of Friendly Chat.
function signOut() {
  // Sign out of Firebase.
  firebase.auth().signOut();
}

// Initiate Firebase Auth.
function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
}

// Returns the signed-in user's profile pic URL.
function getProfilePicUrl() {
  return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
}

// Returns the signed-in user's display name.
function getUserName() {
  return firebase.auth().currentUser.displayName;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!firebase.auth().currentUser;
}

// Saves a new message to your Cloud Firestore database.
// function saveMessage(messageText, chatId) {
//   // Add a new message entry to the database.
//   return firebase.firestore().collection('messages').add({
//     name: getUserName(),
//     text: messageText,
//     profilePicUrl: getProfilePicUrl(),
//     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//     chatId: chatId
//   }).catch(function(error) {
//     console.error('Error writing new message to database', error);
//   });
// }

// Triggered when the send new message form is submitted.
// function onMessageFormSubmit(e) {
//   e.preventDefault();
//   // Check that the user entered a message and is signed in.
//   if (messageInputElement.value && checkSignedInWithMessage()) {
//     saveMessage(messageInputElement.value).then(function() {
//       // Clear message text field and re-enable the SEND button.
//       resetMaterialTextfield(messageInputElement);
//       toggleButton();
//     });
//   }
// }

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
  if (user) { // User is signed in!
    // Get the signed-in user's profile pic and name.
    var profilePicUrl = getProfilePicUrl();
    var userName = getUserName();

    // Set the user's profile pic and name.
    userPicElement.style.backgroundImage = 'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
    userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    userNameElement.removeAttribute('hidden');
    userPicElement.removeAttribute('hidden');
    // signOutButtonElement.removeAttribute('hidden');

    // Hide sign-in button.
    // signInButtonElement.setAttribute('hidden', 'true');
  } else { // User is signed out!
    // Hide user's profile and sign-out button.
    userNameElement.setAttribute('hidden', 'true');
    userPicElement.setAttribute('hidden', 'true');
    // signOutButtonElement.setAttribute('hidden', 'true');

    // // Show sign-in button.
    // signInButtonElement.removeAttribute('hidden');
  }
  m.redraw();
}


// Adds a size to Google Profile pics URLs.
function addSizeToGoogleProfilePic(url) {
  if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
    return url + '?sz=150';
  }
  return url;
}

// A loading image URL.
var LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif?a';

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

// Shortcuts to DOM Elements.

var userPicElement = document.getElementById('user-pic');
var userNameElement = document.getElementById('user-name');

initFirebaseAuth();

// Remove the warning about timstamps change.
var firestore = firebase.firestore();
var settings = {};
firestore.settings(settings);

