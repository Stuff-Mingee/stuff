// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGaO_uqslWVCAUvpHXN2i5B7y2U9qGNl4",
    authDomain: "stuff-b6e3f.firebaseapp.com",
    projectId: "stuff-b6e3f",
    storageBucket: "stuff-b6e3f.appspot.com",
    messagingSenderId: "693379612834",
    appId: "1:693379612834:web:7223ae1872950f29f2d7fb",
    measurementId: "G-W322TCGW6P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
