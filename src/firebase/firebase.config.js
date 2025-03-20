// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyBtaJH6rOu_MX_2rpGjfKi4gznTqqMnZkY",
 authDomain: "movie-box-fba8e.firebaseapp.com",
 projectId: "movie-box-fba8e",
 storageBucket: "movie-box-fba8e.firebasestorage.app",
 messagingSenderId: "115847471805",
 appId: "1:115847471805:web:b53ed420fffb9f0b804dd4"
};
// Import the functions you need from the SDKs you need




// Initialize Firebase


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth