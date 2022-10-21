import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBmzQv50Es3gqNZw5NrxgZrwh8lRgadNYw",
    authDomain: "chatp-app-7b960.firebaseapp.com",
    projectId: "chatp-app-7b960",
    storageBucket: "chatp-app-7b960.appspot.com",
    messagingSenderId: "494809582932",
    appId: "1:494809582932:web:df5151a9cefdece8a78cc1"
}).auth();