import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Easing,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import AppText from '../../components/common/AppText';
import { poppins } from '../../utils/fonts';
import { Keyboard } from 'react-native';
import TermsAndConditions from '../terms_and_conditions/TermsAndConditions';

const AuthScreen = ({ navigation }: any) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isTermsOpen,setIsTermsOpen] = useState(false)

    const animation = useState(new Animated.Value(0))[0];

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
        Animated.timing(animation, {
            toValue: isSignUp ? 0 : 1,
            duration: 500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
        }).start();
    };
const handleToggleTerms = (isOpen:boolean) => {
    setIsTermsOpen(isOpen)
}

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView
                        contentContainerStyle={styles.container}
                        keyboardShouldPersistTaps="handled"
                    >
                        {isSignUp ? <SignUpForm isTermsOpen={isTermsOpen} handleToggleTerms={handleToggleTerms}/> : <SignInForm navigation={navigation} />}

                        <TouchableOpacity onPress={toggleForm} style={styles.bottomText}>
                            <Text style={styles.link}>
                                {isSignUp ? 'Already have an account? Sign In' : `Don't have an account? Sign Up`}
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const SignInForm = ({ navigation }: any) => (
    <View style={styles.form}>
        <View>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.subtitle}>Hi! Welcome back, you’ve been missed</Text>
        </View>

        <View>
            <View>
                <AppText style={styles.inputLabel} fontSize={12}>Email</AppText>
                <TextInput style={styles.emailInput} placeholder="Enter Email"
                    placeholderTextColor={colors.black}
                />
            </View>

            <View style={{ marginVertical: 18 }}>
                <AppText style={styles.inputLabel} fontSize={12}>Password</AppText>
                <View style={[styles.passwordRow, styles.input, { paddingHorizontal: 20, paddingVertical: 2 }]}>
                    <TextInput
                        style={{ flex: 1, color: colors.black }}
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor={colors.black}
                    />
                    <TouchableOpacity style={{ padding: 2 }}>
                        <Icon name={true ? "eye-outline" : 'eye--off-outline'} size={26} color={colors.primary} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.linkSmall}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('OtpVerifyScreen')}>
            <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
            <View style={styles.orHrLine} />
            <Text style={styles.or}>Or sign in with</Text>
            <View style={styles.orHrLine} />
        </View>
        <SocialIcons />
    </View>
);

const SignUpForm = ({isTermsOpen,handleToggleTerms}:{isTermsOpen : boolean,handleToggleTerms:any}) => (
    <View style={styles.form}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Fill your information below or register with your social account.</Text>

        <View style={{ marginBottom: 16 }}>
            <AppText style={styles.inputLabel} fontSize={12}>Name</AppText>
            <TextInput style={styles.emailInput} placeholder="Enter Name" inputMode='text' />
        </View>
        <View>
            <AppText style={styles.inputLabel} fontSize={12}>Email</AppText>
            <TextInput style={styles.emailInput} placeholder="Enter Email" inputMode='email' />
        </View>
        <View style={{ marginVertical: 16 }}>
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


            <View style={styles.checkboxRow}>
                <Icon name="checkbox" size={20} color={colors.primary} />
                <Text style={styles.termsText}>Agree with
                        </Text>
                <TouchableOpacity onPress={()=>handleToggleTerms(true)}>
                <Text style={styles.linkSmall}>
                Terms & Condition</Text>
                </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
            <View style={styles.orHrLine} />
            <Text style={styles.or}>Or sign up with</Text>
            <View style={styles.orHrLine} />
        </View>
        <SocialIcons />
        <TermsAndConditions isTermsOpen={isTermsOpen} onClose={handleToggleTerms}/>
    </View>
);

const SocialIcons = () => (
    <View style={styles.socialRow}>
        {['logo-apple', 'logo-google', 'logo-facebook'].map(item => <TouchableOpacity key={item} style={styles.socialRowBtn}>
            <Icon name={item} size={28} color={colors.primary} />
        </TouchableOpacity>)}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 40,
        justifyContent: 'center'
        , marginTop: 100
    },
    formContainer: {
        borderWidth: 1
    },
    form: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: '500',
        marginBottom: 10,
        alignSelf: "center",
        color: colors.primary
    },
    subtitle: {
        fontSize: 16,
        color: '#777',
        marginBottom: 20,
        alignSelf: "center",
        textAlign: "center",
        width: 280
    },
    input: {
        borderColor: colors.disabled,
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 15,
    },
    emailInput: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: colors.disabled,
        borderRadius: 23,
        color: colors.black
    },
    inputLabel: { marginBottom: 8 },
    passwordRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        gap: 8,
    },
    termsText: {
        fontSize: 16,
        color: '#333',
    },
    primaryBtn: {
        backgroundColor: colors.primary,
        padding: 16,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 20,
    },
    btnText: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 16,
    },
    orContainer: { flexDirection: "row", alignItems: 'center', justifyContent: "center" },
    or: {
        textAlign: 'center',
        color: colors.primary,
        fontSize: 16,
        marginHorizontal: 10,
        includeFontPadding: false
    },
    orHrLine: { height: 1, backgroundColor: colors.primary, width: 100, },
    socialRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 5
    },
    socialRowBtn: { borderWidth: 1, height: 70, width: 70, justifyContent: "center", alignItems: "center", borderRadius: 50, borderColor: colors.disabled },
    bottomText: {
        alignItems: 'center',
    },
    link: {
        color: colors.primary,
        fontWeight: '500',
    },
    linkSmall: {
        color: colors.primary,
        fontSize: 14,
        textDecorationLine: "underline",
        alignSelf: "flex-end",
        includeFontPadding: true,
        fontFamily: poppins.semiBold,
        marginLeft:-2
    },
});

export default AuthScreen;