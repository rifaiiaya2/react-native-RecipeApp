import {createAsyncThunk} from '@reduxjs/toolkit';
import {signOut} from 'firebase/auth';
import {auth} from '../../config/firebase';
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
