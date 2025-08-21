import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Header from '../../components/common/Header';
import colors from '../../config/colors';
import {s, vs} from 'react-native-size-matters';
import {SCREENS} from '../../navigation/Screens';
import {RootStackParamList} from '../../navigation/MainNavigations';
import {StackScreenProps} from '@react-navigation/stack';
import {categories} from '../wishlist/data';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RnRangeSlider from 'rn-range-slider';

type FilterScreenProps = StackScreenProps<
  RootStackParamList,
  typeof SCREENS.FILTER_SCREEN
>;
const FilterScreen = ({navigation}: FilterScreenProps) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [low, setLow] = useState(7);
  const [high, setHigh] = useState(100);

  const renderThumb = useCallback(() => <View style={styles.thumb} />, []);
  const renderRail = useCallback(() => <View style={styles.rail} />, []);
  const renderRailSelected = useCallback(
    () => <View style={styles.railSelected} />,
    [],
  );
  const renderLabel = useCallback(
    (value: number) => (
      <View style={styles.label}>
        <Text style={styles.labelText}>{value}</Text>
      </View>
    ),
    [],
  );
  const renderNotch = useCallback(() => <View style={styles.notch} />, []);

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
    <SafeAreaView style={styles.safeArea}>
      <Header title="Filter" />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Brands</Text>
        <FlatList
          data={categories}
          keyExtractor={category => category}
          renderItem={category => renderCategoryItem(category)}
          horizontal
          contentContainerStyle={styles.categoryContainer}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.sectionTitle}>Gender</Text>
        <FlatList
          data={['Men', 'Women', 'Other']}
          keyExtractor={category => category}
          renderItem={category => renderCategoryItem(category)}
          horizontal
          contentContainerStyle={styles.categoryContainer}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.sectionTitle}>Sort by</Text>
        <FlatList
          data={categories}
          keyExtractor={category => category}
          renderItem={category => renderCategoryItem(category)}
          horizontal
          contentContainerStyle={styles.categoryContainer}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.sectionTitle}>Price Range</Text>
        <RnRangeSlider
          style={{width: '100%', height: vs(20) }}
          min={0}
          max={500}
          step={1}
          floatingLabel
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={(low, high) => {
            setLow(low);
            setHigh(high);
          }}
        />
        <View style={styles.labelRow}>
          {['2k', '7k', '22k', '50k', '100k', '150k+'].map((label, idx) => (
            <Text key={idx} style={styles.labelText}>
              {label}
            </Text>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Reviews</Text>
        <FlatList
          data={[
            {
              id: 1,
              ratingsNumber: 5,
              text: '4.5 and above',
            },
            {
              id: 2,
              ratingsNumber: 4,
              text: '4.0 - 4.5',
            },
            {
              id: 3,
              ratingsNumber: 3,
              text: '3.5 - 4.0',
            },
            {
              id: 4,
              ratingsNumber: 2,
              text: '2.0 - 2.5',
            },
            {
              id: 5,
              ratingsNumber: 1,
              text: '1 - 1.5',
            },
          ]}
          keyExtractor={item => item.id.toString()}
          renderItem={item => {
            return (
              <View style={styles.addressContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: s(4),
                  }}>
                  {new Array(item.item.ratingsNumber).fill(null).map((_, i) => (
                    <FontAwesome
                      key={i}
                      name="star"
                      color={colors.secondary}
                      size={s(16)}
                    />
                  ))}
                </View>
                <View style={styles.addressDetails}>
                  <Text style={styles.addressTitle}>{item.item.text}</Text>
                  <TouchableOpacity
                    style={{
                      height: vs(20),
                      width: s(20),
                      borderWidth: 1,
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: s(12),
                    }}>
                    <View
                      style={{
                        height: 12,
                        width: 12,
                        borderRadius: 50,
                        backgroundColor: true ? colors.primary : 'transparent',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.resetFilterBtn}
          // onPress={() => navigation.navigate(SCREENS.SHIPPING_ADDRESS)}
        >
          <Text style={styles.transparentButtonText}>Reset Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ViewOrderBtn}
          // onPress={() => navigation.navigate(SCREENS.SHIPPING_ADDRESS)}
        >
          <Text style={styles.checkoutButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.whiteBackground,
  },
  sectionContainer: {
    paddingHorizontal: s(15),
    flex: 1,
  },
  sectionTitle: {
    fontSize: s(16),
    fontWeight: '500',
    marginTop: vs(20),
    marginBottom: vs(10),
  },
  addressContainer: {
    flexDirection: 'row',
    marginVertical: s(8),
    alignItems: 'center',
  },
  addressDetails: {
    flex: 1,
    marginHorizontal: s(0),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addressTitle: {
    fontSize: s(14),
    fontWeight: '500',
    color: colors.lightBlack,
    marginLeft: s(10),
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    justifyContent: 'space-between',
    flex: 1,
  },
  addressText: {
    fontSize: s(14),
    fontWeight: '500',
    color: colors.lightText,
    width: '70%',
  },
  shippingContainer: {
    flexDirection: 'row',
    marginVertical: s(12),
    marginHorizontal: s(4),
    borderBottomWidth: 1,
    borderColor: colors.ligtShadow,
    paddingBottom: s(22),
    alignItems: 'flex-start',
  },
  cartItemContainer: {
    borderBottomWidth: 1,
    borderColor: colors.ligtShadow,
    padding: s(16),
    paddingBottom: 25,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: colors.whiteBackground,
  },
  cartDetails: {
    flex: 1,
  },
  itemTitle: {
    color: colors.primary,
    fontSize: s(14),
    fontWeight: '600',
  },
  itemSize: {
    color: colors.lightText,
    fontSize: 16,
    marginVertical: 8,
  },
  footerContainer: {
    paddingHorizontal: s(12),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    borderWidth: 1,
    borderColor: colors.ligtShadow,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkoutButton: {
    backgroundColor: colors.primary,
    borderRadius: 55,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  checkoutButtonText: {
    color: colors.white,
    fontSize: s(16),
    fontWeight: 400,
    textAlign: 'center',
    paddingVertical: vs(6),
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
    fontWeight: 500,
  },
  activeCategoryText: {
    color: colors.white,
    fontWeight: 500,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginVertical: vs(1),
    gap: s(1),
    minHeight: vs(30),
  },
  ViewOrderBtn: {
    backgroundColor: colors.primary,
    borderRadius: 55,
    paddingVertical: vs(5),
    flex: 1,
    marginVertical: vs(10),
    alignItems: 'center',
  },
  resetFilterBtn: {
    backgroundColor: colors.ligtShadow,
    borderRadius: 55,
    paddingVertical: vs(5),
    flex: 1,
    marginVertical: vs(10),
    alignItems: 'center',
  },
  transparentButtonText: {
    color: colors.primary,
    fontSize: s(16),
    fontWeight: 400,
    textAlign: 'center',
    paddingVertical: vs(6),
  },
  thumb: {
    width: s(18),
    height: s(18),
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  rail: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
  railSelected: {
    height: 4,
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  label: {
    alignItems: 'center',
    padding: 5,
    backgroundColor: colors.white,
    borderRadius: 4,
  },
  labelText: {
    color: colors.primary,
    fontSize: s(12),
    fontWeight:'600'
  },
  notch: {
    width: 8,
    height: 8,
    backgroundColor: colors.primary,
    transform: [{rotate: '45deg'}],
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vs(5),
    marginHorizontal:s(5)
  },
  valueText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '500',
  },
});
