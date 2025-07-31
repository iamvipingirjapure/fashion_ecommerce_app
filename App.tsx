import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Alert, StatusBar} from 'react-native';
import MainNavigations from './src/navigation/MainNavigations';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import { GOOGLE_WEB_CLIENT_ID } from '@env';

GoogleSignin.configure({
  webClientId:GOOGLE_WEB_CLIENT_ID
});

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <MainNavigations />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
