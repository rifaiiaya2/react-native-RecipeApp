import {Alert, Platform, ToastAndroid} from 'react-native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {auth, db} from '../config/firebase';
import {FirebaseError} from 'firebase/app';
import {doc, setDoc} from 'firebase/firestore';

export const handleSignUp = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const userId = userCredential.user.uid;
    await setDoc(doc(db, 'users', userId), {
      name: name,
      email: email,
    });
    return userId;
  } catch (error) {
    if (isFirebaseError(error)) {
      if (error.code === 'auth/email-already-in-use') {
        const errorMessage = 'Email is already registered.';
        showAlert(errorMessage);
      } else {
        showAlert('An error occurred. Please try again later.');
      }
    } else {
      showAlert('An unexpected error occurred. Please try again later.');
    }
    return null;
  }
};
export const handleLogin = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user.uid;
  } catch (error) {
    if (isFirebaseError(error)) {
      if (
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/user-not-found'
      ) {
        const errorMessage = 'Incorrect email or password.';
        showAlert(errorMessage);
      } else {
        showAlert('An error occurred. Please try again later.');
      }
    } else {
      showAlert('An unexpected error occurred. Please try again later.');
    }
    return null;
  }
};
const isFirebaseError = (error: any): error is FirebaseError => {
  return error.code !== undefined && error.message !== undefined;
};

export const showAlert = (message: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert(message);
  }
};
