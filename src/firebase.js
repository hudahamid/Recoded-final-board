// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC247HvY2C2cEmgbZd7FJOEmT46_lPagVo",
  authDomain: "recoded-final-board.firebaseapp.com",
  projectId: "recoded-final-board",
  storageBucket: "recoded-final-board.appspot.com",
  messagingSenderId: "362948537008",
  appId: "1:362948537008:web:f70e5aa4593f20b909a975",
  measurementId: "G-YETELJTTBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;