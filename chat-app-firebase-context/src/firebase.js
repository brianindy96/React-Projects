// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmzQv50Es3gqNZw5NrxgZrwh8lRgadNYw",
  authDomain: "chatp-app-7b960.firebaseapp.com",
  projectId: "chatp-app-7b960",
  storageBucket: "chatp-app-7b960.appspot.com",
  messagingSenderId: "494809582932",
  appId: "1:494809582932:web:df5151a9cefdece8a78cc1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);





