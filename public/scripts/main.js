'use strict';
const root = document.body;
const letters = ["a", "b", "c", "d", "e"]
var Header = {
  view: function() {
    return m("header",
     m("div",
      [m("h3", "Nani"),
       m("div", {id: "user-container"},
       [m("div", {id:"user-pic", hidden:!isUserSignedIn()}),
        m("div", {id:"user-name", hidden:!isUserSignedIn()}),
        m("button", {id:"sign-out", hidden:isUserSignedIn()}, "Sign-Out"),
        m("button", {id:"sign-in", hidden:!isUserSignedIn()}, "Sign-In")])]));
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

// TODO: extract form into it's own component

var ChatForm = {
  view: function(vnode) {
    return m("form", {id:"message-form", action: "#", onsubmit: e =>{
      e.preventDefault();
      // Check that the user entered a message and is signed in.
      console.log(vnode.state.msgText);
      if (vnode.state.msgText && isUserSignedIn()) {
        console.log(vnode.state.msgText);
        saveMessage(vnode.state.msgText, vnode.attrs.chatId).then(function() {
          // Clear message text field and re-enable the SEND button.
          vnode.state.msgText = '';
          toggleButton();
        });
      }
    }}, [
      m("input", {type: "text", id:"message", autocomplete:"off", value: vnode.state.msgText, oninput: event => vnode.state.msgText = event.target.value}),
      m("label", {for:"message"}, "Message..."),
      m("button", {id: "submit", disabled: vnode.state.msgText === '', type:"submit"}, "Send")
    ]);
  }
}

var Chat = {
  view: function(vnode) {
    return m("div",[m(Header), m(Main, {chatId: vnode.attrs.chatId})]);
  }
}

var GameBoard = {
  view: function(vnode) {

  }
}


var Tile = {
  view: function(vnode) {
      return m("td.tile",  vnode.attrs.occupiedBy);
  }
}

var Row = {
view: function(vnode) {
    let row = []
    for (let j = 0; j < vnode.attrs.tiles.length; j ++) {
      row.push(m(Tile, vnode.attrs.boardState[vnode.attrs.tiles[j]]));
    }
    return m("tr.row", row);
}
}

var BoardTable = {
view: function(vnode) {
  var rows = [];
  for (let i = 0; i < letters.length; i++) {
    rows.push(m(Row, {boardState: vnode.attrs.boardState, tiles : [letters[i]+"0", letters[i]+"1", letters[i]+"2", letters[i]+"3", letters[i]+"4"]}));
  }
  return m("table.board", rows);
}
}

var exRoute = {
  view: function(vnode) {
    return m("h3", vnode.attrs.chatId)
  }
}
m.route(document.body, "/", {
    "/": Chat,
    "/chat/:chatId": Chat,
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
function saveMessage(messageText, chatId) {
  // Add a new message entry to the database.
  return firebase.firestore().collection('messages').add({
    name: getUserName(),
    text: messageText,
    profilePicUrl: getProfilePicUrl(),
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    chatId: chatId
  }).catch(function(error) {
    console.error('Error writing new message to database', error);
  });
}

function loadMessages(chatId) {
  // Create the query to load the last 12 messages and listen for new ones.
  var query = firebase.firestore()
                  .collection('messages')
                  .where('chatId', '==', chatId)
                  .orderBy('timestamp', 'desc')
                  .limit(12);

  // Start listening to the query.
  query.onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
      if (change.type === 'removed') {
        deleteMessage(change.doc.id);
      } else {
        var message = change.doc.data();
        displayMessage(change.doc.id, message.timestamp, message.name,
                       message.text, message.profilePicUrl, message.imageUrl);
      }
    });
  });
}

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
    signOutButtonElement.removeAttribute('hidden');

    // Hide sign-in button.
    signInButtonElement.setAttribute('hidden', 'true');
  } else { // User is signed out!
    // Hide user's profile and sign-out button.
    userNameElement.setAttribute('hidden', 'true');
    userPicElement.setAttribute('hidden', 'true');
    signOutButtonElement.setAttribute('hidden', 'true');

    // Show sign-in button.
    signInButtonElement.removeAttribute('hidden');
  }
}

// Returns true if user is signed-in. Otherwise false and displays a message.
// function checkSignedInWithMessage() {
//   // Return true if the user is signed in Firebase
//   if (isUserSignedIn()) {
//     return true;
//   }
//
//   // Display a message to the user using a Toast.
//   var data = {
//     message: 'You must sign-in first',
//     timeout: 2000
//   };
//   signInSnackbarElement.MaterialSnackbar.showSnackbar(data);
//   return false;
// }

