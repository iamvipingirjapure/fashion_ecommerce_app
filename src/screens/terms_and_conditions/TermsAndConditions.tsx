import React from 'react';
import { Button, StyleSheet, View, ScrollView, useWindowDimensions, Modal, Text, TouchableOpacity } from 'react-native';
import RenderHTML from 'react-native-render-html';
import colors from '../../config/colors';
import { poppins } from '../../utils/fonts';

const TermsAndConditions = ({ isTermsOpen = false, onClose }: any) => {
    const { width } = useWindowDimensions();

    const htmlContent = `
    <p>Welcome to our app. Please read the following terms and conditions carefully.</p>
    <ul>
      <li>Use the app respectfully.</li>
      <li>Your data may be used for improving the service.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
      <li>Violations may result in account suspension.</li>
    </ul>
  `;

    return (
        <Modal visible={isTermsOpen} animationType="fade" transparent={true}>
            <View style={styles.modalBackdrop}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Terms and Conditions</Text>
                    <ScrollView>
                        <RenderHTML
                            contentWidth={width - 40}
                            source={{ html: htmlContent }}
                            tagsStyles={tagsStyles}
                        />
                    </ScrollView>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => onClose(false)} style={styles.acceptBtn}>
                            <Text style={styles.btnText}>
                                Accept
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const tagsStyles = {
    h1: {
        fontSize: 24,
        marginBottom: 10,
    },
    p: {
        fontSize: 16,
        marginBottom: 10,
    },
    li: {
        fontSize: 16,
        marginBottom: 5,
    },
};

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontFamily: poppins.bold,
        includeFontPadding: false,
        marginBottom: 10,
        color: colors.primary
    },
    modalBackdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        padding: 20,
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 20,
        maxHeight: '80%',
    },
    buttonContainer: {
        marginTop: 20,
    },
    acceptBtn: {
        backgroundColor: colors.primary,
        padding: 8, borderRadius: 30,
        width: 150,
        alignSelf: "flex-end"
    },
    btnText: {
        fontSize: 16,
        color: colors.white,
        textAlign: "center",
        fontFamily: poppins.regular,
        includeFontPadding: false
    }
});

export default TermsAndConditions;
