// Import the functions you need from the SDKs you need

import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

import {getAnalytics} from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyAIgCYDZtja7x_lNZPw05taZccWm-3NzOQ",

    authDomain: "e-comm-442dc.firebaseapp.com",

    projectId: "e-comm-442dc",

    storageBucket: "e-comm-442dc.appspot.com",

    messagingSenderId: "851163209479",

    appId: "1:851163209479:web:5276374d035c0548396fa2",

    measurementId: "G-JJEEHLKMXF"

};


// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);
export default db;

//const analytics = getAnalytics(app);