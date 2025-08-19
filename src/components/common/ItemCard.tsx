import { Image, View, Dimensions, StyleSheet, Text, TouchableOpacity, Pressable } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from "../../config/colors";
const { width } = Dimensions.get('window');
const cardWidth = (width - 50) / 2;
const ItemCard = (props: any) => {
    const { item,handleProductPress } = props
    return <Pressable style={styles.card} onPress={handleProductPress}>
        {/* <Image source={item.images[0] ?? require('../../../assets/images/SpalshScreenBg.jpg')} style={styles.image} resizeMode="stretch" /> */}
        <Image source={{
            uri: item?.image
        }} style={styles.image} resizeMode="center" />
        <TouchableOpacity style={styles.heartIcon}>
            <Ionicons name={true ? "heart" : "heart-outline"} size={24} color={colors.primary} />
        </TouchableOpacity>
        <View style={styles.itemNameAndRating}>
            <View style={styles.row}>
                <FontAwesome name="star" color={colors.secondary} size={14} />
                <Text style={styles.rating}>{item?.rating?.rate} {`(${item?.rating?.count})`}</Text>
            </View>
            <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
        <Text style={styles.price}>₹ {item.price}</Text>
    </Pressable>
}


const styles = StyleSheet.create({
    card: {
        width: cardWidth,
        marginBottom: 20,
        paddingBottom: 8,
        paddingHorizontal: 5,
        borderRadius: 12,
        backgroundColor: colors.white,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.disabled
    },
    image: {
        height: cardWidth,
        borderRadius: 12,
        margin: 10,
    },
    heartIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        padding: 8,
        borderRadius: 999,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemTitle: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 8,
    },
    itemNameAndRating: {
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 4,
        alignSelf: 'flex-end'
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