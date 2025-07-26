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
  ImageBackground,
  Animated,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {PracticeAppsScreen} from '../../PracticeAppsScreen';
import {appleImage, fbImage, googleImage} from '../blue_theme/assets/images';
import { pinkthemeregisterbg} from './assets/Images';

const PinkThemeRegisterPage = () => {
  const navigation: any = useNavigation();
  const scrollRef = useRef<ScrollView>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();

    const keyboardShow = Keyboard.addListener('keyboardDidShow', () => {
      scrollRef.current?.scrollTo({y: 120, animated: true});
    });

    return () => {
      keyboardShow.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}>
        <ImageBackground
          source={pinkthemeregisterbg}
          resizeMode="cover"
          style={styles.mainWrapper}>
          <ScrollView
            ref={scrollRef}
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled">
            <Animated.View style={[styles.mainWrapper, {opacity: fadeAnim}]}>
              <View style={styles.formWrapper}>
                <Text style={styles.title}>Register</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  inputMode="text"
                  placeholderTextColor={'#FFFFFF'}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  inputMode="email"
                  placeholderTextColor={'#FFFFFF'}
                />
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  placeholder="Password"
                  placeholderTextColor={'#FFFFFF'}
                />
                <View style={styles.registerBtnRow}>
                  <Pressable
                    onPress={() =>
                      navigation.navigate(
                        PracticeAppsScreen.PINK_THEME_HOMEPAGE,
                      )
                    }
                    style={styles.loginButton}>
                    <Text style={styles.loginText}>Register</Text>
                  </Pressable>
                </View>
                <View style={styles.bottomRow}>
                  <View style={styles.socialWrapper}>
                    {[googleImage, fbImage, appleImage].map((icon, index) => (
                      <TouchableOpacity key={index} style={styles.socialIcon}>
                        <Image source={icon} />
                      </TouchableOpacity>
                    ))}
                  </View>
                  <View style={styles.loginPrompt}>
                    <Text style={styles.logintext}>Already a member?</Text>
                    <TouchableOpacity
                      style={styles.loginButtonWrapper}
                      onPress={() =>
                        navigation.navigate(PracticeAppsScreen.PINK_THEME_LOGIN)
                      }>
                      <Text style={styles.loginLink}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Animated.View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  flex: {flex: 1},
  scrollContainer: {flexGrow: 1},
  mainWrapper: {flex: 1},
  formWrapper: {
    marginTop: 290,
    paddingLeft: 20,
    paddingRight: 50,
    zIndex: 999,
    marginBottom: 'auto',
  },
  title: {fontSize: 36, color: '#FFFFFF', fontWeight: 'bold', marginBottom: 12},
  input: {
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    marginTop: 8,
    marginVertical: 30,
    height: 50,
    color: '#FFFFFF',
  },
  forgot: {
    color: 'white',
    textAlign: 'right',
    fontWeight: '600',
    marginTop: 5,
    fontSize: 16,
  },
  socialWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginRight: 10,
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  loginPrompt: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  logintext: {fontSize: 16, color: 'white', marginRight: 5, textAlign:"right",width:120},
  loginLink: {
    fontSize: 18,
    color: 'white',
    marginRight: 10,
    fontWeight: 'bold',
    verticalAlign: 'bottom',
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 140,
    borderRadius: 12,
    alignSelf: 'flex-end',
    borderWidth: 1.5,
    borderColor: 'white',
    zIndex: 999,
  },
  loginText: {fontSize: 22, color: 'white'},
  loginButtonWrapper: {
    justifyContent: 'flex-end',
  },
  registerBtnRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
});

export default PinkThemeRegisterPage;
