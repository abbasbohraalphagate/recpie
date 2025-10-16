import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/Auth/Login';
import RegisterScreen from '../../screens/Auth/CreateAccount';
import SendCode from '../../screens/Auth/ResendCode';
import SelectAccount from '../../screens/Auth/SelectAccount';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SendCode"
      component={SendCode}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Select Account"
      component={SelectAccount}
      options={{ headerShown: true }}
    />
  </Stack.Navigator>
);

export default AuthStack;
