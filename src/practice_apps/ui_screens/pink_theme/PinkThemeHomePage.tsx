import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {pinkhomepagebg} from './assets/Images';
import {useNavigation} from '@react-navigation/native';
import {PracticeAppsScreen} from '../../PracticeAppsScreen';

const LoginScreen = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={pinkhomepagebg}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={{alignSelf: 'flex-start', marginLeft: 50}}>
          <View style={styles.box} />
          <Text style={{fontSize: 36, color: '#000000', opacity: 0.6}}>
            Lorem
          </Text>
          <Text style={{fontSize: 24, width: 190, opacity: 0.6}}>
            consequat duis enim velit
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(PracticeAppsScreen.PINK_THEME_LOGIN)
          }
          style={{
            height: 60,
            width: 140,
            borderWidth: 1.5,
            borderRadius: 12,
            borderColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            top: 220,
            left: 100,
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 100,
    width: 100,
    borderWidth: 1,
    marginBottom: 2,
    borderRadius: 100,
    backgroundColor: '#303030',
    opacity: 0.6,
  },
});

export default LoginScreen;
