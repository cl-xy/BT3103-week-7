import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBW7eHxia6AT1fLkAAp_m4kx9jNYgj1p40",
  authDomain: "bt3103-week-6-5462b.firebaseapp.com",
  projectId: "bt3103-week-6-5462b",
  storageBucket: "bt3103-week-6-5462b.appspot.com",
  messagingSenderId: "392329863053",
  appId: "1:392329863053:web:2c9cb4aae19c99634f27c4",
  measurementId: "G-KKYJLTJTGW"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;