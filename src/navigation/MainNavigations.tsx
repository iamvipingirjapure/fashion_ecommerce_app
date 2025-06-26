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
import { SCREENS } from './Screens';

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
    <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{ headerShown: false }}>
  <Stack.Screen
    name="SplashScreen"
    component={SplashScreen}
    options={{
      animation: 'fade',
      animationTypeForReplace: 'pop',
    }}
  />
  <Stack.Screen
    name="WelcomeScreen"
    component={WelcomeScreen}
    options={{
      animation: 'slide_from_right',
    }}
  />
  <Stack.Screen
    name="AuthScreen"
    component={AuthScreen}
    options={{
      animation: 'slide_from_right',
    }}
  />
  <Stack.Screen
    name="OtpVerifyScreen"
    component={OtpVerifyScreen}
    options={{
      animation: 'slide_from_bottom',
      presentation: 'modal',
    }}
  />
  <Stack.Screen
    name={SCREENS.NEW_PASSWORD as keyof RootStackParamList}
    component={NewPasswordScreen}
    options={{
      headerShown: false,
      presentation: 'modal',
      animationTypeForReplace: 'push',
      animation: 'slide_from_right',
    }}
  />
  <Stack.Screen
    name="CompleteProfileScreen"
    component={CompleteProfileScreen}
    options={{
      animation: 'slide_from_right',
    }}
  />
  <Stack.Screen
    name="NotificationsScreen"
    component={NotificationsScreen}
    options={{
      animation: 'slide_from_right',
    }}
  />
  <Stack.Screen
    name="TabNavigator"
    component={TabNavigator}
    options={{
      animation: 'fade_from_bottom',
    }}
  />
</Stack.Navigator>
  );
};

export default MainNavigations;
