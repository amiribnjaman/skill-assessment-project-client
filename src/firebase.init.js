// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBll2AiY2NF-0ZOn0JK2HCI5cvRfxr1DAk",
  authDomain: "skill-assessment-todo-app.firebaseapp.com",
  projectId: "skill-assessment-todo-app",
  storageBucket: "skill-assessment-todo-app.appspot.com",
  messagingSenderId: "904096262643",
  appId: "1:904096262643:web:938a192d05ad2f4a6b4a86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
