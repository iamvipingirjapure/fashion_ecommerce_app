import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../config/colors';
import { poppins } from '../../utils/fonts';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({ title = '', showNotification = false ,paddingHorizontal=20}) => {
  const navigation:any = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container,{paddingHorizontal}]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Octicons name="arrow-left" size={20} color={colors.primary} />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        {showNotification ? (
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
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
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.lightText,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.darkText, 
    fontFamily:poppins.bold
  },
});

export default Header;