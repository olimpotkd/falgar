import firebase from "firebase";
import 'firebase/app-check';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBtP2xPn7ftjrqKD_KmaPzULUfhfpxNU00",
  authDomain: "falgar-api.firebaseapp.com",
  projectId: "falgar-api",
  storageBucket: "falgar-api.appspot.com",
  messagingSenderId: "324008727736",
  appId: "1:324008727736:web:771f3c5cc0fe807101d04d"
})

const appCheck = firebase.appCheck();
appCheck.activate('6LftQBEbAAAAAJ9T3I5kNP_FLsoGyFiVRJitWHu8');

const db = firebaseApp.firestore();
// const storage = firebaseApp.storage();

export { db };


