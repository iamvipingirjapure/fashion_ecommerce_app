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
    SafeAreaView,
    KeyboardAvoidingView,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppText from '../../components/common/AppText';
import colors from '../../config/colors';
import Header from '../../components/common/Header';

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

        const choice = await new Promise<'camera' | 'gallery' | null>((resolve) => {
            Alert.alert('Upload Photo', 'Choose an option', [
                { text: 'Camera', onPress: () => resolve('camera') },
                { text: 'Gallery', onPress: () => resolve('gallery') },
                { text: 'Cancel', onPress: () => resolve(null), style: 'cancel' },
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
            console.warn('Image selection cancelled or failed');
        } else if (response.assets && response.assets.length > 0) {
            setProfileImage(response.assets[0].uri || null);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.container}
            >
                <Header paddingHorizontal={0}/>
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
                <View style={{ width: '100%' }}>
                    <AppText style={styles.inputLabel} fontSize={12}>Name</AppText>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor={colors.black}
                    />
                </View>
                <View style={{ width: '100%' }}>
                    <AppText style={styles.inputLabel} fontSize={12}>Phone Number</AppText>
                    <TextInput
                        value={phone}
                        onChangeText={setPhone}
                        style={styles.input}
                        placeholder="Phone Number"
                        keyboardType="phone-pad"
                    />
                </View>
                <View style={{ width: '100%' }}>
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

                <TouchableOpacity style={styles.button} onPress={()=> navigation.replace('TabNavigator', {
                        screen: 'HomeScreen',
                        params: { location: 'location', fullAddress: 'addressString' },
                      })}>
                    <Text style={styles.buttonText}>Complete Profile</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default CompleteProfile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 24,
        borderWidth: 1,
        borderColor: colors.disabled,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 50
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 12,
    },
    inputLabel: { marginBottom: 8 },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        marginBottom: 24,
    },
    imageWrapper: {
        position: 'relative',
        marginBottom: 24,
        alignItems: "center"
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#eaeaea',
    },
    editIcon: {
        position: 'absolute',
        bottom: 1,
        backgroundColor: '#6a4029',
        borderRadius: 16,
        padding: 6,
        marginLeft:70,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 28,
        marginBottom: 16,
        fontSize: 16,
        height: 55,
        paddingLeft: 12
    },
    dropdown: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 28,
        overflow: 'hidden',
        marginBottom: 24,
        paddingLeft: 20,

    },
    button: {
        width: '100%',
        padding: 16,
        backgroundColor: '#6a4029',
        borderRadius: 40,
        alignItems: 'center',
    },
    buttonText: {
        color:colors.white,
        fontSize: 16,
    },
});
