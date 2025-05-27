import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    PermissionsAndroid,
    Platform,
    Alert,
    SafeAreaView
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppText from '../../components/common/AppText';
import colors from '../../config/colors';
import Header from '../../components/common/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CompleteProfile = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+91');
    const [gender, setGender] = useState('');
    const [profileImage, setProfileImage] = useState<string | undefined>(undefined);

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
                }
            );

            const storagePermission =
                Platform.Version >= 33
                    ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
                    : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

            const storageGranted = await PermissionsAndroid.request(storagePermission, {
                title: 'Storage Permission',
                message: 'App needs access to your photos',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            });

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

        Alert.alert('Upload Photo', 'Choose an option', [
            { text: 'Camera', onPress: () => openCamera() },
            { text: 'Gallery', onPress: () => openGallery() },
            { text: 'Cancel', style: 'cancel' },
        ]);
    };

    const openCamera = () => {
        launchCamera({ mediaType: 'photo', quality: 0.7 }, handleImageResponse);
    };

    const openGallery = () => {
        launchImageLibrary({ mediaType: 'photo', quality: 0.7 }, handleImageResponse);
    };

    const handleImageResponse = (response: any) => {
        if (response.didCancel || response.errorCode) {
            console.warn('Image selection cancelled or failed');
        } else if (response.assets && response.assets.length > 0) {
            setProfileImage(response.assets[0].uri || undefined);
        }
    };

    const handleCompleteProfile = () => {
        navigation.replace('TabNavigator', {
            screen: 'HomeScreen',
            params: { location: 'location', fullAddress: 'addressString' },
        });
    };

    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:colors.white }}>
            <Header paddingHorizontal={20} />
            <KeyboardAwareScrollView
                style={styles.container}
                contentContainerStyle={{ paddingBottom: 40 }}
                enableOnAndroid
                extraScrollHeight={100}
                keyboardShouldPersistTaps="handled"
            >
                <Text style={styles.title}>Complete Your Profile</Text>
                <Text style={styles.subtitle}>
                    Don’t worry, only you can see your personal data. No one else will be able to see it.
                </Text>

                <View style={styles.imageWrapper}>
                    <Image
                        source={
                            profileImage
                                ? { uri: profileImage }
                                : require('../../../assets/images/SpalshScreenBg.jpg')
                        }
                        style={styles.profileImage}
                    />
                    <TouchableOpacity style={styles.editIcon} onPress={chooseImage}>
                        <MaterialIcons name="edit" size={18} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.inputWrapper}>
                    <AppText style={styles.inputLabel} fontSize={12}>Name</AppText>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor={colors.black}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <AppText style={styles.inputLabel} fontSize={12}>Phone Number</AppText>
                    <TextInput
                        value={phone}
                        onChangeText={setPhone}
                        style={styles.input}
                        placeholder="Phone Number"
                        keyboardType="phone-pad"
                        placeholderTextColor={colors.black}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <AppText style={styles.inputLabel} fontSize={12}>Gender</AppText>
                    <View style={styles.dropdown}>
                        <Picker
                            selectedValue={gender}
                            onValueChange={(itemValue) => setGender(itemValue)}
                        >
                            <Picker.Item label="Select Gender" value="" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                            <Picker.Item label="Other" value="other" />
                        </Picker>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleCompleteProfile}>
                    <Text style={styles.buttonText}>Complete Profile</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default CompleteProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        marginBottom: 24,
    },
    imageWrapper: {
        alignItems: 'center',
        marginBottom: 24,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#eaeaea',
    },
    editIcon: {
        position: 'absolute',
        bottom: 6,
        right: '32%',
        backgroundColor: colors.primary,
        borderRadius: 16,
        padding: 6,
    },
    inputWrapper: {
        width: '100%',
        marginBottom: 16,
    },
    inputLabel: {
        marginBottom: 8,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 28,
        fontSize: 16,
        height: 55,
        paddingHorizontal: 16,
        color: colors.black,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 28,
        overflow: 'hidden',
        paddingLeft: 12,
    },
    button: {
        marginTop: 24,
        backgroundColor: colors.primary,
        padding: 16,
        borderRadius: 40,
        alignItems: 'center',
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
    },
});
