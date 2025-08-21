import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/common/Header';
import colors from '../../config/colors';
import {s, vs} from 'react-native-size-matters';
import {SCREENS} from '../../navigation/Screens';
import {RootStackParamList} from '../../navigation/MainNavigations';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {StackScreenProps} from '@react-navigation/stack';

type ReviewScreenProps = StackScreenProps<
  RootStackParamList,
  typeof SCREENS.LEAVE_REVIEW
>;
const ReviewScreen = ({navigation}: ReviewScreenProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={[{flexGrow: 1}]}>
          <Header title="Leave Review" />
          <View style={{flex: 1, paddingHorizontal: s(12)}}>
            <View style={styles.cartItemContainer}>
              <Image
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/3.jpg',
                }}
                style={styles.image}
              />
              <View style={styles.cartDetails}>
                <Text style={styles.itemTitle}>Brown Jacket</Text>
                <Text style={styles.itemSize}>
                  Size: {'XL'} | Qty : {'10'}pcs
                </Text>
                <View style={styles.priceQtyRow}>
                  <Text style={styles.itemPrice}>${'85.00'}</Text>
                  <TouchableOpacity
                    style={styles.trackBtn}
                    onPress={() => navigation.navigate(SCREENS.LEAVE_REVIEW)}>
                    <Text style={styles.trackText}>Re-Order</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Text
              style={{
                fontSize: s(25),
                fontWeight: '500',
                textAlign: 'center',
                color: colors.primary,
                paddingVertical: vs(30),
                borderBottomWidth: 1,
                borderColor: colors.ligtShadow,
              }}>
              How is your order?
            </Text>

            <View
              style={{
                paddingVertical: vs(30),
                borderBottomWidth: 1,
                borderColor: colors.ligtShadow,
                gap: vs(20),
              }}>
              <Text
                style={{
                  fontSize: s(16),
                  fontWeight: '400',
                  textAlign: 'center',
                  color: colors.grey,
                }}>
                Your overall rating
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginHorizontal: s(10),
                }}>
                {new Array(5).fill(null).map((_, i) => (
                  <TouchableOpacity key={i}>
                    <FontAwesome
                      key={i}
                      name="star"
                      color={colors.secondary}
                      size={s(36)}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <Text
              style={{
                fontSize: s(16),
                fontWeight: '500',
                color: colors.darkText,
                marginTop: vs(20),
                marginBottom: vs(10),
              }}>
              Add detailed review
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                height: vs(150),
                borderColor: colors.lightText,
                borderRadius: 12,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontSize: s(14),
                padding: s(10),
              }}
              textAlignVertical="top"
              multiline
              placeholder="Enter here"
              placeholderTextColor={colors.lightText}
            />
            <TouchableOpacity
              style={{
                marginTop: vs(30),
                marginBottom: vs(30),
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Feather name="camera" size={s(18)} color={colors.primary} />
              <Text
                style={{
                  fontSize: s(14),
                  fontWeight: '600',
                  color: colors.primary,
                  marginLeft: vs(5),
                }}>
                Add photo
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.transparentBtn}
              // onPress={() => navigation.navigate(SCREENS.SHIPPING_ADDRESS)}
            >
              <Text
                style={{...styles.checkoutButtonText, color: colors.primary}}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ViewOrderBtn}
              // onPress={() => navigation.navigate(SCREENS.SHIPPING_ADDRESS)}
            >
              <Text style={styles.checkoutButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.whiteBackground,
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
    width: s(80),
    height: vs(80),
    borderRadius: 8,
    marginRight: s(12),
  },
  cartDetails: {
    flex: 1,
  },
  itemTitle: {
    color: colors.primary,
    fontSize: s(16),
    fontWeight: '600',
  },
  itemSize: {
    color: colors.lightText,
    fontSize: 16,
    marginVertical: 8,
  },
  footerContainer: {
    paddingHorizontal: s(12),
    paddingVertical: s(6),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    backgroundColor: colors.white,
    flexDirection: 'row',
    gap: s(10),
    elevation: 10,
  },
  ViewOrderBtn: {
    backgroundColor: colors.primary,
    borderRadius: 55,
    paddingVertical: vs(5),
    marginVertical: vs(10),
    flex: 1,
  },
  transparentBtn: {
    marginVertical: vs(8),
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.ligtShadow,
    borderRadius: 55,
  },
  checkoutButtonText: {
    color: colors.white,
    fontSize: s(18),
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: vs(6),
  },
  priceQtyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: s(1),
  },
  itemPrice: {
    color: colors.primary,
    fontSize: s(16),
    fontWeight: '700',
    width: s(120),
  },
  trackBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  trackText: {
    color: colors.white,
    fontSize: s(12),
  },
});
