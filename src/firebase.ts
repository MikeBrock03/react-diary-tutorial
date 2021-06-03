import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCBJ1kUnoxkUhUKP0Aw1IcsC_flqmpUf90",
  authDomain: "daily-moments-46dc4.firebaseapp.com",
  projectId: "daily-moments-46dc4",
  storageBucket: "daily-moments-46dc4.appspot.com",
  messagingSenderId: "833376565514",
  appId: "1:833376565514:web:9aacf4410753e0b685e2f3"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const firestore = app.firestore();
export const storage = app.storage();