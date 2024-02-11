import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiv3oQlAgGJqkAnFTKLKXiinQ8Eke0GTM",
  authDomain: "chat-nextjs-01.firebaseapp.com",
  projectId: "chat-nextjs-01",
  storageBucket: "chat-nextjs-01.appspot.com",
  messagingSenderId: "538589276391",
  appId: "1:538589276391:web:3f943750a07acffebe5a42",
  measurementId: "G-KJHLN0QRP9",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
