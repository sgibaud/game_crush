// database/firebaseDb.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC09bQSnl1J4tJ8-2uKm0EY_kmtGSvI5FE",
    authDomain: "bejewel-87aa5.firebaseapp.com",
    databaseURL: "https://bejewel-87aa5.firebaseio.com",
    projectId: "bejewel-87aa5",
    storageBucket: "bejewel-87aa5.appspot.com",
    messagingSenderId: "93215067657",
    appId: "1:93215067657:web:2403e421664db83a67b2d8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app};