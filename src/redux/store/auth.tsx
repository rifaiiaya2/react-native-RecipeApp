import {useEffect} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../../config/firebase';
import {useDispatch} from 'react-redux';
import {setUserId, setUserEmail} from '../slices/authSlice';
import {AppDispatch} from './store';

export const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setUserId(user.uid));
        dispatch(setUserEmail(user.email));
        console.log('Dispatched userEmail:', user.email);
      } else {
        dispatch(setUserId(null));
        dispatch(setUserEmail(null));
      }
    });
    return unsub;
  }, [dispatch]);

  return {user: auth.currentUser};
};
