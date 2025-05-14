import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYwJ4VIqLWROxtuf1tIzDW-LOU7W2aLwE",
  authDomain: "devblog-773b0.firebaseapp.com",
  projectId: "devblog-773b0",
  storageBucket: "devblog-773b0.firebasestorage.app",
  messagingSenderId: "128583994814",
  appId: "1:128583994814:web:25ff8b283bed0f395fbdef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);