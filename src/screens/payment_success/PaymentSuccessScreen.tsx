import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/common/Header';
import colors from '../../config/colors';
import {s, vs} from 'react-native-size-matters';
import {SCREENS} from '../../navigation/Screens';
import {RootStackParamList} from '../../navigation/MainNavigations';
import {StackScreenProps} from '@react-navigation/stack';
import LottieView from 'lottie-react-native';

type PaymentSuccessScreenProps = StackScreenProps<
  RootStackParamList,
  typeof SCREENS.PAYMENT_SUCCESS_SCREEN
>;
const PaymentSuccessScreen = ({navigation}: PaymentSuccessScreenProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Payment" isGoBack={false}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LottieView
          source={require('../../../assets/images/payment_success.json')}
          autoPlay
          loop={false}
          style={styles.image}
        />
        <Text
          style={{
            fontSize: s(22),
            fontWeight: '600',
            textAlign: 'center',
            color: colors.primary,
          }}>
          Payement Successful!
        </Text>
        <Text
          style={{
            fontSize: s(15),
            fontWeight: '400',
            textAlign: 'center',
            color: colors.grey,
            marginTop: vs(15),
          }}>
          Thank you for your purchase.
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.ViewOrderBtn}
          // onPress={() => navigation.navigate(SCREENS.SHIPPING_ADDRESS)}
        >
          <Text style={styles.checkoutButtonText}>View Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transparentBtn}
          // onPress={() => navigation.navigate(SCREENS.SHIPPING_ADDRESS)}
        >
          <Text style={{...styles.checkoutButtonText, color: colors.primary}}>
            View E-Receipt
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentSuccessScreen;

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
    height: vs(140),
    width: '100%',
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
  ViewOrderBtn: {
    backgroundColor: colors.primary,
    borderRadius: 55,
    paddingVertical: vs(5),
    paddingHorizontal: 20,
    marginVertical: vs(10),
  },
  transparentBtn: {
    marginVertical: vs(8),
  },
  checkoutButtonText: {
    color: colors.white,
    fontSize: s(18),
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: vs(6),
  },
});
