// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw_Xo8lYE5z1tX1VrFoSrsEfUSXv2c6Yc",
  authDomain: "bloga-e7c3e.firebaseapp.com",
  projectId: "bloga-e7c3e",
  storageBucket: "bloga-e7c3e.appspot.com",
  messagingSenderId: "632835805757",
  appId: "1:632835805757:web:594ff1bc2a9821feb31054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;



// "site": "blogaa",