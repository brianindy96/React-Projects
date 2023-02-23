// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHZhkS81brekUb5GU78a6BEujou0TrPe8",
  authDomain: "react-crud-9e734.firebaseapp.com",
  projectId: "react-crud-9e734",
  storageBucket: "react-crud-9e734.appspot.com",
  messagingSenderId: "9830103468",
  appId: "1:9830103468:web:19ae9e4f88431047286209"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);