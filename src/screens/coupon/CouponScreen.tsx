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
import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/common/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import {s, vs} from 'react-native-size-matters';
import {SCREENS} from '../../navigation/Screens';
import Feather from 'react-native-vector-icons/Feather';
import {RootStackParamList} from '../../navigation/MainNavigations';
import {StackScreenProps} from '@react-navigation/stack';

type CouponScreenProps = StackScreenProps<
  RootStackParamList,
  typeof SCREENS.COUPON_SCREEN
>;
const CouponScreen = ({navigation}: CouponScreenProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Coupon" />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Best offers for you</Text>
      </View>
    </SafeAreaView>
  );
};

export default CouponScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.whiteBackground,
  },
  sectionContainer: {
    paddingHorizontal: s(15),
  },
  sectionTitle: {
    fontSize: s(16),
    fontWeight: '500',
    marginVertical: vs(15),
  },
  addressContainer: {
    flexDirection: 'row',
    marginVertical: s(8),
    paddingBottom: s(22),
    alignItems: 'center',
  },
  addressDetails: {
    flex: 1,
    marginHorizontal: s(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addressTitle: {
    fontSize: s(16),
    fontWeight: '500',
    color: colors.grey,
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
    paddingVertical: vs(6),
  },
});
