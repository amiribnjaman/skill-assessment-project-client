import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBll2AiY2NF-0ZOn0JK2HCI5cvRfxr1DAk",
    authDomain: "skill-assessment-todo-app.firebaseapp.com",
    projectId: "skill-assessment-todo-app",
    storageBucket: "skill-assessment-todo-app.appspot.com",
    messagingSenderId: "904096262643",
    appId: "1:904096262643:web:c22d84d71e3208576b4a86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;