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
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import AppText from '../../components/common/AppText';
import Header from '../../components/common/Header';

const NewPasswordScreen = ({ navigation }: any) => {
    const handleVerify = () => {
        navigation.navigate('CompleteProfileScreen')
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.container}
        >
            <Header paddingHorizontal={0}/>
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
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={{ padding: 2 }}>
                        <Icon name={true ? "eye-outline" : 'eye--off-outline'} size={26} color={colors.primary} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <AppText style={styles.inputLabel} fontSize={12}>Confirm Password</AppText>
                <View style={[styles.passwordRow, styles.input, { paddingHorizontal: 20, paddingVertical: 2 }]}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={{ padding: 2 }}>
                        <Icon name={true ? "eye-outline" : 'eye--off-outline'} size={26} color={colors.primary} />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                <Text style={styles.verifyText}>Create New Password</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        justifyContent: "flex-start",
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 24,
        borderWidth: 1,
        borderColor: colors.disabled,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 50
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 150,
        marginBottom: 12,
    },
    inputLabel:{ marginBottom: 8 },
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
        alignSelf: "center"
    },
    verifyButton: {
        backgroundColor: colors.primary,
        paddingVertical: 16,
        borderRadius: 32,
        alignItems: 'center',
        marginTop:30
    },
    verifyText: {
        color: '#fff',
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
});

export default NewPasswordScreen;

