import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import HomeScreen from '../screens/HomeScreen';
import BottomTabBar from './BottomTabBar';
import NotificationsScreen from '../screens/notification/NotificationsScreen';
import MyWishlistScreen from '../screens/wishlist/MyWishlistScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import {SCREENS} from './Screens';
import CartScreen from '../screens/cart/CartScreen';
import {TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="HomeScreen"
    tabBar={props => <BottomTabBar {...props} />}>
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Octicons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name={'cart'}
      component={() => null}
      options={({navigation}) => ({
        tabBarButton: () => (
          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.CART_SCREEN)}>
            <Octicons name="cart" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
    />
    <Tab.Screen
      name="Favorites"
      component={MyWishlistScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Octicons name="Fav" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name={SCREENS.NOTIFICATIONS}
      component={NotificationsScreen}
      options={{
        animation: 'shift',
        tabBarIcon: ({color, size}) => (
          <Octicons name="Notifications" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Octicons name="heart-fill" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
