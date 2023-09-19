import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCJnuc4BpXlLA-WKnr4ggc0OnhQIUqCyXI",
  authDomain: "image-gallery-e3fac.firebaseapp.com",
  projectId: "image-gallery-e3fac",
  storageBucket: "image-gallery-e3fac.appspot.com",
  messagingSenderId: "540959217853",
  appId: "1:540959217853:web:470cd82b2058ee4e1cbfd4",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);