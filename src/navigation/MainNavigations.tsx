import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TabNavigator} from './TabNaviagtor';
import {SCREENS} from './Screens';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthScreen from '../screens/auth/AuthScreen';
import OtpVerifyScreen from '../screens/auth/OtpVerifyScreen';
import NewPasswordScreen from '../screens/auth/NewPasswordScreen';
import CompleteProfileScreen from '../screens/auth/CompleteProfileScreen';
import NotificationsScreen from '../screens/notification/NotificationsScreen';
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
import SingleProdcutDetails from '../screens/product_details/SingleProductDetails';
import CartScreen from '../screens/cart/CartScreen';
import CheckoutScreen from '../screens/checkout/CheckoutScreen';
import ShippingAddressScreen from '../screens/shipping_address/ShippingAddressScreen';
import ChooseShippingScreen from '../screens/choose_shipping/ChooseShippingScreen';
import PaymentMethodsScreen from '../screens/payment_methods/PaymentMethodsScreen';
import AddCardScreen from '../screens/addCard/AddCardScreen';

export type RootStackParamList = {
  [SCREENS.SPLASH_SCREEN]: undefined;
  [SCREENS.WELCOME_SCREEN]: undefined;
  [SCREENS.AUTH]: undefined;
  [SCREENS.TAB_NAVIGATOR]: undefined;
  [SCREENS.OTP_VERIFY]: undefined;
  [SCREENS.NEW_PASSWORD]: undefined;
  [SCREENS.COMPLETE_PROFILE]: undefined;
  [SCREENS.NOTIFICATIONS_SCREEN]: undefined;
  [SCREENS.SINGLE_PRODUCT_DETAILS]: undefined;
  [SCREENS.CHECKOUT_SCREEN]: undefined;
  [SCREENS.SHIPPING_ADDRESS]: undefined;
  [SCREENS.CHOOSE_SHIPPING]: undefined;
  [SCREENS.PAYMENT_METHODS_SCREEN]: undefined;
  [SCREENS.ADD_CARD]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigations = () => {
  return (
    <Stack.Navigator
      initialRouteName={'TabNavigator'}
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
        name={SCREENS.COMPLETE_PROFILE as keyof RootStackParamList}
        component={CompleteProfileScreen}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name={SCREENS.NOTIFICATIONS as keyof RootStackParamList}
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
        name={SCREENS.SINGLE_PRODUCT_DETAILS as keyof RootStackParamList}
        component={SingleProdcutDetails}
        options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name={SCREENS.CART_SCREEN as keyof RootStackParamList}
        component={CartScreen}
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
        name={
          PracticeAppsScreen.PINK_THEME_REGISTER as keyof RootStackParamList
        }
        component={PinkThemeRegisterPage}
        options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'fade',
        }}
      />

      <Stack.Screen
        name={SCREENS.CHECKOUT_SCREEN as keyof RootStackParamList}
        component={CheckoutScreen}
        options={{
          animation: 'slide_from_bottom',
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name={SCREENS.CHOOSE_SHIPPING}
        component={ChooseShippingScreen}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name={SCREENS.SHIPPING_ADDRESS}
        component={ShippingAddressScreen}
        options={{
          animation: 'slide_from_right',
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name={SCREENS.PAYMENT_METHODS_SCREEN}
        component={PaymentMethodsScreen}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name={SCREENS.ADD_CARD}
        component={AddCardScreen}
        options={{
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigations;
