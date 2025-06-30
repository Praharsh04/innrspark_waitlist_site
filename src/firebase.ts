import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

export default app;
