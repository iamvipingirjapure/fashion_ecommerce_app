import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../config/colors';

const Header = ({ title = '', showNotification = false ,paddingHorizontal=20}) => {
  const navigation:any = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container,{paddingHorizontal}]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={20} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        {showNotification ? (
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <MaterialIcons name="notifications-none" size={24} color="#333" />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 24 }} /> // empty space to align title
        )}
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});

export default Header;