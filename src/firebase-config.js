// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6VRBkn4MKXmFVsh_DfhL6I5n_bBbsNms",
  authDomain: "vida-plena-58c17.firebaseapp.com",
  projectId: "vida-plena-58c17",
  storageBucket: "vida-plena-58c17.appspot.com",
  messagingSenderId: "862771591461",
  appId: "1:862771591461:web:0c4f0b3a23979e89f502cc",
  measurementId: "G-C2ZNLXJ3YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);