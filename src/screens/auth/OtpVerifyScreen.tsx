import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import colors from '../../config/colors';
import Header from '../../components/common/Header';

const OtpVerifyScreen = ({navigation}:any) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text) || text === '') {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (text !== '' && index < 3) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleBackspace = (index: number) => {
    if (index > 0 && otp[index] === '') {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    console.log('Resending OTP...');
  };

  const handleVerify = () => {
    console.log('Entered OTP:', otp.join(''));
    navigation.navigate('NewPasswordScreen')
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}  
      style={styles.container}
    >
    <Header/>
      <Text style={styles.title}>Verify Code</Text>
      <Text style={styles.subtitle}>
        Please enter the code we just sent to email{'\n'}
        <Text style={styles.email}>example@email.com</Text>
      </Text>

      <View style={styles.otpRow}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            ref={(ref) => {(inputs.current[index] = ref)}}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) =>
              nativeEvent.key === 'Backspace' && handleBackspace(index)
            }
          />
        ))}
      </View>

      <Text style={styles.resendText}>
        Didn’t receive OTP?
      </Text>
      <Text onPress={handleResend} style={styles.resendLink}>
          Resend code
        </Text>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"flex-start",
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 24,
    borderWidth:1,
    borderColor:colors.disabled,
    height:40,
    width:40,
    justifyContent:'center',
    alignItems:"center",
    borderRadius:50
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 150,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 24,
  },
  email: {
    color: colors.primary,
    fontWeight: '500',
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 24,
  },
  otpInput: {
    width: 60,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    fontSize: 22,
    color: '#333',
  },
  resendText: {
    textAlign: 'center',
    color: '#777',
    fontSize: 14,
  },
  resendLink: {
    color: colors.primary,
    textDecorationLine: 'underline',
    fontWeight: '500',
    marginBottom: 30,
    alignSelf:"center"
  },
  verifyButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: 'center',
    marginHorizontal: 24,
  },
  verifyText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OtpVerifyScreen;

