import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../../components/common/Header';
import colors from '../../config/colors';
import LogoutModal from './Logout';
import {SCREENS} from '../../navigation/Screens';

const profileOptions = [
  {
    icon: 'user',
    label: 'Practice Apps',
    lib: 'Feather',
    navigation: SCREENS.PRACTICE_APPS,
  },
  {
    icon: 'credit-card',
    label: 'Payment Methods',
    lib: 'Feather',
    navigation: SCREENS.PAYMENT_METHODS_SCREEN,
  },
  {icon: 'clipboard', label: 'My Orders', lib: 'Feather',
    navigation: SCREENS.ORDER_SCREEN,
  },
  {icon: 'settings', label: 'Settings', lib: 'Feather'},
  {icon: 'help-circle', label: 'Help Center', lib: 'Feather'},
  {icon: 'lock', label: 'Privacy Policy', lib: 'Feather'},
  {icon: 'user-plus', label: 'Invites Friends', lib: 'Feather'},
];

const ProfileScreen: React.FC = ({navigation}: any) => {
  const [profileImage, setProfileImage] = useState<string | undefined>(
    undefined,
  );
  const [logoutVisible, setLogoutVisible] = useState(false);
  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      const cameraGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      const storagePermission =
        Platform.Version >= 33
          ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
          : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

      const storageGranted = await PermissionsAndroid.request(
        storagePermission,
        {
          title: 'Storage Permission',
          message: 'App needs access to your photos',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      return (
        cameraGranted === PermissionsAndroid.RESULTS.GRANTED &&
        storageGranted === PermissionsAndroid.RESULTS.GRANTED
      );
    }
    return true;
  };

  const chooseImage = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) {
      Alert.alert('Permission denied', 'Cannot access camera or gallery.');
      return;
    }

    const choice = await new Promise<'camera' | 'gallery' | null>(resolve => {
      Alert.alert('Upload Photo', 'Choose an option', [
        {text: 'Camera', onPress: () => resolve('camera')},
        {text: 'Gallery', onPress: () => resolve('gallery')},
        {text: 'Cancel', onPress: () => resolve(null), style: 'cancel'},
      ]);
    });

    const options: any = {
      mediaType: 'photo' as const,
      quality: 0.7,
    };

    if (choice === 'camera') {
      launchCamera(options, handleImageResponse);
    } else if (choice === 'gallery') {
      launchImageLibrary(options, handleImageResponse);
    }
  };

  const handleImageResponse = (response: any) => {
    if (response.didCancel || response.errorCode) {
    } else if (response.assets && response.assets.length > 0) {
      setProfileImage(response.assets[0].uri || null);
    }
  };

  const renderIcon = (item: any) => {
    switch (item.lib) {
      case 'Feather':
        return <Feather name={item.icon} size={22} color={colors.primary} />;
      case 'MaterialIcons':
        return (
          <MaterialIcons name={item.icon} size={22} color={colors.primary} />
        );
      default:
        return <Ionicons name={item.icon} size={22} color={colors.primary} />;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Profile" />
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View>
            <Image
              source={
                profileImage
                  ? {uri: profileImage}
                  : {uri: 'https://randomuser.me/api/portraits/men/3.jpg'}
              }
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editIcon} onPress={chooseImage}>
              <Feather name="edit-2" size={16} color={colors.white} />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Vipin Girjapure</Text>
        </View>

        <View style={styles.optionList}>
          {profileOptions.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionRow}
              onPress={() => navigation.navigate(item.navigation)}>
              <View style={styles.iconLabel}>
                {renderIcon(item)}
                <Text style={styles.optionLabel}>{item.label}</Text>
              </View>
              <Feather name="chevron-right" size={22} color={colors.primary} />
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => setLogoutVisible(true)}>
            <View style={styles.iconLabel}>
              <Feather name="log-out" size={22} color={colors.primary} />
              <Text style={[styles.optionLabel, {color: colors.primary}]}>
                Log out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <LogoutModal
        visible={logoutVisible}
        onCancel={() => setLogoutVisible(false)}
        onConfirm={() => {
          setLogoutVisible(false);
        }}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: 24,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIcon: {
    position: 'absolute',
    bottom: 1,
    right: 10,
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 6,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    color: colors.primary,
  },
  optionList: {
    marginTop: 10,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  optionLabel: {
    fontSize: 16,
    color: colors.primary,
  },
});
