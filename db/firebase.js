import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCjGldwhk0yy4mq6SFYS_trYblwWJh1bZY",
    authDomain: "weddingcastle-5c9e9.firebaseapp.com",
    projectId: "weddingcastle-5c9e9",
    storageBucket: "weddingcastle-5c9e9.appspot.com",
    messagingSenderId: "374807296699",
    appId: "1:374807296699:web:0e7c44bd0abbe10dcf479e",
    measurementId: "G-WB6F60GYNB"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);    
// const analytics = getAnalytics(app);
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth()
const provider = new GoogleAuthProvider();
export { db, storage, auth, provider }