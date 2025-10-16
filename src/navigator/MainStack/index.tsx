import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from '../AuthStack';
import HomeStack from '../HomeStack';
import { useSelector } from 'react-redux';
import BottomStack from '../BottomStack';

// Import your stack navigators

// Example: Replace with your actual token fetching logic

const Stack = createNativeStackNavigator();

const MainStack = () => {
  // Replace with your actual selector or context

  return (
    <NavigationContainer>
      {/* {token == null ? <AuthStack /> : <BottomStack />} */}
      {/* <AuthStack /> */}
      <HomeStack />
    </NavigationContainer>
  );
};

export default MainStack;
