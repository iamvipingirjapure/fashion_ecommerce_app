import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../config/colors';
import Header from '../../components/common/Header';
import {listItems} from '../data';
import {useNavigation} from '@react-navigation/native';
const List = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Header title="Practice Apps" paddingHorizontal={0} />
      <FlatList
        style={{marginTop: 10}}
        data={listItems}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(item.path)}>
            <Text style={styles.title}>{item.title}</Text>
            <Icon name={'star-border'} size={20} color={colors.primary} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  newBadge: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  newBadgeText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 12,
  },
  markRead: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '400',
  },
  card: {
    flexDirection: 'row',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.ligtShadow,
    justifyContent: 'space-between',
  },
  iconWrapper: {
    width: 38,
    height: 38,
    borderRadius: 24,
    backgroundColor: colors.disabled,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContent: {
    flex: 1,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
    color: colors.darkText,
  },
  subtitle: {
    fontSize: 12,
    color: colors.darkText,
  },
  time: {
    fontSize: 12,
    color: colors.darkText,
  },
});

export default List;
