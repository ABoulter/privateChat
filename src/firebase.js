import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcZSUzM9oaQNCnihwOkvkD9HV7JsHvNUc",

  authDomain: "mini-chat-ba8ce.firebaseapp.com",

  projectId: "mini-chat-ba8ce",

  storageBucket: "mini-chat-ba8ce.appspot.com",

  messagingSenderId: "294866711046",

  appId: "1:294866711046:web:3665632d41fe424d2ac987",

  measurementId: "G-V7D6RN27Z3",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
