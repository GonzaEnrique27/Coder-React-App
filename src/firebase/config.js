// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeNXA5ggCJC73seHcl0JdOCwmDTuAyd8I",
  authDomain: "eguitar-361a7.firebaseapp.com",
  databaseURL: "https://eguitar-361a7-default-rtdb.firebaseio.com",
  projectId: "eguitar-361a7",
  storageBucket: "eguitar-361a7.appspot.com",
  messagingSenderId: "939948532033",
  appId: "1:939948532033:web:8e073c6f7f3ec7b57f01c0",
  measurementId: "G-B1V8BP6CHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)