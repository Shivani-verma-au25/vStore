// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_META_API_KEY ,
  authDomain: "vstore-8f09d.firebaseapp.com",
  projectId: "vstore-8f09d",
  storageBucket: "vstore-8f09d.firebasestorage.app",
  messagingSenderId: "642505667852",
  appId: "1:642505667852:web:87b084920cf6a0f8008529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
export {app , auth};
