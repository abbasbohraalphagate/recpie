import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../../screens/Home/HomeScreen';
import HomeScreen from '../../screens/Home/HomeScreen';
import Settings from '../../screens/Home/Profile/Settings';
import BottomStack from '../BottomStack';

export type HomeStackParamList = {
  Home: undefined;
  Details: { itemId: number };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerStyle: { paddingVertical: 20 } }}
  >
    <Stack.Screen
      name="Home"
      component={BottomStack}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);

export default HomeStack;
