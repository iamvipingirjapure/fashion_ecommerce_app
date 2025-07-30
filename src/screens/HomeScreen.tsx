import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../components/common/HomeHeader';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../config/colors';
import {TouchableOpacity} from 'react-native';
import PromoSwiper from '../components/promo_swiper/PromoSwiper';
import TextWithAllButton from '../components/text_with_all_button/TextWithAllButton';
import IconHorizontalList from '../components/icon_horizontal_list/IconHorizontalList';
import {useEffect, useState} from 'react';
import ItemCard from '../components/common/ItemCard';
import {useDispatch, useSelector} from 'react-redux';
import {GetHomeProducts} from '../redux/slices/HomeSlice';
import {AppDispatch} from '../redux/store';
import {poppins} from '../utils/fonts';

const categoryData = [
  {icon: '', label: 'T-Shirt'},
  {icon: '', label: 'Pant'},
  {icon: '', label: 'Dress'},
  {icon: '', label: 'Jacket'},
];
const ALL = 'All';
const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const dispatch: AppDispatch = useDispatch();
  const {homeItems, isLoading} = useSelector((state: any) => state.Home);

  const categories = [
    ALL,
    ...[
      ...new Set(homeItems?.map((item: {category: string}) => item.category)),
    ],
  ];
  useEffect(() => {
    dispatch(GetHomeProducts());
  }, []);

  const renderCategoryItem = (category: {item: string}) => {
    const isActive = selectedCategory === category.item;
    return (
      <TouchableOpacity
        style={[styles.categoryButton, isActive && styles.activeCategory]}
        onPress={() => setSelectedCategory(category.item)}>
        <Text
          style={[styles.categoryText, isActive && styles.activeCategoryText]}>
          {category.item?.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  };

  const filteredItems =
    selectedCategory === ALL
      ? homeItems
      : homeItems.filter(
          (item: {category: string}) => item.category === selectedCategory,
        );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{paddingHorizontal: 12}}>
          <HomeHeader />
          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: colors.disabled,
                borderWidth: 1,
                height: 45,
                borderRadius: 50,
                paddingHorizontal: 15,
                flex: 1,
              }}>
              <Feather
                name="search"
                size={25}
                color={colors.primary}
                style={{marginRight: 10}}
              />
              <TextInput
                placeholder="Search"
                placeholderTextColor={'grey'}
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
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 2,
                marginLeft: 15,
              }}>
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
            data={categories}
            keyExtractor={(category: any) => category}
            renderItem={category =>
              renderCategoryItem(category as {item: string})
            }
            horizontal
            contentContainerStyle={styles.categoryListContent}
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            data={filteredItems}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ItemCard item={item} />}
            numColumns={2}
            contentContainerStyle={styles.grid}
            centerContent
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{justifyContent: 'space-between'}}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categoryListContent: {
    marginVertical: 20,
  },
  categoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginRight: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.lightText,
    height: 40,
  },
  activeCategory: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryText: {
    fontSize: 16,
    color: colors.primary,
    fontFamily: poppins.bold,
    includeFontPadding: false,
  },
  activeCategoryText: {
    color: colors.white,
    fontWeight: '600',
  },
  grid: {
    paddingBottom: 60,
  },
});

export default HomeScreen;
