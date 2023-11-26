
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCeE1TO6OlYA-uJuOCuaIo-chmqgxSG560",
  authDomain: "finance-project-fe349.firebaseapp.com",
  projectId: "finance-project-fe349",
  storageBucket: "finance-project-fe349.appspot.com",
  messagingSenderId: "649535058042",
  appId: "1:649535058042:web:9588275065cddbfb20cbc3",
  measurementId: "G-0XMD6RTGTF"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
