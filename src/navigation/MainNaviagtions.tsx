import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import { TabNavigator } from './TabNaviagtor';

export type RootStackParamList = {
  SplashScreen: undefined;
  Home: undefined;
  Tabs: undefined; 
};

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigations = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }} 
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigations;
