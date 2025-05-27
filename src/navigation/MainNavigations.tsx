import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import { TabNavigator } from './TabNaviagtor';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthScreen from '../screens/auth/AuthScreen';
import OtpVerifyScreen from '../screens/auth/OtpVerifyScreen';
import NewPasswordScreen from '../screens/auth/NewPasswordScreen';
import CompleteProfileScreen from '../screens/auth/CompleteProfileScreen';
import NotificationsScreen from '../screens/notification/NotificationsScreen';

export type RootStackParamList = {
  SplashScreen: undefined;
  HomeScreen: undefined;
  WelcomeScreen:undefined;
  AuthScreen:undefined;
  TabNavigator: undefined; 
  OtpVerifyScreen:undefined;
  NewPasswordScreen:undefined;
  CompleteProfileScreen:undefined;
  NotificationsScreen:undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigations = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthScreen"
      screenOptions={{ headerShown: false }} 
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="OtpVerifyScreen" component={OtpVerifyScreen} />
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
      <Stack.Screen name="CompleteProfileScreen" component={CompleteProfileScreen} />
      <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigations;
