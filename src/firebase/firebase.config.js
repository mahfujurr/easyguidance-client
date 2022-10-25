// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEaCepCXexdIwZHZUoDxtVg68US3-GCF8",
  authDomain: "easy-guidance.firebaseapp.com",
  projectId: "easy-guidance",
  storageBucket: "easy-guidance.appspot.com",
  messagingSenderId: "551866150584",
  appId: "1:551866150584:web:bb04a04ec1cbdef2f54e4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;