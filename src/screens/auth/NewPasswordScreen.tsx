import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../config/colors';
import AppText from '../../components/common/AppText';
import Header from '../../components/common/Header';
import { poppins } from '../../utils/fonts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const NewPasswordScreen = ({ navigation }: any) => {
    const [userData, setUserData] = useState({
        password: '',
        confirmPassword: ''
    });

    const [isVisible, setIsVisible] = useState(false);

    const handlePasswordChange = (name: string, value: string) => {
        setUserData({ ...userData, [name]: value });
    };

    const handleVerify = () => {
        setUserData({ password: '', confirmPassword: '' });
        navigation.navigate('CompleteProfileScreen');
    };

    const handleToggleIsVisible = () => {
        setIsVisible(prev => !prev);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header paddingHorizontal={0} />
            <KeyboardAwareScrollView
                contentContainerStyle={{ paddingBottom: 40 }}
                enableOnAndroid
                extraScrollHeight={60}
                keyboardShouldPersistTaps="handled"
            >
                <Text style={styles.title}>New Password</Text>
                <Text style={styles.subtitle}>
                    Your new password must be different from previously used passwords.
                </Text>

                <PasswordInput
                    label="Password"
                    value={userData.password}
                    onChangeText={(text) => handlePasswordChange('password', text)}
                    isVisible={isVisible}
                    toggleVisibility={handleToggleIsVisible}
                />

                <PasswordInput
                    label="Confirm Password"
                    value={userData.confirmPassword}
                    onChangeText={(text) => handlePasswordChange('confirmPassword', text)}
                    isVisible={isVisible}
                    toggleVisibility={handleToggleIsVisible}
                />

                <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                    <Text style={styles.verifyText}>Create New Password</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const PasswordInput = ({
    label,
    value,
    onChangeText,
    isVisible,
    toggleVisibility
}: {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    isVisible: boolean;
    toggleVisibility: () => void;
}) => (
    <View style={{ marginBottom: 16 }}>
        <AppText style={styles.inputLabel} fontSize={12}>{label}</AppText>
        <View style={[styles.passwordRow, styles.input, { paddingHorizontal: 20, paddingVertical: 2 }]}>
            <TextInput
                style={{ flex: 1 }}
                placeholder={label}
                secureTextEntry={!isVisible}
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity style={styles.eyeBtn} onPress={toggleVisibility}>
                <Feather name={isVisible ? "eye-off" : "eye"} size={22} color={colors.primary} />
            </TouchableOpacity>
        </View>
    </View>
);

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
        fontFamily: poppins.bold
    },
    inputLabel: { marginBottom: 8 },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
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
    },
    eyeBtn: { padding: 2 }
});

export default NewPasswordScreen;
