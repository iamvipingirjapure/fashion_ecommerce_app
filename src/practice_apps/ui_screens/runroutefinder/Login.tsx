import {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEyeOpen, setIsEyeOpen] = useState(true);
  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  const handleIsEyeOpen = () => setIsEyeOpen(prev => !prev);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.fullContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.logoRow}>
            <Text style={styles.logoWhite}>RUN</Text>
            <Text style={styles.logoDark}>ROUTE</Text>
            <Text style={styles.logoWhite}>FINDER</Text>
          </View>
          <Text style={styles.loginTitle}>LOGIN</Text>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.signupRow}>
            <Text style={styles.signupText}>Don't have an account ? </Text>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.loginCard}>
        <View style={styles.avatar}></View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput inputMode="text" style={styles.textInput} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.textInput}>
            <TextInput
              inputMode="text"
              secureTextEntry={isEyeOpen}
              style={{width: '90%', fontSize: 18}}
            />
            <Icon
              name={isEyeOpen ? 'eye' : 'eye-off'}
              size={22}
              onPress={handleIsEyeOpen}
            />
          </View>
        </View>
        {isLoading ? (
          <Text style={styles.isLoadingText}>Loading...</Text>
        ) : (
          <Pressable style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </Pressable>
        )}
      </View>

      <View style={styles.backgroundCard}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#3DEBB3',
  },
  fullContainer: {
    flex: 1,
    position: 'relative',
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#3DEBB3',
  },
  logoRow: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
  },
  logoWhite: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  logoDark: {
    fontSize: 28,
    color: '#303030',
    fontWeight: 'bold',
  },
  loginTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 22,
  },
  footerContainer: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  signupRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 60,
    flexDirection: 'row',
  },
  signupText: {
    fontSize: 18,
  },
  signupLink: {
    color: '#3DEBB3',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  loginCard: {
    height: 500,
    width: '90%',
    position: 'absolute',
    backgroundColor: 'white',
    top: '40%',
    transform: [{translateY: -100}],
    borderColor: 'black',
    borderRadius: 16,
    alignSelf: 'center',
    zIndex: 999,
    elevation: 9,
    paddingTop: 55,
    padding: 25,
  },
  avatar: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderRadius: 50,
    alignSelf: 'center',
  },
  inputGroup: {
    marginTop: 20,
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    marginTop: 19,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 18,
  },
  loginButton: {
    height: 50,
    width: 120,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303030',
    marginTop: 45,
    alignSelf: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  backgroundCard: {
    height: 400,
    width: '80%',
    position: 'absolute',
    backgroundColor: 'lightgrey',
    top: '55%',
    transform: [{translateY: -100}],
    borderColor: 'black',
    borderRadius: 12,
    alignSelf: 'center',
    elevation: 9,
  },
  isLoadingText: {
    textAlign: 'center',
    marginTop: 35,
  },
});

export default Login;
