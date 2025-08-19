import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import colors from '../../config/colors';
import {poppins} from '../../utils/fonts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SCREENS} from '../../navigation/Screens';
import { s, vs } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({
  title = '',
  showNotification = false,
  showWishlistButton = false,
  paddingHorizontal = 16,
  isGoBack = true,
}) => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[
          styles.container,
          {
            paddingHorizontal,
            justifyContent: isGoBack ? 'space-between' : 'center',
          },
        ]}>
        {isGoBack && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <FontAwesome6
              name="arrow-left-long"
              size={20}
              color={colors.primary}
            />
          </TouchableOpacity>
        )}

        <Text style={styles.title}>{title}</Text>

        {showNotification ? (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate(SCREENS.NOTIFICATIONS)}>
            <Octicons name="bell-fill" size={24} color={colors.primary} />
          </TouchableOpacity>
        ) : (
          !showWishlistButton && <View style={{width: s(40)}} />
        )}
        {  showWishlistButton && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate(SCREENS.WISHLIST_SCREEN)}>
            <Icon name="heart-outline" size={24} color={colors.primary} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {},
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: s(40),
    height: vs(38),
    borderRadius: 44,
    borderWidth: 2,
    borderColor: colors.darkGrey,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.whiteBackground
  },
  title: {
    fontSize: s(18),
    color: colors.darkText,
    fontFamily: poppins.medium,
  },
});

export default Header;
