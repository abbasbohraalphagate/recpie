import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Feature/Authentication';
import { useDispatch, useSelector } from 'react-redux';
const store = configureStore({
  reducer: {
    authentication: authReducer,
  },
});
export const appDispatch = store.dispatch;
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
