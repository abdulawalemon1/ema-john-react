// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhNONoBfo3a23UY0iRCyKz4G_E2YWKJQg",
    authDomain: "ema-john-react-c9a63.firebaseapp.com",
    projectId: "ema-john-react-c9a63",
    storageBucket: "ema-john-react-c9a63.appspot.com",
    messagingSenderId: "748072329041",
    appId: "1:748072329041:web:c40665a9a0d4e2c6bbbd70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default app;