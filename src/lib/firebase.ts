import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
// These are publishable keys - safe to include in client-side code
const firebaseConfig = {
  apiKey: "AIzaSyDOpzasjOmIVIZuHjiMK4K592JRdFqKzmI",
  authDomain: "gamegambit-otp.firebaseapp.com",
  projectId: "gamegambit-otp",
  storageBucket: "gamegambit-otp.firebasestorage.app",
  messagingSenderId: "1063265813578",
  appId: "1:1063265813578:web:01e02c311d94d0e57852b3",
  measurementId: "G-F2Y0NB4LHD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;
