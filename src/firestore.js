import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyCW9-ISIIUhp2-tG9PJfBhYo8g6z2XGOqg",
   authDomain: "companyprofile-683d3.firebaseapp.com",
   projectId: "companyprofile-683d3",
   storageBucket: "companyprofile-683d3.appspot.com",
   messagingSenderId: "1066462494941",
   appId: "1:1066462494941:web:08bac180204ddc37905b34",
   measurementId: "G-5TVGDT7N71"
});

const db = firebaseApp.firestore();
export default db;