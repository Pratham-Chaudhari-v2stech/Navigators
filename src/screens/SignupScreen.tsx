import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import styles from './SignupScreen.styles';
import { useSelector, UseSelector } from 'react-redux';
import { RootState } from '../redux/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}



export default function SignupScreen({ navigation }: Props) {
    const appTitle= useSelector((state:RootState)=> state.app.appTitle)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSignup = async () => {
        setError({
            name: '',
            email: '',
            password: ''
        });

        if (!name.trim()) {
            setError(prev => ({
                ...prev,
                name: 'Name is required',
            }));
            return;
        }

        if (!email.trim()) {
            setError(prev => ({
                ...prev,
                email: 'Email is required',
            }));
            return;
        }

        if (!password.trim()) {
            setError(prev => ({
                ...prev,
                password: 'Password is required',
            }));
            return;
        }

        try {
            const data = await AsyncStorage.getItem('users');

            const users: User[] = data ? JSON.parse(data) : [];

            const emailExists = users.some(
                user => user.email.toLowerCase() === email.toLowerCase(),
            );

            if (emailExists) {
                setError(prev => ({
                    ...prev,
                    email: 'Email already exists',
                }));
                return;
            }

            const newUser: User = {
                id: Date.now().toString(),
                name,
                email,
                password,
            };

            users.push(newUser);

            await AsyncStorage.setItem('users', JSON.stringify(users));

            Alert.alert('Success', 'User Registered Successfully');

            setName('');
            setEmail('');
            setPassword('');

            navigation.navigate('List');
        } catch (err) {
            Alert.alert('Error', 'Something went wrong.');
            console.log(err);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={'padding'}>

                <View style={styles.formContainer}>
                    <Text style={styles.heading}>{appTitle}</Text>

                    <TextInput
                        placeholder="Enter Name"
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />
                    {error.name ? (
                        <Text style={styles.error}>{error.name}</Text>
                    ) : null}

                    <TextInput
                        placeholder="Enter Email"
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    {error.email ? (
                        <Text style={styles.error}>{error.email}</Text>
                    ) : null}

                    <TextInput
                        placeholder="Enter Password"
                        style={styles.input}
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    {error.password ? (
                        <Text style={styles.error}>{error.password}</Text>
                    ) : null}

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSignup}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}