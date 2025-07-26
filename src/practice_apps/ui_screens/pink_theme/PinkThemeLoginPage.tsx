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
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {PracticeAppsScreen} from '../../PracticeAppsScreen';
import {appleImage, fbImage, googleImage} from '../blue_theme/assets/images';
import {pinkthemeloginbg} from './assets/Images';

const PinkThemeLoginPage = () => {
  const navigation: any = useNavigation();
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
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
          source={pinkthemeloginbg}
          resizeMode="cover"
          style={styles.mainWrapper}>
          <ScrollView
            ref={scrollRef}
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled">
            <View style={styles.mainWrapper}>
              <View style={styles.formWrapper}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} placeholder='Email' inputMode='email' placeholderTextColor={"#FFFFFF"} />
                <TextInput style={styles.input} secureTextEntry placeholder='Password' placeholderTextColor={"#FFFFFF"} />
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:30}}>
                  <TouchableOpacity>
                    <Text style={styles.forgot}>Forget Password ?</Text>
                  </TouchableOpacity>
                  <Pressable
                    onPress={() =>
                      navigation.navigate(
                        PracticeAppsScreen.PINK_THEME_REGISTER,
                      )
                    }
                    style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
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
                    <View style={styles.registerPrompt}>
                      <Text style={styles.registerText}>New Here?</Text>
                      <TouchableOpacity onPress={() =>
                      navigation.navigate(
                        PracticeAppsScreen.PINK_THEME_REGISTER,
                      )
                    }>
                        <Text style={styles.registerLink}>Register</Text>
                      </TouchableOpacity>
                    </View>
                </View>
              </View>
            </View>
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
    marginTop: 350,
    paddingLeft: 20,
    paddingRight: 50,
    zIndex: 999,
    marginBottom:"auto",
  },
  title: {fontSize: 36, color: '#FFFFFF', fontWeight: 'bold',marginBottom:12},
  input: {
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    marginTop: 8,
    marginVertical:30,
    height:50,
    color:"#FFFFFF"
  },
  forgot: {
    color: 'white',
    textAlign: 'right',
    fontWeight: '600',
    marginTop: 5,
    fontSize:16
  },
  socialWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
    gap:10,
    flexWrap:"wrap"
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
  bottomRow:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:80},
  registerPrompt: {
    flexDirection: 'row',
    flexWrap:"wrap",
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
    width: 140,
    borderRadius: 12,
    alignSelf: 'flex-end',
    borderWidth: 1.5,
    borderColor: 'white',
    zIndex: 999,
  },
  loginText: {fontSize: 22, color: 'white'},
});

export default PinkThemeLoginPage;
