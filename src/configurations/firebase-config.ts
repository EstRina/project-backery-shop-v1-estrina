// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAGf9re1zCIowtsJCNKFFnb-OTjUKamw-4",
    authDomain: "bakery-shop-estrina.firebaseapp.com",
    projectId: "bakery-shop-estrina",
    storageBucket: "bakery-shop-estrina.firebasestorage.app",
    messagingSenderId: "735607441504",
    appId: "1:735607441504:web:782036d387f341d0191b05"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)