import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { poppins } from "../utils/fonts";
import AppText from "../components/common/AppText";

const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.replace('WelcomeScreen');
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <ImageBackground source={require('../../assets/images/SpalshScreenBg.jpg')}
            style={styles.background}
            resizeMode="cover" blurRadius={0.1}>
            <View style={styles.mainContainer}>
                <AppText fontSize={42} style={styles.appName}>
                    Ecommerce
                </AppText>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    appName: {
        color: colors.white,
        fontFamily: poppins.bold,
        fontWeight: "bold"
    }
});

export default SplashScreen;