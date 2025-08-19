import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/common/Header';
import {categories, wishlistItems} from './data';
import colors from '../../config/colors';
import ItemCard from '../../components/common/ItemCard';
import {s, vs} from 'react-native-size-matters';

const ALL = 'All';
const MyWishlistScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(ALL);

  const filteredItems =
    selectedCategory === ALL
      ? wishlistItems
      : wishlistItems.filter(
          (item: any) => item?.category === selectedCategory,
        );
  const renderCategoryItem = (category: any) => {
    const isActive = selectedCategory === category.item;
    return (
      <TouchableOpacity
        style={[styles.categoryButton, isActive && styles.activeCategory]}
        onPress={() => setSelectedCategory(category.item)}>
        <Text
          style={[styles.categoryText, isActive && styles.activeCategoryText]}>
          {category.item}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="My Wishlist" showNotification paddingHorizontal={0}/>
      <FlatList
        data={categories}
        keyExtractor={category => category}
        renderItem={category => renderCategoryItem(category)}
        horizontal
        contentContainerStyle={styles.categoryContainer}
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        data={filteredItems}
        keyExtractor={(item: {id: string}) => item.id}
        renderItem={({item}) => <ItemCard item={item} />}
        numColumns={2}
        columnWrapperStyle={
          filteredItems.length === 1 ? null : {justifyContent: 'space-between'}
        }
        contentContainerStyle={styles.grid}
        centerContent
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="rocket-outline" size={40} color={colors.disabled} />
            <Text style={styles.emptyText}>No Items Found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: s(16),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    gap: s(1),
    height: vs(30),
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
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vs(50),
    flex:1
  },
  emptyText: {
    marginTop: 10,
    fontSize: 18,
    color: colors.disabled,
    fontWeight: '500',
  },
});

export default MyWishlistScreen;
