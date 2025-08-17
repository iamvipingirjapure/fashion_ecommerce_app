import React from 'react';
import {View, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import colors from '../config/colors';
import {SCREENS} from './Screens';

const BottomTabBar: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'HomeScreen':
        return 'home';
      case 'cart':
        return 'rocket';
      case 'Favorites':
        return 'heart-fill';
      case 'Chat':
        return 'chat-bubble-outline';
      case 'Profile':
        return 'person';
      case 'Notifications':
        return 'bell';
      default:
        return 'home';
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            if (route.name === 'cart') {
              navigation.navigate(SCREENS.CART_SCREEN);
            } else navigation.navigate(route.name as never);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabButton, isFocused && styles.activeTab]}>
            <View style={isFocused ? styles.iconWrapper : undefined}>
              <Icon
                name={getIcon(route.name)}
                size={20}
                color={isFocused ? colors.primary : colors.grey}
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
  safeArea: {
    backgroundColor: 'transparent',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: colors.bottomMenuBarBg,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: Platform.OS === 'ios' ? 20 : 10,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 10,
    elevation: 10,
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
    width: 48,
    height: 48,
    backgroundColor: colors.white,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});
