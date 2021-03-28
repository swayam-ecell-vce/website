// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAsneJHcCV-jOBABL9BMKNxF-fD9jC38wk",
	authDomain: "swayam-website.firebaseapp.com",
	projectId: "swayam-website",
	storageBucket: "swayam-website.appspot.com",
	messagingSenderId: "1072514710827",
	appId: "1:1072514710827:web:fc0eaa1b0c0ecae42b596e",
	measurementId: "G-1RS7JKFVE7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);