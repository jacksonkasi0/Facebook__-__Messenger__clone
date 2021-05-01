import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLdEdk0qBSPROJZTDn7_iVDNfVjJ1xK78",
  authDomain: "messenger-ec8b0.firebaseapp.com",
  projectId: "messenger-ec8b0",
  storageBucket: "messenger-ec8b0.appspot.com",
  messagingSenderId: "888488074926",
  appId: "1:888488074926:web:e63cea9b36449d2e9e173f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, timestamp };
