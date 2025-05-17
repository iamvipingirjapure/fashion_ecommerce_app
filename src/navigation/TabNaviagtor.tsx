import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons'
import HomeScreen from '../screens/HomeScreen';
import BottomTabBar from './BottomTabBar';
import NotificationsScreen from '../screens/notification/NotificationsScreen';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#1976d2',
    }}
    tabBar={(props) => <BottomTabBar {...props} />}
  >
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Octicons name="home" color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="Cart"
      component={NotificationsScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Octicons name="Cart" color={color} size={size} />,
      }}
    />
     <Tab.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Octicons name="Notifications" color={color} size={size} />,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;