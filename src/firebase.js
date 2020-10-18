import firebase from 'firebase'
  // Initialize Firebase
  var  firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBTZqMhYG8lSgFmIVwJhAFJ3NuupH1XNAo",
    authDomain: "ninjadevelopers-test.firebaseapp.com",
    databaseURL: "https://ninjadevelopers-test.firebaseio.com",
    projectId: "ninjadevelopers-test",
    storageBucket: "ninjadevelopers-test.appspot.com",
    messagingSenderId: "68680497969",
    appId: "1:68680497969:web:e5e13be22ef102fca18e10",
    measurementId: "G-J7MSGLK8S6"
  });

  var db=firebaseApp.firestore()
export {db} 