import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBEXk5VRJTxCNbM5NffANosXMu-7AXHk2U",
  authDomain: "inquietobaby-a33ac.firebaseapp.com",
  projectId: "inquietobaby-a33ac",
  storageBucket: "inquietobaby-a33ac.appspot.com",
  messagingSenderId: "655280868844",
  appId: "1:655280868844:web:7e835fe9147597b6af44c9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
