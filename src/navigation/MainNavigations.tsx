import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import {TabNavigator} from './TabNaviagtor';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthScreen from '../screens/auth/AuthScreen';
import OtpVerifyScreen from '../screens/auth/OtpVerifyScreen';
import NewPasswordScreen from '../screens/auth/NewPasswordScreen';
import CompleteProfileScreen from '../screens/auth/CompleteProfileScreen';
import NotificationsScreen from '../screens/notification/NotificationsScreen';
import {SCREENS} from './Screens';
import List from '../practice_apps/changing_background_color/List';
import {PracticeAppsScreen} from '../practice_apps/PracticeAppsScreen';
import ChangingBgColour from '../practice_apps/changing_background_color/ChangingBgColor';
import RollingDice from '../practice_apps/rolling_dice/RollingDice';
import MusicPlayer from '../practice_apps/music_player/MusicPlayer';
import Login from '../practice_apps/ui_screens/runroutefinder/Login';
import HomePage from '../practice_apps/ui_screens/blue_theme/HomePage';
import BlueThemeLogin from '../practice_apps/ui_screens/blue_theme/BlueThemeLogin';
import BlueThemeRegister from '../practice_apps/ui_screens/blue_theme/BlueThemeRegister';
import PinkThemeHomePage from '../practice_apps/ui_screens/pink_theme/PinkThemeHomePage';
import PinkThemeLoginPage from '../practice_apps/ui_screens/pink_theme/PinkThemeLoginPage';
import PinkThemeRegisterPage from '../practice_apps/ui_screens/pink_theme/PinkThemeRegisterPage';

export type RootStackParamList = {
  SplashScreen: undefined;
  HomeScreen: undefined;
  WelcomeScreen: undefined;
  AuthScreen: undefined;
  TabNavigator: undefined;
  OtpVerifyScreen: undefined;
  NewPasswordScreen: undefined;
  CompleteProfileScreen: undefined;
  NotificationsScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigations = () => {
  return (
    <Stack.Navigator
      initialRouteName={PracticeAppsScreen.PINK_THEME_LOGIN  as any}
      screenOptions={{headerShown: false}}>
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
      <Stack.Screen
        name={SCREENS.PRACTICE_APPS as keyof RootStackParamList}
        component={List}
        options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name={
          PracticeAppsScreen.CHANGING_BACKGROUND as keyof RootStackParamList
        }
        component={ChangingBgColour}
        options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name={PracticeAppsScreen.ROLLING_DICE as keyof RootStackParamList}
        component={RollingDice}
        options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name={PracticeAppsScreen.MUSIC_PLAYER as keyof RootStackParamList}
        component={MusicPlayer}
        options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
        }}
      />

      <Stack.Screen
        name={PracticeAppsScreen.RUN_ROUTE_FINDER as keyof RootStackParamList}
        component={Login}
        options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name={
          PracticeAppsScreen.BLUE_THEME_HOMEPAGE as keyof RootStackParamList
        }
        component={HomePage}
        options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name={PracticeAppsScreen.BLUE_THEME_LOGIN as keyof RootStackParamList}
        component={BlueThemeLogin}
        options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name={
          PracticeAppsScreen.BLUE_THEME_REGISTER as keyof RootStackParamList
        }
        component={BlueThemeRegister}
        options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name={
          PracticeAppsScreen.PINK_THEME_HOMEPAGE as keyof RootStackParamList
        }
        component={PinkThemeHomePage}
        options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name={PracticeAppsScreen.PINK_THEME_LOGIN as keyof RootStackParamList}
        component={PinkThemeLoginPage}
        options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name={PracticeAppsScreen.PINK_THEME_REGISTER as keyof RootStackParamList}
        component={PinkThemeRegisterPage}
        options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'fade',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigations;
