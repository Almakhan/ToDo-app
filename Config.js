// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTDmKav9JaqMMPoUGL1-AaccFPo9YuzSw",
  authDomain: "project-app-6a75b.firebaseapp.com",
  projectId: "project-app-6a75b",
  storageBucket: "project-app-6a75b.appspot.com",
  messagingSenderId: "599828397301",
  appId: "1:599828397301:web:e9de321db52ba05547d9bc"
};

// Initialize Firebase
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
 
export default firebase.firestore();