import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBNy_zUqIYZ_to_Kf239JeVyXXW1BIsSs",
  authDomain: "blogappversiontwo.firebaseapp.com",
  projectId: "blogappversiontwo",
  storageBucket: "blogappversiontwo.appspot.com",
  messagingSenderId: "615467065217",
  appId: "1:615467065217:web:cde9d2f44bb3c4ebd5d280",
  measurementId: "G-357TWWPT78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { db, storage };
