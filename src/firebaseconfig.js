// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth" // 👈 Add this for Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA2KZKpWscluIcH9F3nDbpoIY5fqZmawTw",
	authDomain: "ecomm-83f52.firebaseapp.com",
	projectId: "ecomm-83f52",
	storageBucket: "ecomm-83f52.firebasestorage.app",
	messagingSenderId: "659810046793",
	appId: "1:659810046793:web:26c091d2410973d5c6c098",
	measurementId: "G-486J3LX09K",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Analytics (optional — only works in browsers)
const analytics = getAnalytics(app)

// Initialize Firebase Authentication and export it
export const auth = getAuth(app)

// Export app (optional, in case you need it elsewhere)
export default app
