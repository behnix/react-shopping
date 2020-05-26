import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDc15lBtsWcFGCnssgY4LbOC6fUfoelNFI",
  authDomain: "behnixtest.firebaseapp.com",
  databaseURL: "https://behnixtest.firebaseio.com",
  projectId: "behnixtest",
  storageBucket: "behnixtest.appspot.com",
  messagingSenderId: "344409975102",
  appId: "1:344409975102:web:038449d8516d3ad68c246f",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
