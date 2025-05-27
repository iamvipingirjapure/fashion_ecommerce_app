import { SafeAreaView, View } from "react-native";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "../../config/colors";
import { TouchableOpacity } from "react-native";
import AppText from "./AppText";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../navigation/Screens";

const HomeHeader = () => {

    const navigation:any = useNavigation()
    return <SafeAreaView style={{ flexDirection: 'row', flex: 1, justifyContent: "space-between", height: 80, alignItems: "center" }}>
        <View style={{ flex: 1 }}>
            <AppText fontSize={14} style={{ color: 'black' }}>Location</AppText>
            <View style={{ flexDirection: "row", marginTop: 15, alignItems: 'center' }}>
                <FontAwesome6 name="location-dot" color={colors.darkText} size={20} />
                <AppText fontSize={16} style={{ marginHorizontal: 8, fontWeight: 600 }}>New York,USA</AppText>
                <FontAwesome6 name="angle-down" color={colors.darkText} size={20} />
            </View>
        </View>

        <TouchableOpacity style={
            {
                height: 45,
                width: 45,
                borderRadius: 50,
                backgroundColor: colors.lightGrey,
                justifyContent: "center",
                alignItems: "center",
                elevation: 2
            }
        }
        onPress={() => navigation.navigate(SCREENS.NOTIFICATIONS)}
        >
            <Ionicons name="notifications" color={colors.bottomMenuBarBg} size={25} />
        </TouchableOpacity>
    </SafeAreaView>
}

export default HomeHeader;