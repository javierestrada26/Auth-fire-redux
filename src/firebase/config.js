// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBstFrHhi3dgqEbzPnOrUy2pgAYuLLvwKs",
  authDomain: "react-curso-abbd4.firebaseapp.com",
  projectId: "react-curso-abbd4",
  storageBucket: "react-curso-abbd4.firebasestorage.app",
  messagingSenderId: "792650441371",
  appId: "1:792650441371:web:1f508fb3a7fc7af7295c3e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);