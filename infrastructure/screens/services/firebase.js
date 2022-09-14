// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import  {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCYEiPBILpNDXuVMIVHodw8hOaXx2z5lY",
  authDomain: "lunar-tube-362014.firebaseapp.com",
  projectId: "lunar-tube-362014",
  storageBucket: "lunar-tube-362014.appspot.com",
  messagingSenderId: "435439514045",
  appId: "1:435439514045:web:7827f5fc4bc4dacf6162d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
