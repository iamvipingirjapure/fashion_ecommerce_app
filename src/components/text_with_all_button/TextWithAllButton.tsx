import { StyleSheet, TouchableOpacity, View } from "react-native"
import AppText from "../common/AppText";
import colors from "../../config/colors";

const TextWithAllButton = ({ text, buttonText, onButtonPress }: {text:string, buttonText:string, onButtonPress:any }) => {
    return <View style={styles.container}>
        <AppText fontSize={18} style={{color:colors.primary,fontWeight:"600"}}>{text}</AppText>
        <TouchableOpacity onPress={onButtonPress} style={{}}>
            <AppText fontSize={14} style={{color:colors.primary,fontWeight:"400"}}>{buttonText}</AppText>
        </TouchableOpacity>
    </View>
}



const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical:20,
        justifyContent:"space-between"
    }
})
export default TextWithAllButton;