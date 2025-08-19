import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../components/common/HomeHeader';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../config/colors';
import PromoSwiper from '../components/promo_swiper/PromoSwiper';
import TextWithAllButton from '../components/text_with_all_button/TextWithAllButton';
import IconHorizontalList from '../components/icon_horizontal_list/IconHorizontalList';
import {useEffect, useState} from 'react';
import ItemCard from '../components/common/ItemCard';
import {useDispatch, useSelector} from 'react-redux';
import {GetHomeProducts} from '../redux/slices/HomeSlice';
import {AppDispatch} from '../redux/store';
import {poppins} from '../utils/fonts';
import {SCREENS} from '../navigation/Screens';
import {s} from 'react-native-size-matters';

const categoryData = [
  {icon: '', label: 'T-Shirt'},
  {icon: '', label: 'Pant'},
  {icon: '', label: 'Dress'},
  {icon: '', label: 'Jacket'},
];
const ALL = 'All';

const HomeScreen = ({navigation}: any) => {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const dispatch: AppDispatch = useDispatch();
  const {homeItems, isLoading} = useSelector((state: any) => state.Home);

  const categories: any = [
    ALL,
    ...[
      ...new Set(homeItems?.map((item: {category: string}) => item.category)),
    ],
  ];

  useEffect(() => {
    dispatch(GetHomeProducts());
  }, []);

  const renderCategoryItem = ({item}: {item: string}) => {
    const isActive = selectedCategory === item;
    return (
      <TouchableOpacity
        style={[styles.categoryButton, isActive && styles.activeCategory]}
        onPress={() => setSelectedCategory(item)}>
        <Text
          style={[styles.categoryText, isActive && styles.activeCategoryText]}>
          {item?.toUpperCase()}
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

  const handleProductPress = (ItemId: number) => {
    navigation.navigate(SCREENS.SINGLE_PRODUCT_DETAILS);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <FlatList
          data={filteredItems}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemCard
              item={item}
              handleProductPress={() => handleProductPress(item.id)}
            />
          )}
          numColumns={2}
          contentContainerStyle={styles.grid}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              <HomeHeader />
              <View style={styles.searchRow}>
                <View style={styles.searchBox}>
                  <Feather
                    name="search"
                    size={25}
                    color={colors.primary}
                    style={{marginRight: 10}}
                  />
                  <TextInput
                    placeholder="Search"
                    placeholderTextColor="grey"
                    style={styles.searchInput}
                  />
                </View>
                <TouchableOpacity
                  style={styles.filterButton}
                  onPress={() => navigation.navigate(SCREENS.FILTER_SCREEN)}>
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
                keyExtractor={item => item}
                renderItem={renderCategoryItem}
                horizontal
                contentContainerStyle={styles.categoryListContent}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                  <ActivityIndicator size={22} color={colors.primary} />
                }
              />
            </View>
          }
          ListEmptyComponent={
            isLoading ? (
              <ActivityIndicator
                size="large"
                style={{marginTop: 20}}
                color={colors.primary}
              />
            ) : (
              <Text style={{textAlign: 'center', marginTop: 20}}>
                No items found.
              </Text>
            )
          }
        />
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
    marginHorizontal: s(10),
  },
  searchRow: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.disabled,
    borderWidth: 1,
    height: 45,
    borderRadius: 50,
    paddingHorizontal: 15,
    flex: 1,
  },
  searchInput: {
    flex: 1,
    color: colors.darkText,
  },
  filterButton: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    marginLeft: 15,
  },
});

export default HomeScreen;
