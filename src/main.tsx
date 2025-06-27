import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEmqtRlfWMfYWdSgykUpzXw_axgxRrPSE",
  authDomain: "innrspark-7ff44.firebaseapp.com",
  projectId: "innrspark-7ff44",
  storageBucket: "innrspark-7ff44.firebasestorage.app",
  messagingSenderId: "830814321423",
  appId: "1:830814321423:web:4a6a70e80018dcd5e71c7a",
  measurementId: "G-44PQ2PD27Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

createRoot(document.getElementById("root")!).render(<App />);