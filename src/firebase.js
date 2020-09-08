import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9aO8UARtR8S6QLevvPRj4S9fDufvOlRM",
  authDomain: "whatsapp-clone-9e522.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-9e522.firebaseio.com",
  projectId: "whatsapp-clone-9e522",
  storageBucket: "whatsapp-clone-9e522.appspot.com",
  messagingSenderId: "236528895565",
  appId: "1:236528895565:web:59622b6d716c4abce1be04",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
