// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6rOM9CuR2MOHfHhElnPfJhHU3Q0uoWZU",
  authDomain: "meetapp-bae8e.firebaseapp.com",
  projectId: "meetapp-bae8e",
  storageBucket: "meetapp-bae8e.appspot.com",
  messagingSenderId: "1062938974610",
  appId: "1:1062938974610:web:e9f5e64dfe0fc04afcc94b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);