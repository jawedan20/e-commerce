importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js');

let firebaseConfig = {
	apiKey: "AIzaSyAoHiKZD-hGj8rfuK4_iWWJK6KV6qNVX5s",
	authDomain: "e-commerce-cd481.firebaseapp.com",
	projectId: "e-commerce-cd481",
	storageBucket: "e-commerce-cd481.appspot.com",
	messagingSenderId: "868424335775",
	appId: "1:868424335775:web:da79c218ad68b83a6f7daa",
	measurementId: "G-R0ZNQV8FVJ",
};

firebase.initializeApp(firebaseConfig);
  
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();



messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});