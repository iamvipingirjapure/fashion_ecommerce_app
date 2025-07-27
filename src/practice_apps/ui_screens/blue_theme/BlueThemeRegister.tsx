import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useEffect, useRef, useState} from 'react';
import {
  LoginblueImage2,
  blueImage3,
  LoginblueImage1,
  googleImage,
  fbImage,
  appleImage,
} from './assets/images';
import {useNavigation} from '@react-navigation/native';
import {PracticeAppsScreen} from '../../PracticeAppsScreen';

const BlueThemeRegister = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation: any = useNavigation();
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    const keyboardShow = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
      scrollRef.current?.scrollTo({y: 120, animated: true});
    });

    const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}>
        <ScrollView
          ref={scrollRef}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={[
            styles.scrollContainer,
            isKeyboardVisible && {paddingBottom: 100},
          ]}>
          <View style={styles.mainWrapper}>
            <Image
              source={LoginblueImage1}
              style={styles.image1}
              resizeMode="stretch"
            />
            <Image source={LoginblueImage2} style={styles.image2} />
            <View style={styles.formWrapper}>
              <Text style={styles.title}>Register</Text>
              <Text style={styles.label}>Full Name</Text>
              <TextInput style={styles.input} inputMode="text" />
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.input} inputMode="email" />
              <Text style={styles.label}>Password</Text>
              <TextInput style={styles.input} secureTextEntry />
              <TouchableOpacity>
                <Text style={styles.forgot}>Forget Password ?</Text>
              </TouchableOpacity>
              <View style={styles.socialWrapper}>
                {[googleImage, fbImage, appleImage].map((icon, index) => (
                  <TouchableOpacity key={index} style={styles.socialIcon}>
                    <Image source={icon} />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.bottomRow}>
              <View style={styles.registerPrompt}>
                <Text style={styles.registerText}>Already member?</Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(PracticeAppsScreen.BLUE_THEME_LOGIN)
                  }>
                  <Text style={styles.registerLink}>Login</Text>
                </TouchableOpacity>
              </View>
              <Pressable style={styles.loginButton}>
                <Text style={styles.loginText}>Register</Text>
              </Pressable>
            </View>
          </View>
          <Image source={blueImage3} style={styles.image3} resizeMode="cover" />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  flex: {flex: 1},
  scrollContainer: {flexGrow: 1},
  mainWrapper: {flex: 1, position: 'relative', paddingBottom: 0},
  image1: {height: 260, width: '100%', zIndex: 999, marginTop: -60},
  image2: {height: 500, position: 'absolute', marginTop: -80},
  image3: {height: 170, width: '100%', bottom: 0, marginBottom: 0},
  formWrapper: {
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 50,
    marginBottom: -90,
    zIndex: 999,
  },
  title: {fontSize: 32, color: '#2F80ED', fontWeight: 'bold'},
  label: {marginTop: 20, color: '#2F80ED'},
  input: {
    borderWidth: 1.5,
    borderColor: '#2F80ED',
    borderRadius: 12,
    padding: 10,
    marginTop: 8,
  },
  forgot: {
    color: '#2F80ED',
    textAlign: 'right',
    fontWeight: '600',
    marginTop: 5,
  },
  socialWrapper: {
    flexDirection: 'row',
    width: '55%',
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
  },
  socialIcon: {
    height: 45,
    width: 45,
    borderRadius: 5,
    elevation: 6,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'relative',
    justifyContent: 'space-between',
    zIndex: 999,
    bottom: -150,
  },
  registerPrompt: {
    flexDirection: 'row',
    marginBottom: -5,
    marginLeft: 20,
  },
  registerText: {fontSize: 16, color: 'white', marginRight: 5},
  registerLink: {
    fontSize: 16,
    color: 'white',
    marginRight: 5,
    fontWeight: 'bold',
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 150,
    borderRadius: 12,
    alignSelf: 'flex-end',
    marginRight: 20,
    borderWidth: 1,
    borderColor: 'white',
    zIndex: 999,
  },
  loginText: {fontSize: 22, color: 'white'},
});

export default BlueThemeRegister;
