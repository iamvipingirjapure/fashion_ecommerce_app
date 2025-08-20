import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/common/Header';
import {s, vs} from 'react-native-size-matters';
import colors from '../../config/colors';
import { SCREENS } from '../../navigation/Screens';

type Order = {
  id: string;
  title: string;
  size: string;
  qty: number;
  price: string;
  image: string;
  status: 'Active' | 'Completed' | 'Cancelled';
};

const TABS: Array<Order['status']> = ['Active', 'Completed', 'Cancelled'];

const OrdersScreen: React.FC = ({navigation}:any) => {
  const [selectedTab, setSelectedTab] = useState<Order['status']>('Active');

  const renderButtontext = () => {
    switch (selectedTab) {
      case 'Active':
        return 'Track Order';
      case 'Completed':
        return 'Leave Review';
      case 'Cancelled':
        return 'Re-Order';
      default:
        break;
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="My Orders" paddingHorizontal={s(10)} />
      <View style={styles.tabs}>
        {TABS.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}>
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={new Array(10)}
        renderItem={() => {
          return (
            <View style={styles.cartItemContainer}>
              <Image
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/3.jpg',
                }}
                style={styles.image}
              />
              <View style={styles.cartDetails}>
                <Text style={styles.itemTitle}>Brown Jacket</Text>
                <Text style={styles.itemSize}>Size: {'XL'} | Qty : {"10"}pcs</Text>
                <View style={styles.priceQtyRow}>
                  <Text style={styles.itemPrice}>${'85.00'}</Text>
                  <TouchableOpacity style={styles.trackBtn} onPress={()=>navigation.navigate(SCREENS.LEAVE_REVIEW)}>
                    <Text style={styles.trackText}>{renderButtontext()}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
        style={{borderWidth: 0, paddingHorizontal: s(10)}}
      />
    </SafeAreaView>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBackground,
  },
  container: {
    flex: 1,
    paddingHorizontal: s(15),
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: vs(15),
    borderBottomWidth: 1,
    borderColor: colors.ligtShadow,
  },
  tab: {
    paddingBottom: s(15),
    paddingHorizontal: s(10),
    textAlign: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderRadius: 2,
    borderBottomColor: colors.primary,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: s(16),
    color: colors.grey,
    fontWeight: '600',
  },
  activeTabText: {
    color: colors.primary,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: s(8),
    marginBottom: vs(12),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: s(70),
    height: vs(70),
    borderRadius: 8,
    marginRight: s(8),
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: s(14),
    fontWeight: '600',
    marginBottom: 2,
  },
  details: {
    fontSize: s(12),
    marginBottom: vs(5),
  },
  price: {
    fontSize: s(14),
    fontWeight: '600',
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
    fontSize: s(13),
    marginVertical: vs(5),
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
