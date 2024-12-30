import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBvsnhNOLO1N1j_0wW0b07zwfYxWs10Jo",
  authDomain: "online-quiz-game-e1ed6.firebaseapp.com",
  projectId: "online-quiz-game-e1ed6",
  storageBucket: "online-quiz-game-e1ed6.firebasestorage.app",
  messagingSenderId: "517828558889",
  appId: "1:517828558889:web:297c7e5e11a8a895e25c38",
  measurementId: "G-7QBP44KCC9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
export const db = getFirestore(app);
