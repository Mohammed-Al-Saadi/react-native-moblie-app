import React, { useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSignupFormContext } from '../../services/signupServices/SignupLabelsContext';
import isAuthenticated from '../../services/loginServices/IsAuthenticated';
import { useAuthContext } from '../../services/loginServices/AuthContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FlightSVG from '../../assets/images/flight.svg';
import HomePage from '../../../components/homePage/HomePage';

const WelcomeScreen = ({ navigation }) => {
    const authContext = useAuthContext();
    const labelContext = useSignupFormContext();

    async function triggerFunctions() {
        await isAuthenticated(authContext, labelContext);
    }
    useEffect(() => {
        triggerFunctions();
    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
            }}>
            {/* <ScrollView > */}
            <View style={{ marginTop: -1, marginBottom: 10, width: '100%', height:'10%', alignItems: 'center', backgroundColor: '#cfebf3' }}>
                <Text
                    style={{
                        fontFamily: 'Inter-Bold',
                        fontSize: 30,
                        color: '#fff',
                    }}>
                    HORIZON
                </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlightSVG
                    width={700}
                    height={700}
                    marginTop={100}
                // style={{ transform: [{ rotate: '15deg' }] }}
                />
                {/* <Image
                    source={require('../../assets/images/airplain.png')}
                    style={{
                        width: 200,
                        height: 200,
                        resizeMode: 'contain',
                    }}
                /> */}
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: '#27aae2',
                    padding: 20,
                    width: '90%',
                    borderRadius: 10,
                    marginTop: 50,
                    marginBottom: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
                onPress={() => navigation.navigate('Login')}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily: 'Roboto-MediumItalic',
                    }}>
                    Login
                </Text>
                <MaterialIcons name="arrow-forward" size={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: '#1e1e1e',
                    padding: 20,
                    width: '90%',
                    borderRadius: 10,
                    marginBottom: 90,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            onPress={() => navigation.navigate('Home')}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily: 'Roboto-MediumItalic',
                    }}>
                    Continue As a Guest
                </Text>
                <MaterialIcons name="arrow-forward" size={22} color="#fff" />
            </TouchableOpacity>
            {/* </ScrollView> */}
        </View>
    );
};

export default WelcomeScreen;