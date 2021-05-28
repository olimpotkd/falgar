import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBtP2xPn7ftjrqKD_KmaPzULUfhfpxNU00",
  authDomain: "falgar-api.firebaseapp.com",
  projectId: "falgar-api",
  storageBucket: "falgar-api.appspot.com",
  messagingSenderId: "324008727736",
  appId: "1:324008727736:web:771f3c5cc0fe807101d04d"
})

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { db, storage };


