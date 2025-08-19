import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/common/Header';
import colors from '../../config/colors';
import {s, vs} from 'react-native-size-matters';
import {SCREENS} from '../../navigation/Screens';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/MainNavigations';

type PaymentMethodsScreenProps = StackScreenProps<
  RootStackParamList,
  typeof SCREENS.ADD_CARD
>;

const AddCardScreen = ({navigation}: PaymentMethodsScreenProps) => {
  const [expiry, setExpiry] = React.useState("");

 const handleExpiryChange = (text: string) => {
  let cleaned = text.replace(/\D/g, "");
  if (cleaned.length >= 3) {
    cleaned = cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
  }

  setExpiry(cleaned);
};

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Add Card" />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{margin: s(16)}}>
            <Image
              resizeMode="contain"
              source={{
                uri: 'https://as2.ftcdn.net/v2/jpg/04/27/87/51/1000_F_427875144_e2vX4Qsyi9ilJeX5X6IDOrFI1is9TuBy.jpg',
              }}
              style={styles.image}
            />

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Card Holder Name</Text>
              <TextInput inputMode="text" style={styles.textInput} />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Card Number</Text>
              <TextInput
                inputMode="numeric"
                style={styles.textInput}
                placeholder="1234 5678 9012 3456"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: s(25),
              }}>
              <View style={[styles.inputGroup, {flex: 1}]}>
                <Text style={styles.inputLabel}>Expiry Date</Text>
                <TextInput
                  inputMode="numeric"
                  style={styles.textInput}
                  placeholder="MM/YY"
                  keyboardType="numbers-and-punctuation"
                  maxLength={5}
                  value={expiry}
                  onChangeText={handleExpiryChange}
                />
              </View>

              <View style={[styles.inputGroup, {flex: 1}]}>
                <Text style={styles.inputLabel}>CVV</Text>
                <TextInput
                  inputMode="numeric"
                  style={styles.textInput}
                  placeholder="123"
                   maxLength={3}
                />
              </View>
            </View>
              <View style={{flexDirection:"row",alignItems:"center",gap:10,marginVertical:vs(20)}}>
                <TouchableOpacity style={{height:25,width:25,borderWidth:1,borderRadius:5}}>
                </TouchableOpacity>      
                    <Text style={styles.inputLabel}>Save Card</Text>
              </View>     
          </View>
        </ScrollView>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.checkoutButtonText}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddCardScreen;

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
    height: vs(205),
    backgroundColor: colors.whiteBackground,
    borderRadius: 25,
    borderWidth: 1,
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
    paddingVertical: vs(6),
  },
  inputGroup: {
    marginTop: 20,
  },
  inputLabel: {
    fontWeight: '500',
    fontSize: s(16),
  },
  textInput: {
  borderWidth: 1,
  marginTop: vs(12),
  borderRadius: 12,
  paddingHorizontal: s(20),
  fontSize: s(16),
  borderColor: colors.ligtShadow,
   width: '100%',
   textAlignVertical: 'center',
  },
});
