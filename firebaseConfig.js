
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAHN589skuWjh4PESCsHnad_UjQvco2BdM",
    authDomain: "blogging-app-6cc1e.firebaseapp.com",
    projectId: "blogging-app-6cc1e",
    storageBucket: "blogging-app-6cc1e.appspot.com",
    messagingSenderId: "290659739377",
    appId: "1:290659739377:web:446982e327b1a7fcc12b50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { db , storage };