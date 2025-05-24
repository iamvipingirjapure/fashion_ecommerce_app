import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../config/colors';
import AppText from '../../components/common/AppText';
import Header from '../../components/common/Header';
import { poppins } from '../../utils/fonts';

const NewPasswordScreen = ({ navigation }: any) => {
    const [userData, setUserData] = useState({
        password: '',
        confirmPassword: ''
    })

    const  handlePasswordChange = (name:string,value:string) => {
        setUserData({...userData,[name]:value})
    }


    const [isVisible, setIsVisible] = useState(false)
    const handleVerify = () => {
        setUserData({
            password: '',
            confirmPassword: ''
        })
        navigation.navigate('CompleteProfileScreen')
    };

    const handleToggleIsVisible = () => {
        setIsVisible(prev => !prev)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header paddingHorizontal={0} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
            >
                <Text style={styles.title}>New Password</Text>
                <Text style={styles.subtitle}>
                    Your new password must be different from previously used passwords.
                </Text>

                <View>
                    <AppText style={styles.inputLabel} fontSize={12}>Password</AppText>
                    <View style={[styles.passwordRow, styles.input, { paddingHorizontal: 20, paddingVertical: 2 }]}>
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Password"
                            secureTextEntry={isVisible}
                            value={userData.password}
                            onChangeText={(text) => handlePasswordChange('password', text)}
                        />
                        <TouchableOpacity style={styles.eyeBtn} onPress={handleToggleIsVisible}>
                            <Feather name={!isVisible ? "eye" : 'eye-off'} size={22} color={colors.primary} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <AppText style={styles.inputLabel} fontSize={12}>Confirm Password</AppText>
                    <View style={[styles.passwordRow, styles.input, { paddingHorizontal: 20, paddingVertical: 2 }]}>
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Password"
                            secureTextEntry={isVisible}
                            value={userData.confirmPassword}
                            onChangeText={(text) => handlePasswordChange('confirmPassword', text)}
                        />
                        <TouchableOpacity style={styles.eyeBtn} onPress={handleToggleIsVisible}>
                            <Feather name={!isVisible ? "eye" : 'eye-off'} size={22} color={colors.primary} />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                    <Text style={styles.verifyText}>Create New Password</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "flex-start",
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 150,
        marginBottom: 12,
        fontFamily:poppins.bold
    },
    inputLabel: { marginBottom: 8 },
    subtitle: {
        fontSize: 16,
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
    verifyButton: {
        backgroundColor: colors.primary,
        paddingVertical: 16,
        borderRadius: 32,
        alignItems: 'center',
        marginTop: 30
    },
    verifyText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '500',
    },
    passwordRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        borderColor: colors.disabled,
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 15,
    },
    eyeBtn: { padding: 2 }
});

export default NewPasswordScreen;

