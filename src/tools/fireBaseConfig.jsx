import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADuDGa-P8eNYqCUfurhht3v3NI8tWCsPs",
  authDomain: "asterales-92148.firebaseapp.com",
  projectId: "asterales-92148",
  storageBucket: "asterales-92148.appspot.com",
  messagingSenderId: "672047377627",
  appId: "1:672047377627:web:510553b4ceaaa20c85f0fe"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;


