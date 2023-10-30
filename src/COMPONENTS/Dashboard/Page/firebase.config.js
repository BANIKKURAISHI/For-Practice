// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3Nokb_r_QSZqb805u7JTRQtlQY_5gDYc",
  authDomain: "chiken-shop-b4814.firebaseapp.com",
  projectId: "chiken-shop-b4814",
  storageBucket: "chiken-shop-b4814.appspot.com",
  messagingSenderId: "718546630002",
  appId: "1:718546630002:web:514db4cfe9a7b3dc1219eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
