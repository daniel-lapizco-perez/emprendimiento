// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBY8ab8cVW0h8dMezgcMkjdVSmq6_Wzz18",

  authDomain: "loginauth-fa47c.firebaseapp.com",

  projectId: "loginauth-fa47c",

  storageBucket: "loginauth-fa47c.appspot.com",

  messagingSenderId: "609479735603",

  appId: "1:609479735603:web:6e9dc1d4d8c08328812646"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;