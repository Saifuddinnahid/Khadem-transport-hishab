import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAN8GF7ZGnjGRjSeNnTVRPwmNRhQ_8bjIo",
  authDomain: "khadem-transport.firebaseapp.com",
  projectId: "khadem-transport",
  storageBucket: "khadem-transport.firebasestorage.app",
  messagingSenderId: "661423353107",
  appId: "1:661423353107:web:4b27ba0d206d26c2873ee6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
