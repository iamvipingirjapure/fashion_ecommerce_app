import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/common/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import {s, vs} from 'react-native-size-matters';
import {SCREENS} from '../../navigation/Screens';
import {RootStackParamList} from '../../navigation/MainNavigations';
import {StackScreenProps} from '@react-navigation/stack';

type PaymentMethodsScreenProps = StackScreenProps<
  RootStackParamList,
  typeof SCREENS.PAYMENT_METHODS_SCREEN
>;
const PaymentMethodsScreen = ({
  navigation,
  route,
}: PaymentMethodsScreenProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Payment Methods" />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Credit and Debit Card</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREENS.ADD_CARD)}
          style={{
            borderWidth: 1,
            borderColor: colors.ligtShadow,
            height: 50,
            marginVertical: vs(10),
            borderRadius: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: s(10),
            marginTop: vs(10),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="card" size={s(25)} color={colors.primary} />
            <Text
              style={{
                fontSize: s(16),
                fontWeight: '500',
                color: colors.grey,
                marginLeft: s(12),
              }}>
              Add Card
            </Text>
          </View>
          <Entypo
            name="chevron-thin-right"
            size={s(20)}
            color={colors.primary}
          />
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>More Payment Options</Text>
      </View>
      <FlatList
        data={new Array(3)}
        ItemSeparatorComponent={() => (
          <View
            style={{borderBottomWidth: 1, borderColor: colors.ligtShadow}}
          />
        )}
        renderItem={() => {
          return (
            <View style={styles.addressContainer}>
              <Ionicons name="logo-apple" size={s(25)} />
              <View style={styles.addressDetails}>
                <Text style={styles.addressTitle}>PayPal</Text>
                <TouchableOpacity
                  style={{
                    height: 28,
                    width: 28,
                    borderWidth: 1,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: s(12),
                  }}>
                  <View
                    style={{
                      height: 14,
                      width: 14,
                      borderRadius: 50,
                      backgroundColor: true ? colors.primary : 'transparent',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        contentContainerStyle={{
          marginHorizontal: s(18),
          borderWidth: 1,
          borderColor: colors.ligtShadow,
          borderRadius: 12,
          padding: s(10),
          flexGrow: 0,
        }}
      />
      {route.params?.from && (
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() =>
              navigation.reset({
                index: 1,
                routes: [
                  {name: 'TabNavigator'},
                  {name: SCREENS.PAYMENT_SUCCESS_SCREEN},
                ],
              })
            }>
            <Text style={styles.checkoutButtonText}>Confirm Payment</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default PaymentMethodsScreen;

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
