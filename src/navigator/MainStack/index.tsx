import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from '../AuthStack';
import HomeStack from '../HomeStack';
import { useSelector } from 'react-redux';
import BottomStack from '../BottomStack';
import { View } from 'react-native';
import { useAppSelector } from '../../component/Redux/App/Store';
import { navigationStateType } from '../../component/Redux/Feature/Authentication';
import Loader from '../../component/Loader/Loader';

// Import your stack navigators

// Example: Replace with your actual token fetching logic

const Stack = createNativeStackNavigator();

const MainStack = () => {
  // Replace with your actual selector or context
  const { userData, navigationState, expire, alertModal } = useAppSelector(
    (state: { authentication: any }) => state.authentication,
  );
  // const queryClient = new QueryClient();

  // useEffect(() => {
  //   const initializeApp = async () => {
  //     try {
  //       const [storedUser, introShown] = await Promise.all([
  //         AsyncStorage.getItem('userData'),
  //         AsyncStorage.getItem('alreadyLaunch'),
  //       ]);

  //       const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  //       if (!introShown) {
  //         // App opened for the first time
  //         await AsyncStorage.setItem('alreadyLaunch', 'true');
  //         appDispatch(setNavigationState(navigationStateType.INTRO));
  //       } else if (parsedUser) {
  //         // User already logged in
  //         appDispatch(setUserData(parsedUser));
  //         appDispatch(setNavigationState(navigationStateType.HOME));
  //       } else {
  //         // Returning user but not logged in
  //         appDispatch(setNavigationState(navigationStateType.AUTH));
  //       }
  //     } catch (error) {
  //       console.error('Error initializing app:', error);
  //       appDispatch(setNavigationState(navigationStateType.AUTH));
  //     }
  //   };

  //   initializeApp();
  // }, [i18n]);

  // React.useEffect(() => {
  //   const saveDetail = async () => {
  //     await AsyncStorage.setItem('userData', JSON.stringify(userData));
  //   };
  //   saveDetail();
  //   if (userData) {
  //     appDispatch(setNavigationState(navigationStateType.HOME));
  //   } else if (navigationStateType.LOADING !== navigationState) {
  //     appDispatch(setNavigationState(navigationStateType.AUTH));
  //   }
  // }, [userData]);

  const renderStack = () => {
    switch (navigationState) {
      case navigationStateType.AUTH:
        return <AuthStack />;
      case navigationStateType.HOME:
        return <HomeStack />;
      default:
        return <Loader />;
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>{renderStack()}</NavigationContainer>
    </View>
  );
};

export default MainStack;
