import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import colors from '../../config/colors';
import { poppins } from '../../utils/fonts';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SCREENS } from '../../navigation/Screens';

const Header = ({ title = '', showNotification = false ,paddingHorizontal=16}) => {
  const navigation:any = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container,{paddingHorizontal}]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome6 name="arrow-left-long" size={20} color={colors.darkText} />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        {showNotification ? (
          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.NOTIFICATIONS)}>
            <Octicons name="bell-fill" size={24} color={colors.primary} />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 24 }} /> 
        )}
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeArea: {
  },
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 46,
    height: 46,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.lightText,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.darkText, 
    fontFamily:poppins.medium
  },
});

export default Header;