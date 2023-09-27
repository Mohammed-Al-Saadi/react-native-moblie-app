import React, { useState } from 'react';
import {
    StyleSheet, TextInput, View, Text, Image, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView,
} from 'react-native';
import { useUserContext } from '../../services/UserContext';
import { useSignupFormContext } from '../components/signupServices/SignupLabelsContext';
import Loader from '../../services/Loader';
import styles from '../../styles/SignupStyle';

const LoginScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Hellow World!</Text>
            < TouchableOpacity
                style={styles.buttonStyle2}
                activeOpacity={0.5}
                onPress={() => {
                    // change to login screeb
                    navigation.navigate('Registration | Basic Info');
                }} >
                <Text style={styles.buttonTextStyle}>Register</Text>
            </TouchableOpacity >
        </View>
    )
}

export default LoginScreen;