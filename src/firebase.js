import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCA5Uy9mbKK-v1uln89eUQ04Vut7Wyc1CM",
    authDomain: "twitter-clone-989.firebaseapp.com",
    databaseURL: "https://twitter-clone-989.firebaseio.com",
    projectId: "twitter-clone-989",
    storageBucket: "twitter-clone-989.appspot.com",
    messagingSenderId: "584517028387",
    appId: "1:584517028387:web:aafb11cac5dd88596f3f96",
    measurementId: "G-3F9GH20CR8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db