import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {logout} from './authActions';
interface AuthState {
  userId: string | null;
  userEmail: string | null;
  isLoading: boolean;
  error: string | null;
}
const initialState: AuthState = {
  userId: null,
  userEmail: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserId(state, action: PayloadAction<string | null>) {
      state.userId = action.payload;
    },
    setUserEmail(state, action: PayloadAction<string | null>) {
      state.userEmail = action.payload;
      console.log('Setting userEmail:', action.payload);
    },
    clearUserData(state) {
      state.userId = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.userId = null;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
      });
  },
});

export const {setUserId, clearUserData, setUserEmail} = authSlice.actions;
export default authSlice.reducer;
