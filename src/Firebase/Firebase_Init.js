// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_apiKey ,
  // authDomain:import.meta.env.VITE_authDomain ,
  // projectId:import.meta.env.VITE_projectId ,
  // storageBucket:import.meta.env.VITE_storageBucket ,
  // messagingSenderId:import.meta.env.VITE_messagingSenderId ,
  // appId:import.meta.env.VITE_appId 
  apiKey: "AIzaSyD_xynlKvdaYHl3pAhiuaSDgSoqTTIgoaw",
  authDomain: "bistro-boss-resturent-c2038.firebaseapp.com",
  projectId: "bistro-boss-resturent-c2038",
  storageBucket: "bistro-boss-resturent-c2038.firebasestorage.app",
  messagingSenderId: "342605798855",
  appId: "1:342605798855:web:0baf5765e2cb9b63cbcde2",
  
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export default auth