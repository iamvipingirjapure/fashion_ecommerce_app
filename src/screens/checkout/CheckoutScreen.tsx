import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/common/Header';
import Octicons from 'react-native-vector-icons/Octicons';
import colors from '../../config/colors';
import {s, vs} from 'react-native-size-matters';
import {Swipeable} from 'react-native-gesture-handler';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const CheckoutScreen = () => {
  const renderRightActions = () => (
    <TouchableOpacity style={styles.deleteBox} onPress={() => {}}>
      <Octicons name="trash" size={24} color={colors.white} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Checkout" />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Shopping Address</Text>
        <View style={styles.addressContainer}>
          <SimpleLineIcons name="location-pin" size={s(20)} />
          <View style={styles.addressDetails}>
            <Text style={styles.addressTitle}>Home</Text>
            <View style={styles.addressRow}>
              <Text style={styles.addressText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                dignissimos mollitia? Corporis.
              </Text>
              <TouchableOpacity style={styles.changeBtn}>
                <Text style={styles.changeBtnText}>Change</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Choose Shipping Type</Text>
        <View style={styles.shippingContainer}>
          <SimpleLineIcons name="location-pin" size={s(20)} />
          <View style={styles.addressDetails}>
            <Text style={styles.addressTitle}>Economy</Text>
            <View style={styles.addressRow}>
              <Text style={styles.addressText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                dignissimos mollitia? Corporis.
              </Text>
              <TouchableOpacity style={styles.changeBtn}>
                <Text style={styles.changeBtnText}>Change</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Order History</Text>
      </View>

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
                  </View>
                </View>
              </View>
            </Swipeable>
          );
        }}
        style={styles.flatList}
      />

      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Continue to Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.whiteBackground,
  },
  sectionContainer: {
    padding: s(15),
  },
  sectionTitle: {
    fontSize: s(16),
    fontWeight: '500',
  },
  addressContainer: {
    flexDirection: 'row',
    marginVertical: s(12),
    borderBottomWidth: 1,
    borderColor: colors.ligtShadow,
    paddingBottom: s(22),
  },
  addressDetails: {
    flex: 1,
    marginHorizontal: s(4),
  },
  addressTitle: {
    fontSize: s(14),
    fontWeight: '500',
    color: colors.primary,
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
  changeBtn: {
    borderWidth: 1,
    borderColor: colors.ligtShadow,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  changeBtnText: {
    textTransform: 'uppercase',
    color: colors.primary,
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
    fontSize: 16,
    marginVertical: 8,
  },
  priceQtyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
  },
  itemPrice: {
    color: colors.primary,
    fontSize: s(14),
    fontWeight: '700',
    width: s(120),
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
  flatList: {
    borderWidth: 0,
  },
  footerContainer: {
    paddingHorizontal: s(12),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    borderWidth: 0.4,
    backgroundColor: colors.white,
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
    paddingVertical: vs(10),
  },
});
