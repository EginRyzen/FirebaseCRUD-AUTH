import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_KEY,
    apiKey: "AIzaSyCLwDIkFsdktT4mE-FK8Kx9gTjScZ72y2s",
    authDomain: "cruduauth.firebaseapp.com",
    projectId: "cruduauth",
    storageBucket: "cruduauth.appspot.com",
    messagingSenderId: "830128321513",
    appId: "1:830128321513:web:a1d03bccb5a02447961178",
    measurementId: "G-6KYB6LR9LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
export const auth = getAuth();