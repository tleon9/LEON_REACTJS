

import firebase from 'firebase/app';
import 'firebase/firestore';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpwqfqpWn1eOkXm_5NGrmytgP2q6TFsDA",
  authDomain: "reactjsapp-c3d0a.firebaseapp.com",
  projectId: "reactjsapp-c3d0a",
  storageBucket: "reactjsapp-c3d0a.appspot.com",
  messagingSenderId: "139406749470",
  appId: "1:139406749470:web:eb5cfb17b7284227fae30f",
  measurementId: "G-3XGKY507L5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}