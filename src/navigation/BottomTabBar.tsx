import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import colors from '../config/colors';

const BottomTabBar = ({ state, descriptors, navigation }: any) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return 'home';
      case 'Cart':
        return 'feed-tag';
      case 'Favorites':
        return 'heart-fill';
      case 'Chat':
        return 'chat-bubble-outline';
      case 'Profile':
        return 'person-fill';
      case 'Notifications':
        return 'bell-fill';
      default:
        return 'home';
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = route.name;
        const isActive = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isActive && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={label}
            onPress={onPress}
            style={[styles.tabButton, isActive && styles.activeTab]}
          >
            <View style={isActive ? styles.iconWrapper : undefined}>
              <Icon
                name={getIcon(label)}
                size={24}
                color={isActive ? colors.primary : '#9b9b9f'}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.bottomMenuBarBg,
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderRadius: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 16,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  activeTab: {
    position: 'relative',
  },
  iconWrapper: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 100,
  },
});
