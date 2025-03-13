// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAc4QuELDt7aAAM0e3oVB7DMfGgZywBnjY',
  authDomain: 'analytics-chemical-auth.firebaseapp.com',
  projectId: 'analytics-chemical-auth',
  storageBucket: 'analytics-chemical-auth.firebasestorage.app',
  messagingSenderId: '998031674600',
  appId: '1:998031674600:web:6a0bfbe96223ef806a4d5d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
