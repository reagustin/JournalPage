// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers/getEnvironments';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();


// console.log(process.env);
// console.log(import.meta.env);

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
  // apiKey: "AIzaSyBRMUxHnDn9q38_9aSlOcl2ERF0aQtSd6A",
  // authDomain: "react-cursos-baa4d.firebaseapp.com",
  // projectId: "react-cursos-baa4d",
  // storageBucket: "react-cursos-baa4d.appspot.com",
  // messagingSenderId: "1049568898071",
  // appId: "1:1049568898071:web:797e2168aad57b2f4fc052"
// };

//Testing
const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);