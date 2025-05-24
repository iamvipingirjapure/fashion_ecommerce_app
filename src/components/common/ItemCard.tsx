import { Image, View,Dimensions ,StyleSheet, Text, TouchableOpacity} from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from "../../config/colors";
const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;
const ItemCard  = (props:any) => {
    const {item} = props
       return <View style={styles.card}>
            <Image source={item.image ?? require('../../../assets/images/SpalshScreenBg.jpg')} style={styles.image} resizeMode="stretch" />
            <TouchableOpacity style={styles.heartIcon}>
                <Ionicons name="heart" size={20} color={colors.primary} />
            </TouchableOpacity>
            <View style={styles.itemNameAndRating}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <View style={styles.row}>
                    <FontAwesome name="star" color={colors.secondary} size={14} />
                    <Text style={styles.rating}>{item.rating}</Text>
                </View>
            </View>
            <Text style={styles.price}>{item.price}</Text>
        </View>
}


const styles = StyleSheet.create({
    card: {
        width: cardWidth,
        marginBottom: 20,
        paddingBottom: 8,
        borderRadius: 12,
        backgroundColor: colors.white,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: cardWidth + 20,
        borderRadius: 12,
    },
    heartIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: colors.white,
        padding: 6,
        borderRadius: 999,
        elevation: 2,
    },
    itemTitle: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 8,
    },
    itemNameAndRating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 4
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        paddingHorizontal: 4
    },
    rating: {
        fontSize: 12,
        marginLeft: 4,
    },
    price: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 6,
        paddingHorizontal: 4
    },
})


export default ItemCard;