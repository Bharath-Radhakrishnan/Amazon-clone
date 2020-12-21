import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5sh5yP5dg6MjKWwVPdDojnYJQaM_EeSA",
  authDomain: "clone-b2903.firebaseapp.com",
  projectId: "clone-b2903",
  storageBucket: "clone-b2903.appspot.com",
  messagingSenderId: "203240749228",
  appId: "1:203240749228:web:f5729c7112c237fe6c0709",
  measurementId: "G-WNBWYWK05F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
