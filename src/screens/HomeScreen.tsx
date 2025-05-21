import {TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/common/HomeHeader";
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import colors from "../config/colors";
import { TouchableOpacity } from "react-native";
import PromoSwiper from "../components/promo_swiper/PromoSwiper";

const HomeScreen = () => {
    return <SafeAreaView style={{ paddingHorizontal: 12 }}>
        <HomeHeader />
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: colors.disabled,
                borderWidth: 1,
                height: 55,
                borderRadius: 50,
                paddingHorizontal: 15,
                flex: 1,
            }}>
                <Feather name="search" size={30} color={colors.primary}style={{ marginRight: 10 }} />
                <TextInput placeholder="Search" placeholderTextColor={'grey'} inputMode="text" style={{ flex: 1, color: colors.darkText, borderRadius: 50 }} />
            </View>
            <TouchableOpacity style={{ height: 55, width: 55, borderRadius: 50, backgroundColor: colors.primary, justifyContent: "center", alignItems: "center", elevation: 2, marginLeft: 15 }}>
                <Ionicons name="filter" color={colors.white} size={30} />
            </TouchableOpacity>
        </View>
        <PromoSwiper/>
    </SafeAreaView>
}

export default HomeScreen;