// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1ygDGlTUfdhs86fhg0d-lIW3qxjbX-Lo",
  authDomain: "netflixgpt-d4d80.firebaseapp.com",
  projectId: "netflixgpt-d4d80",
  storageBucket: "netflixgpt-d4d80.appspot.com",
  messagingSenderId: "528944427069",
  appId: "1:528944427069:web:fbe3d7b3e134eb41fbfa54",
  measurementId: "G-KCGNJSHYXR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
