import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/common/Header';
import { categories, wishlistItems } from './data';
import colors from '../../config/colors';

const ALL = 'All'
const MyWishlistScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState(ALL)

    const filteredItems = selectedCategory === ALL ? wishlistItems :
        wishlistItems.filter((item) => item.category === selectedCategory)
    const renderCategoryItem = (category: any) => {
        const isActive = selectedCategory === category.item;
        return <TouchableOpacity
            style={[styles.categoryButton, isActive && styles.activeCategory]}
            onPress={() => setSelectedCategory(category.item)}
        >
            <Text style={[styles.categoryText, isActive && styles.activeCategoryText]}>{category.item}</Text>
        </TouchableOpacity>
    }

    const renderItem = ({ item }: { item: typeof wishlistItems[0] }) => (
        <View style={styles.card}>
            <Image source={item.image} style={styles.image} resizeMode="stretch" />
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
    );
    return <SafeAreaView style={styles.mainContainer}>
        <Header title="My Wishlist" showNotification/>
        <FlatList data={categories}
            keyExtractor={(category) => category}
            renderItem={(category) => renderCategoryItem(category)}
            horizontal
            style={styles.categoryContainer}
            showsHorizontalScrollIndicator={false}
        />

        <FlatList
            data={filteredItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            numColumns={2}
            columnWrapperStyle={
                filteredItems.length === 1
                  ? null
                  : { justifyContent: 'space-between' }
              }
            contentContainerStyle={styles.grid}
            centerContent
            showsVerticalScrollIndicator={false}
        />
    </SafeAreaView>
}

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    categoryContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginVertical: 10,
        gap: 8,
        flexWrap: 'wrap',
    },
    categoryButton: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        marginRight: 12,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.lightText,
    },
    activeCategory: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    categoryText: {
        fontSize: 16,
        color: colors.primary,
        fontWeight: 800,
    },
    activeCategoryText: {
        color: colors.white,
        fontWeight: 600,
    },
    grid: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
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
        fontSize: 16,
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
});

export default MyWishlistScreen;