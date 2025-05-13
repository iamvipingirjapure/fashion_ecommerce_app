import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import AppText from "../components/common/AppText";
import colors from "../config/colors";
import { Link } from '@react-navigation/native';


const { height, width } = Dimensions.get('window')
const WelcomeScreen = () => {
    return <SafeAreaView style={styles.mainContainer}>
        <Image
            style={styles.image}
            source={require('../../assets/images/SpalshScreenBg.jpg')}

        />
        <View style={styles.bottomContainer}>
            <View style={{ flexDirection: "row", flexWrap: "wrap", alignSelf: "center", justifyContent: 'center', alignItems: "center" }}>
                <AppText fontSize={24} style={[styles.text, { fontWeight: 'bold' }]}>
                    The
                </AppText>
                <AppText fontSize={24} style={[styles.text, { fontWeight: 'bold', marginHorizontal: 10, color: colors.secondary }]}>
                    Fashion App
                </AppText>
                <AppText fontSize={24} style={[styles.text, { fontWeight: 'bold' }]}>
                    That
                </AppText>
                <AppText fontSize={25} style={[styles.text, { fontWeight: 'bold' }]}>
                    Makes You Look You Best
                </AppText>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: 20 }}>
                <AppText fontSize={14} style={[styles.text, { fontWeight: 'bold', textAlign: "center", lineHeight: 25 }]}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit utem quasi est minima dolores.
                </AppText>
            </View>

            <TouchableOpacity style={{ backgroundColor: colors.primary, height: 50, width: "100%", alignSelf: "center", borderRadius: 30, justifyContent: "center", alignItems: "center" }}>
                <AppText fontSize={14} style={{ color: colors.white, fontWeight: "bold" }}>
                    Let's Get Started
                </AppText>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: 20, }}>
                <AppText fontSize={14} style={[styles.text, { fontWeight: '500', textAlign: "center" }]}>
                    Already have an account?
                </AppText>
                <Link screen="SignInScreen" params={{}} style={{ textDecorationLine: "underline", fontWeight: "900", fontSize: 16, marginLeft: 4 }}>
                    Sign in
                </Link>
            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: width * 0.04
    },
    image: {
        height: height * 0.6,
        width: '100%',
        borderRadius: 10
    },
    bottomContainer: {
        flex: 1,
        justifyContent: "space-evenly"
    },
    text: {
        color: colors.primary
    }

})
export default WelcomeScreen;