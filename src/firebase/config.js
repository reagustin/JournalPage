// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers/getEnvironments';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const env = getEnvironments();
console.log(env);

// console.log(process.env);
// console.log(import.meta.env);

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyBRMUxHnDn9q38_9aSlOcl2ERF0aQtSd6A",
//   authDomain: "react-cursos-baa4d.firebaseapp.com",
//   projectId: "react-cursos-baa4d",
//   storageBucket: "react-cursos-baa4d.appspot.com",
//   messagingSenderId: "1049568898071",
//   appId: "1:1049568898071:web:797e2168aad57b2f4fc052"
// };

//Testing
const firebaseConfig = {
  apiKey: "AIzaSyDk_Zo0HdggRAgvXby-qJ-RV7AmTSctUks",
  authDomain: "react-base-testing-e1c2b.firebaseapp.com",
  projectId: "react-base-testing-e1c2b",
  storageBucket: "react-base-testing-e1c2b.appspot.com",
  messagingSenderId: "710403280692",
  appId: "1:710403280692:web:fbb4f0a0ead85a238b1f61"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);