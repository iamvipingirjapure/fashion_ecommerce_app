import {getMessaging} from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
const requestUserPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log('yesss');
  } else {
    console.log('noooo');
  }
};

const getToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log(token);
  } catch (error) {
    console.log(error);
  }
};

export const UseNotification = () => {
  useEffect(() => {
    requestUserPermission();
    getToken();
  }, []);
};