// Resets the given MaterialTextField.
// function resetMaterialTextfield(element) {
//   element.value = '';
//   element.parentNode.MaterialTextfield.boundUpdateClassesHandler();
// }

// Template for messages.
var MESSAGE_TEMPLATE =
    '<div class="message-container">' +
      '<div class="spacing"><div class="pic"></div></div>' +
      '<div class="message"></div>' +
      '<div class="name"></div>' +
    '</div>';

// Adds a size to Google Profile pics URLs.
function addSizeToGoogleProfilePic(url) {
  if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
    return url + '?sz=150';
  }
  return url;
}

// A loading image URL.
var LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif?a';

// Delete a Message from the UI.
function deleteMessage(id) {
  var div = document.getElementById(id);
  // If an element for that message exists we delete it.
  if (div) {
    div.parentNode.removeChild(div);
  }
}

function createAndInsertMessage(id, timestamp) {
  const container = document.createElement('div');
  container.innerHTML = MESSAGE_TEMPLATE;
  const div = container.firstChild;
  div.setAttribute('id', id);

  // If timestamp is null, assume we've gotten a brand new message.
  // https://stackoverflow.com/a/47781432/4816918
  timestamp = timestamp ? timestamp.toMillis() : Date.now();
  div.setAttribute('timestamp', timestamp);

  // figure out where to insert new message
  const existingMessages = messageListElement.children;
  if (existingMessages.length === 0) {
    messageListElement.appendChild(div);
  } else {
    let messageListNode = existingMessages[0];

    while (messageListNode) {
      const messageListNodeTime = messageListNode.getAttribute('timestamp');

      if (!messageListNodeTime) {
        throw new Error(
          `Child ${messageListNode.id} has no 'timestamp' attribute`
        );
      }

      if (messageListNodeTime > timestamp) {
        break;
      }

      messageListNode = messageListNode.nextSibling;
    }

    messageListElement.insertBefore(div, messageListNode);
  }

  return div;
}

// Displays a Message in the UI.
function displayMessage(id, timestamp, name, text, picUrl, imageUrl) {
  var div = document.getElementById(id) || createAndInsertMessage(id, timestamp);

  // profile picture
  if (picUrl) {
    div.querySelector('.pic').style.backgroundImage = 'url(' + addSizeToGoogleProfilePic(picUrl) + ')';
  }

  div.querySelector('.name').textContent = name;
  var messageElement = div.querySelector('.message');

  if (text) { // If the message is text.
    messageElement.textContent = text;
    // Replace all line breaks by <br>.
    messageElement.innerHTML = messageElement.innerHTML.replace(/\n/g, '<br>');
  } else if (imageUrl) { // If the message is an image.
    var image = document.createElement('img');
    image.addEventListener('load', function() {
      messageListElement.scrollTop = messageListElement.scrollHeight;
    });
    image.src = imageUrl + '&' + new Date().getTime();
    messageElement.innerHTML = '';
    messageElement.appendChild(image);
  }
  // Show the card fading-in and scroll to view the new message.
  setTimeout(function() {div.classList.add('visible')}, 1);
  messageListElement.scrollTop = messageListElement.scrollHeight;
  // messageInputElement.focus();
}

// Enables or disables the submit button depending on the values of the input
// fields.
function toggleButton() {
  if (messageInputElement.value) {
    submitButtonElement.removeAttribute('disabled');
  } else {
    submitButtonElement.setAttribute('disabled', 'true');
  }
}

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
var messageListElement = document.getElementById('messages');
var messageFormElement = document.getElementById('message-form');
var messageInputElement = document.getElementById('message');
var submitButtonElement = document.getElementById('submit');
var userPicElement = document.getElementById('user-pic');
var userNameElement = document.getElementById('user-name');
var signInButtonElement = document.getElementById('sign-in');
var signOutButtonElement = document.getElementById('sign-out');
var signInSnackbarElement = document.getElementById('must-signin-snackbar');

// Saves message on form submit.
// messageFormElement.addEventListener('submit', onMessageFormSubmit);
signOutButtonElement.addEventListener('click', signOut);
signInButtonElement.addEventListener('click', signIn);

// Toggle for the button.
// messageInputElement.addEventListener('keyup', toggleButton);
// messageInputElement.addEventListener('change', toggleButton);


// initialize Firebase
initFirebaseAuth();

// Remove the warning about timstamps change.
var firestore = firebase.firestore();
var settings = {};
firestore.settings(settings);

// TODO: Enable Firebase Performance Monitoring.

// We load currently existing chat messages and listen to new ones.
// loadMessages();
