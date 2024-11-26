import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Replace these values with your actual Firebase config values
const firebaseConfig = {
  apiKey: "AIzaSyBe6BLrxEEmI2MnYYIPqfvMO1SE99JcRe8",
  authDomain: "rubrica-dw1.firebaseapp.com",
  projectId: "rubrica-dw1",
  storageBucket: "rubrica-dw1.firebasestorage.app",
  messagingSenderId: "166965982973",
  appId: "1:166965982973:web:c775da98bf00158407b094"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);