// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB1F_Asjay-6OghSOy-UWoeUTTfC3F66dY',
  authDomain: 'coffee-auth-7d7c0.firebaseapp.com',
  projectId: 'coffee-auth-7d7c0',
  storageBucket: 'coffee-auth-7d7c0.firebasestorage.app',
  messagingSenderId: '332493607791',
  appId: '1:332493607791:web:2b0f2d72f7a01a53de0e9a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
