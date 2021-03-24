import firebase from 'firebase';
var firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDkEZaA4b7XCAMMGoAHfEBkaXbfQN2uDDM',
  authDomain: 'floxus-website.firebaseapp.com',
  projectId: 'floxus-website',
  storageBucket: 'floxus-website.appspot.com',
  messagingSenderId: '3570935219',
  appId: '1:3570935219:web:0f4c9e95de115e15db17c6',
});

var db = firebaseApp.firestore();

export { db };
