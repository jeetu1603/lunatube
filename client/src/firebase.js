import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_4zTO9a-setGNWj6FN6RX6YLkhs8qXcs",
  authDomain: "lunatube-f9609.firebaseapp.com",
  projectId: "lunatube-f9609",
  storageBucket: "lunatube-f9609.appspot.com",
  messagingSenderId: "337617660022",
  appId: "1:337617660022:web:b9fece18df268aea1e1757",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
