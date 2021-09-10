import "firebase/messaging";
<<<<<<< HEAD
import firebase from "firebase/app";
import { getCookie, setCookie } from "../utils/cookies";
import axios from "../utils/axios";

export const firebaseConfig = {
	apiKey: "AIzaSyAoHiKZD-hGj8rfuK4_iWWJK6KV6qNVX5s",
	authDomain: "e-commerce-cd481.firebaseapp.com",
	projectId: "e-commerce-cd481",
	storageBucket: "e-commerce-cd481.appspot.com",
	messagingSenderId: "868424335775",
	appId: "1:868424335775:web:da79c218ad68b83a6f7daa",
	measurementId: "G-R0ZNQV8FVJ",
};
=======
import firebase from "./firebase";
import { getCookie, setCookie } from "../utils/cookies";
import axios from "../utils/axios";
>>>>>>> 5fc10a291c0f179ae9ee4ada6803f7e8cfd72b3f

const firebaseCloudMessaging = {
	//checking whether token is available in indexed DB
	tokenInCookie: async () => {
		return JSON.parse(getCookie("auth")).token;
	},

	setAuthCookie: (newToken) => {
		async function sendToServer(token) {
			const data = { token };
			const res = await axios
				.post("api/auth/token/", JSON.stringify(data))
				.catch((err) => console.log(err.request));
		}
		sendToServer(newToken);
		let newCookie = JSON.parse(getCookie("auth"));
		newCookie.token = newToken;
		return newCookie;
	},
	getMessage: function () {
<<<<<<< HEAD
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
			const messaging = firebase.messaging();
			// Handle incoming messages. Called when:
			// - a message is received while the app has focus
			// - the user clicks on an app notification created by a service worker
			//   `messaging.onBackgroundMessage` handler.
			messaging.onMessage((payload) => {
				console.log("Message received. ", payload);
				// Update the UI to include the received message.
				appendMessage(payload);
			});
		}
=======
		const messaging = firebase.messaging();
		// Handle incoming messages. Called when:
		// - a message is received while the app has focus
		// - the user clicks on an app notification created by a service worker
		//   `messaging.onBackgroundMessage` handler.
		messaging.onMessage((payload) => {
			console.log("Message received. ", payload);
			// Update the UI to include the received message.
			appendMessage(payload);
		});
>>>>>>> 5fc10a291c0f179ae9ee4ada6803f7e8cfd72b3f
	},
	//initializing firebase app

	init: async function () {
<<<<<<< HEAD
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
			try {
				const messaging = firebase.messaging();
				const tokenInCookie = await this.tokenInCookie();
=======
		try {
			const messaging = firebase.messaging();
			const tokenInCookie = await this.tokenInCookie();
>>>>>>> 5fc10a291c0f179ae9ee4ada6803f7e8cfd72b3f

				//if FCM token is already there just return the token
				if (tokenInCookie.length > 0) {
					return tokenInCookie;
				}

				//requesting notification permission from browser
				const status = await Notification.requestPermission();
				if (status && status === "granted") {
					//getting token from FCM
					const fcm_token = await messaging.getToken();
					if (fcm_token) {
						//setting FCM token in indexed db using localforage
						let newAuth = this.setAuthCookie(fcm_token);
						setCookie("auth", newAuth);
						//return the FCM token after saving it
						return fcm_token;
					}
				}
			} catch (error) {
				console.error(error);
				return null;
			}
		}
	},
};

export { firebaseCloudMessaging };
