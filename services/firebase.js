<<<<<<< HEAD:services/firebaseSetup.js
=======
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAoHiKZD-hGj8rfuK4_iWWJK6KV6qNVX5s",
	authDomain: "e-commerce-cd481.firebaseapp.com",
	projectId: "e-commerce-cd481",
	storageBucket: "e-commerce-cd481.appspot.com",
	messagingSenderId: "868424335775",
	appId: "1:868424335775:web:da79c218ad68b83a6f7daa",
	measurementId: "G-R0ZNQV8FVJ",
};


export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

>>>>>>> 5fc10a291c0f179ae9ee4ada6803f7e8cfd72b3f:services/firebase.js
