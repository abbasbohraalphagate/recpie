import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import HomeStack from '../HomeStack';
import SearchScreen from '../../screens/Home/Search';
import CreatePost from '../../screens/Home/CreatePost';
import LikeComment from '../../screens/Home/LikeComment';
import Profile from '../../screens/Home/Profile';
import HomeScreen from '../../screens/Home/HomeScreen';
import Settings from '../../screens/Home/Profile/Settings';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'DashBoard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Like') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Create') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2e7d32',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShadowVisible: false,
        headerTitle: '',
        headerStyle: { height: 80 },
      })}
    >
      <Tab.Screen name="DashBoard" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Create" component={CreatePost} />
      <Tab.Screen name="Like" component={LikeComment} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomStack;
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@react-native-vector-icons/ionicons';
// import HomeStack from '../HomeStack';
// import SearchScreen from '../../screens/Home/Search';
// import CreatePost from '../../screens/Home/CreatePost';
// import LikeComment from '../../screens/Home/LikeComment';
// import Profile from '../../screens/Home/Profile';
// import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
// import { Alert, Animated, StyleSheet } from 'react-native';
// import TouchableComponent from '../../component/TouchableComponent';
// import { COLORS } from '../../constant';
// const Tab = createBottomTabNavigator();

// const BottomStack = () => {
//   const _renderIcon = (routeName, selectedTab) => {
//     let icon = '';

//     switch (routeName) {
//       case 'Home':
//         icon = selectedTab == 'Home' ? 'home' : 'home-outline';
//         break;
//       case 'Like':
//         icon = selectedTab == 'Like' ? 'heart' : 'heart-outline';
//         break;
//       case 'Profile':
//         icon = selectedTab == 'Profile' ? 'person' : 'person-outline';
//         break;
//       case 'Search':
//         icon = selectedTab == 'Search' ? 'search' : 'search-outline';
//         break;
//     }

//     return (
//       <Ionicons
//         name={icon}
//         size={25}
//         color={routeName === selectedTab ? '#EF8E0F' : 'black'}
//       />
//     );
//   };
//   const renderTabBar = ({ routeName, selectedTab, navigate }) => {
//     return (
//       <TouchableComponent
//         onPress={() => navigate(routeName)}
//         style={styles.tabbarItem}
//       >
//         {_renderIcon(routeName, selectedTab)}
//       </TouchableComponent>
//     );
//   };
//   return (
//     <CurvedBottomBar.Navigator
//       type="DOWN"
//       style={styles.bottomBar}
//       shadowStyle={styles.shawdow}
//       height={65}
//       circleWidth={50}
//       bgColor={COLORS.white}
//       initialRouteName="Home"
//       borderTopLeftRight
//       renderCircle={({ selectedTab, navigate }) => (
//         <Animated.View style={styles.btnCircleUp}>
//           <TouchableComponent
//             style={styles.button}
//             onPress={() => navigate('Create')}
//           >
//             <Ionicons
//               name={
//                 selectedTab == 'Create' ? 'add-circle' : 'add-circle-outline'
//               }
//               color={selectedTab == 'Create' ? '#EF8E0F' : 'black'}
//               size={50}
//             />
//           </TouchableComponent>
//         </Animated.View>
//       )}
//       tabBar={renderTabBar}
//     >
//       <CurvedBottomBar.Screen
//         name="Home"
//         position="LEFT"
//         component={HomeStack}
//       />
//       <CurvedBottomBar.Screen
//         name="Search"
//         position="LEFT"
//         component={SearchScreen}
//       />
//       <CurvedBottomBar.Screen
//         name="Create"
//         component={CreatePost}
//         position="CENTER"
//       />
//       <CurvedBottomBar.Screen
//         name="Like"
//         position="RIGHT"
//         component={LikeComment}
//       />
//       <CurvedBottomBar.Screen
//         name="Profile"
//         component={Profile}
//         position="RIGHT"
//       />
//     </CurvedBottomBar.Navigator>
//   );
// };

// export default BottomStack;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   shawdow: {
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//     shadowOpacity: 1,
//     shadowRadius: 5,
//   },
//   button: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   bottomBar: {
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//     shadowOpacity: 1,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   btnCircleUp: {
//     bottom: 20,
//   },
//   imgCircle: {
//     width: 30,
//     height: 30,
//     tintColor: 'gray',
//   },
//   tabbarItem: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   img: {
//     width: 30,
//     height: 30,
//   },
//   screen1: {
//     flex: 1,
//     backgroundColor: '#BFEFFF',
//   },
//   screen2: {
//     flex: 1,
//     backgroundColor: '#FFEBCD',
//   },
// });
