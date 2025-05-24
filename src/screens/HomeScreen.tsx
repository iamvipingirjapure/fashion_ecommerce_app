import {FlatList, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/common/HomeHeader";
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import colors from "../config/colors";
import { TouchableOpacity } from "react-native";
import PromoSwiper from "../components/promo_swiper/PromoSwiper";
import TextWithAllButton from "../components/text_with_all_button/TextWithAllButton";
import IconHorizontalList from "../components/icon_horizontal_list/IconHorizontalList";
import { homeCategories, wishlistItems } from "./wishlist/data";
import { useState } from "react";
import ItemCard from "../components/common/ItemCard";

const categoryData = [
    { icon: '', label: 'T-Shirt' },
    { icon: '', label: 'Pant' },
    { icon: '', label: 'Dress' },
    { icon: '', label: 'Jacket' },
  ];
const ALL = 'All'
const HomeScreen = () => {
        const [selectedCategory, setSelectedCategory] = useState(ALL)
    const renderCategoryItem = (category: any) => {
        const isActive = selectedCategory === category.item;
        return <TouchableOpacity
            style={[styles.categoryButton, isActive && styles.activeCategory]}
            onPress={() => setSelectedCategory(category.item)}
        >
            <Text style={[styles.categoryText, isActive && styles.activeCategoryText]}>{category.item}</Text>
        </TouchableOpacity>
    }
    return <SafeAreaView style={{ flex: 1,backgroundColor:colors.white }}>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        <HomeHeader />
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderColor: colors.disabled,
              borderWidth: 1,
              height: 45,
              borderRadius: 50,
              paddingHorizontal: 15,
              flex: 1,
            }}
          >
            <Feather
              name="search"
              size={25}
              color={colors.primary}
              style={{ marginRight: 10 }}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor={"grey"}
              inputMode="text"
              style={{
                flex: 1,
                color: colors.darkText,
                borderRadius: 50,
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              height: 45,
              width: 45,
              borderRadius: 50,
              backgroundColor: colors.primary,
              justifyContent: "center",
              alignItems: "center",
              elevation: 2,
              marginLeft: 15,
            }}
          >
            <Ionicons name="filter" color={colors.white} size={25} />
          </TouchableOpacity>
        </View>
        <PromoSwiper />
        <TextWithAllButton
          text="Category"
          buttonText="See All"
          onButtonPress={() => {}}
        />
        <IconHorizontalList data={categoryData} />
        <FlatList
          data={homeCategories}
          keyExtractor={(category) => category}
          renderItem={(category) => renderCategoryItem(category)}
          horizontal
          contentContainerStyle={styles.categoryListContent}
          showsHorizontalScrollIndicator={false}
        />
         <FlatList
            data={wishlistItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ItemCard item={item} />}
            numColumns={2}
            contentContainerStyle={styles.grid}
            centerContent
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{justifyContent:'space-between'}}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
}

const styles = StyleSheet.create({
    categoryListContent: {
      marginVertical: 20,
    },
    categoryButton: {
      paddingVertical: 6,
      paddingHorizontal: 16,
      marginRight: 12,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.lightText,
      height:40
    },
    activeCategory: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    categoryText: {
      fontSize: 16,
      color: colors.primary,
      fontWeight: '800',
    },
    activeCategoryText: {
      color: colors.white,
      fontWeight: '600',
    },
    grid: {
        paddingBottom: 20,
    },
  });
  
export default HomeScreen;