// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh42U6u2n9J_kw1NGu4fb7o_6mhNEpbGA",
  authDomain: "codeaspirant-blog-5cd5b.firebaseapp.com",
  projectId: "codeaspirant-blog-5cd5b",
  storageBucket: "codeaspirant-blog-5cd5b.appspot.com",
  messagingSenderId: "1075942592506",
  appId: "1:1075942592506:web:da1c41562d82a8e3a81e43",
  measurementId: "G-V3SL3HWWSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);