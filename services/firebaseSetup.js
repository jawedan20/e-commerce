import firebase from "firebase/app";

const config = {
	apiKey: "AIzaSyAoHiKZD-hGj8rfuK4_iWWJK6KV6qNVX5s",
	authDomain: "e-commerce-cd481.firebaseapp.com",
	projectId: "e-commerce-cd481",
	storageBucket: "e-commerce-cd481.appspot.com",
	messagingSenderId: "868424335775",
	appId: "1:868424335775:web:da79c218ad68b83a6f7daa",
	measurementId: "G-R0ZNQV8FVJ",
};

firebase.initializeApp(config);

export const messaging = firebase.messaging()
export const firestore = firebase.firestore();
