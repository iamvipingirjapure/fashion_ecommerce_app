import { useEffect } from "react";
import { Text, View } from "react-native"

const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Tabs')
        }, 1000)
    }, [])
    return <View>
        <Text>SplashScreen</Text>
    </View>
}

export default SplashScreen;