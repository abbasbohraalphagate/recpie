import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomStack from '../BottomStack';
import Settings from '../../screens/Home/Profile/Settings';
import EditProfile from '../../screens/Home/Profile/EditProfile';
import CreateRecipe from '../../screens/Home/CreatePost/CreateRecpie';
import CreateTip from '../../screens/Home/CreatePost/CreateTip';
import Post from '../../screens/Home/CreatePost/Post';
import CreateLive from '../../screens/Home/CreatePost/CreateLive';
import MainSearch from '../../screens/Home/Search/MainSearch';
import UserProfile from '../../screens/Home/UserProfile';
import Chat from '../../screens/Home/Chat';
import ChatSearch from '../../screens/Home/ChatSearch';
import MessageNotifications from '../../screens/Home/MessageNotification';
import InviteUser from '../../screens/Home/InviteUser';
import Privacy from '../../screens/Home/Privacy';
import PremiumContent from '../../screens/Home/PremiumContent';
import CustomHeader from '../../component/CustomHeader';
import SecurityScreen from '../../screens/Home/Security';
import PaymentScreen from '../../screens/Home/Payment';
import AccountScreen from '../../screens/Home/Account/Index';
import AboutScreen from '../../screens/Home/About';
import HelpScreen from '../../screens/Home/Help';
import AnalyticsScreen from '../../screens/Home/Analytics';
import Filter from '../../screens/Home/Search/Filter';
import LikeComment from '../../screens/Home/LikeComment';

const Stack = createNativeStackNavigator();

const screens = [
  { name: 'Home', component: BottomStack, options: { headerShown: false } },
  { name: 'Settings', component: Settings, options: { title: 'Settings' } },
  {
    name: 'EditProfile',
    component: EditProfile,
    options: { title: 'Edit Profile' },
  },
  {
    name: 'CreateRecpie',
    component: CreateRecipe,
    options: { title: 'Create Recipe' },
  },
  { name: 'CreateTip', component: CreateTip, options: { title: 'Create Tip' } },
  { name: 'Post', component: Post, options: { title: 'Post' } },
  {
    name: 'CreateLive',
    component: CreateLive,
    options: { title: 'Create Live' },
  },
  { name: 'MainSearch', component: MainSearch, options: { title: 'Search' } },
  {
    name: 'UserProfile',
    component: UserProfile,
    options: { title: 'Profile' },
  },
  {
    name: 'Chat',
    component: Chat,
    options: { title: 'Chat', headerShown: true },
  },
  {
    name: 'ChatSearch',
    component: ChatSearch,
    options: { title: 'Search Chat', headerShown: false },
  },
  {
    name: 'MessageNotifications',
    component: MessageNotifications,
    options: { title: 'Messages' },
  },
  { name: 'InviteUser', component: InviteUser, options: { title: 'Invite' } },
  { name: 'Privacy', component: Privacy, options: { title: 'Privacy' } },
  {
    name: 'PremiumContent',
    component: PremiumContent,
    options: { title: 'Premium' },
  },
  { name: 'Security', component: SecurityScreen },
  { name: 'Payment', component: PaymentScreen },
  { name: 'Account', component: AccountScreen },
  { name: 'About', component: AboutScreen },
  { name: 'Help', component: HelpScreen },
  { name: 'Analytics', component: AnalyticsScreen },
  { name: 'Filter', component: Filter },
  { name: 'Like', component: LikeComment },
];

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      header: ({ navigation, route, options, back }) => (
        <CustomHeader
          navigation={navigation}
          title={'Back'}
          showBack={!!back}
          Options={options}
        />
      ),
      statusBarHidden: false,
      statusBarStyle: 'dark',
      statusBarAnimation: 'fade',
    }}
  >
    {screens.map(screen => (
      <Stack.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={screen.options}
      />
    ))}
  </Stack.Navigator>
);

export default HomeStack;
