// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
//import {initializeAuth} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBI2v1ZQwm2WTxAxtmweBcLo9XCSgtnfYM',
  authDomain: 'react-native-auth-790e7.firebaseapp.com',
  projectId: 'react-native-auth-790e7',
  storageBucket: 'react-native-auth-790e7.appspot.com',
  messagingSenderId: '569707841551',
  appId: '1:569707841551:web:415f4921731e4dded73b7a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);

export {auth, db};
