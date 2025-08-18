import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/common/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import colors from '../../config/colors';
import {s, vs} from 'react-native-size-matters';
import {Swipeable} from 'react-native-gesture-handler';
import {SCREENS} from '../../navigation/Screens';

const CartScreen = ({navigation}: {navigation: {navigate: any}}) => {
  const renderRightActions = () => (
    <TouchableOpacity style={styles.deleteBox} onPress={() => {}}>
      <Octicons name="trash" size={24} color={colors.white} />
    </TouchableOpacity>
  );
  const screenHeight = Dimensions.get('window').height;

  const translateY = useRef(new Animated.Value(screenHeight)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 900,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="My Cart" />

      <FlatList
        data={new Array(10)}
        renderItem={() => {
          return (
            <Swipeable renderRightActions={renderRightActions}>
              <View style={styles.cartItemContainer}>
                <Image
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/3.jpg',
                  }}
                  style={styles.image}
                />
                <View style={styles.cartDetails}>
                  <Text style={styles.itemTitle}>Brown Jacket</Text>
                  <Text style={styles.itemSize}>Size : {'XL'}</Text>
                  <View style={styles.priceQtyRow}>
                    <Text style={styles.itemPrice}>${'85.00'}</Text>
                    <View style={styles.qtyContainer}>
                      <TouchableOpacity style={styles.qtyMinusBtn}>
                        <Entypo name="minus" size={20} color={colors.primary} />
                      </TouchableOpacity>
                      <Text style={styles.qtyText}>1</Text>
                      <TouchableOpacity style={styles.qtyPlusBtn}>
                        <Entypo name="plus" size={20} color={colors.white} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Swipeable>
          );
        }}
        style={{borderWidth: 0}}
        ListFooterComponent={
          <Animated.View
            style={[styles.summaryContainer, {transform: [{translateY}]}]}>
            <ScrollView>
              <View style={styles.promoContainer}>
                <TextInput
                  style={styles.promoInput}
                  placeholder="Promo Code"
                  placeholderTextColor={colors.lightText}
                />
                <TouchableOpacity style={styles.promoButton}>
                  <Text style={styles.promoButtonText}>Apply</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.summaryContent}>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Sub-Total</Text>
                  <Text style={styles.summaryValue}>${'85.00'}</Text>
                </View>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Delivery Fee</Text>
                  <Text style={styles.summaryValue}>${'85.00'}</Text>
                </View>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Discount</Text>
                  <Text style={styles.summaryValue}>${'85.00'}</Text>
                </View>
                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Total Cost</Text>
                  <Text style={styles.summaryValue}>${'85.00'}</Text>
                </View>

                <TouchableOpacity
                  style={styles.checkoutButton}
                  onPress={() => navigation.navigate(SCREENS.CHECKOUT_SCREEN)}>
                  <Text style={styles.checkoutButtonText}>
                    Procced To Checkout
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Animated.View>
        }
      />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.whiteBackground,
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
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginRight: 30,
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
    fontSize: s(14),
    marginVertical: 8,
  },
  priceQtyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: s(1),
  },
  itemPrice: {
    color: colors.primary,
    fontSize: s(14),
    fontWeight: '700',
    width: s(120),
  },
  qtyContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  qtyMinusBtn: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: colors.shadow,
    marginHorizontal: 10,
  },
  qtyPlusBtn: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: colors.primary,
    marginHorizontal: 10,
  },
  qtyText: {
    color: colors.primary,
    fontSize: 20,
  },
  deleteBox: {
    backgroundColor: colors.error,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  summaryContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: vs(320),
    paddingHorizontal: s(16),
    paddingVertical: vs(18),
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: -3},
    shadowRadius: 6,
    elevation: 5,
  },
  promoContainer: {
    borderWidth: 0.5,
    borderColor: colors.lightText,
    borderRadius: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    flex: 1,
    width: '95%',
    alignSelf: 'center',
  },
  promoInput: {
    minHeight: vs(40),
    width: '60%',
    color: colors.primary,
    fontSize: s(16),
    paddingLeft: 16,
  },
  promoButton: {
    backgroundColor: colors.primary,
    borderRadius: 55,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  promoButtonText: {
    color: colors.white,
    fontSize: s(16),
    textAlign: 'center',
    fontWeight: '400',
  },
  summaryContent: {
    flex: 1,
    paddingVertical: vs(15),
    paddingHorizontal: s(10),
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 3,
    borderColor: colors.lightText,
    borderStyle: 'dashed',
  },
  summaryLabel: {
    color: colors.lightText,
    fontSize: s(18),
    fontWeight: '400',
  },
  totalLabel: {
    color: colors.lightText,
    fontSize: s(20),
    fontWeight: '400',
  },
  summaryValue: {
    color: colors.primary,
    fontSize: s(18),
    fontWeight: '700',
    width: s(120),
    textAlign: 'right',
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
    fontSize: s(18),
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: vs(6),
  },
});
