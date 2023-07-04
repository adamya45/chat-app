import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database'
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyB6ZuCDri91faOKe85erLXPijZhJ9p5aB4",
  authDomain: "chat-web-app-730c9.firebaseapp.com",
  databaseURL: "https://chat-web-app-730c9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-web-app-730c9",
  storageBucket: "chat-web-app-730c9.appspot.com",
  messagingSenderId: "1068135017269",
  appId: "1:1068135017269:web:dedb06b536356da171ba7c"
  };

  const app = firebase.initializeApp(config);
  export const auth = app.auth();
  export const database = app.database();
  export const storage = app.storage();