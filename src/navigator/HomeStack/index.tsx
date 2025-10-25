import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../../screens/Home/HomeScreen';
import HomeScreen from '../../screens/Home/HomeScreen';
import Settings from '../../screens/Home/Profile/Settings';
import BottomStack from '../BottomStack';
import EditProfile from '../../screens/Home/Profile/EditProfile';
import CreateAccount from '../../screens/Auth/CreateAccount';
import CreatePost from '../../screens/Home/CreatePost';
import CreateRecipe from '../../screens/Home/CreatePost/CreateRecpie';

export type HomeStackParamList = {
  Home: undefined;
  Details: { itemId: number };
};

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerLeft: () => {
        return null;
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={BottomStack}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
    <Stack.Screen name="CreateRecpie" component={CreateRecipe} />
  </Stack.Navigator>
);

export default HomeStack;
