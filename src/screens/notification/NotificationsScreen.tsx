import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/common/Header';
import colors from '../../config/colors';

type Notification = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  time: string;
};

type Section = {
  title: string;
  data: Notification[];
};

const sections: Section[] = [
  {
    title: 'TODAY',
    data: [
      {
        id: '1',
        icon: 'local-shipping',
        title: 'Order Shipped',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        time: '1h',
      },
      {
        id: '2',
        icon: 'percent',
        title: 'Flash Sale Alert',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        time: '1h',
      },
      {
        id: '3',
        icon: 'star-border',
        title: 'Product Review Request',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam...',
        time: '1h',
      },
    ],
  },
  {
    title: 'YESTERDAY',
    data: [
      {
        id: '4',
        icon: 'local-shipping',
        title: 'Order Shipped',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        time: '1d',
      },
      {
        id: '5',
        icon: 'account-balance-wallet',
        title: 'New Paypal Added',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        time: '1d',
      },
      {
        id: '6',
        icon: 'percent',
        title: 'Flash Sale Alert',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        time: '1d',
      },
    ],
  },
];

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <Header title='Notifications'/>
        <View style={styles.container}>

      <FlatList
        data={sections}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item: section }) => (
          <View>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <TouchableOpacity>
                <Text style={styles.markRead}>Mark all as read</Text>
              </TouchableOpacity>
            </View>
            {section.data.map((notification) => (
              <View key={notification.id} style={styles.card}>
                <View style={styles.iconWrapper}>
                  <Icon
                    name={notification.icon}
                    size={20}
                    color={colors.primary}
                  />
                </View>
                <View style={styles.textContent}>
                  <View style={styles.textRow}>
                    <Text style={styles.title}>{notification.title}</Text>
                    <Text style={styles.time}>{notification.time}</Text>
                  </View>
                  <Text style={styles.subtitle}>{notification.subtitle}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
        ListFooterComponent={<View style={{ height: 40 }} />}
      />
      </View>
    </SafeAreaView>
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 8,
  },
  sectionTitle: {
    fontWeight: '600',
    color: '#888',
    fontSize: 14,
    letterSpacing:2
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
    borderBottomColor: '#eee',
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
    color: '#000',
  },
  subtitle: {
    fontSize: 12,
    color: '#555',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
});

export default NotificationsScreen;