// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn6VlssXLMz5Rh412tZJsewFqfvd_pBkw",
  authDomain: "testing-b4fdc.firebaseapp.com",
  databaseURL: "https://testing-b4fdc-default-rtdb.firebaseio.com",
  projectId: "testing-b4fdc",
  storageBucket: "testing-b4fdc.appspot.com",
  messagingSenderId: "669049531598",
  appId: "1:669049531598:web:82c7147dd6b260e4cef49f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
