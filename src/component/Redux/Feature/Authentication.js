import { createSlice } from '@reduxjs/toolkit';

export const navigationStateType = {
  HOME: 'HOME',
  AUTH: 'AUTH',
  LOADING: 'LOADING',
};

export const authentication = createSlice({
  name: 'counter',
  initialState: {
    userData: null,
    navigationState: navigationStateType?.LOADING,
    expire: false,
    alertModal: false,
    alertMessage: null,
    isSignUpAllowed: false,
  },
  reducers: {
    setNavigationState: (state, action) => {
      state.navigationState = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setExpire: (state, action) => {
      state.expire = action.payload;
    },
    setAlertModal: (state, action) => {
      state.alertModal = action.payload;
    },
    setAlertMessage: (state, action) => {
      state.alertMessage = action.payload;
    },
    setIsSignUpAllowed: (state, action) => {
      state.isSignUpAllowed = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setNavigationState,
  setUserData,
  setExpire,
  setAlertMessage,
  setAlertModal,
  setIsSignUpAllowed,
} = authentication.actions;

export default authentication.reducer;
