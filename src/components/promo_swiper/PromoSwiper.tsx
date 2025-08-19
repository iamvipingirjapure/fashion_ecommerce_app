import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import colors from '../../config/colors';

const { width } = Dimensions.get('window');

const PromoSwiper = () => {
    return (
        <View style={styles.wrapper}>
            <Swiper
                autoplay
                dotColor={colors.disabled}
                activeDotColor={colors.primary}
                dotStyle={styles.dot}
                activeDotStyle={styles.dot}
                autoplayTimeout={10}
                fadingEdgeLength={2}
            >
                {[1, 2, 3].map((item, index) => (
                    <View style={styles.slide} key={index}>
                        <View style={styles.left}>
                            <Text style={styles.title}>New Collection</Text>
                            <Text style={styles.subtitle}>Discount 50% for the first transaction</Text>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Shop Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 200,
    },
    slide: {
        flexDirection: 'row',
        backgroundColor: colors.lightColorBg,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        height: 200,
        borderWidth: 1,
        borderColor: colors.white
    },
    left: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 15,
        color: colors.primary,
    },
    button: {
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        alignSelf: 'flex-start',
        elevation: 2,
    },
    buttonText: {
        color: colors.white,
        fontWeight: '600',
    },
    image: {
        width: 100,
        height: 150,
        marginLeft: 10,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
    },
});

export default PromoSwiper;