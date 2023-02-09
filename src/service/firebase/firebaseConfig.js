import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2rqDM3TW4z-GXrLoh_yK5-wh6U1FF00s",
  authDomain: "backendrelax.firebaseapp.com",
  projectId: "backendrelax",
  storageBucket: "backendrelax.appspot.com",
  messagingSenderId: "700350035531",
  appId: "1:700350035531:web:005f510a8bda556fddbfce"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

