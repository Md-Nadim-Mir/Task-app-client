// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB6nzmxUQgyIEBzCYQk12QVcN7e9tXzV7c",
  authDomain: "task-management-273f9.firebaseapp.com",
  projectId: "task-management-273f9",
  storageBucket: "task-management-273f9.appspot.com",
  messagingSenderId: "552195045767",
  appId: "1:552195045767:web:33183a542c532c81b2fb22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
