import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import LanguageSwitcher from '../components/LanguageSwitcher';
import ScreenHeader from '../components/ScreenHeader';

import styles from './LoginScreen.styles';
import { accessibility } from '../utils/accessibility';

const LoginScreen = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login Pressed');
    console.log({ email, password });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScreenHeader />

        <CustomInput
          label={t('email')}
          placeholder={t('emailPlaceholder')}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          {...accessibility.emailInput}
        />

        <CustomInput
          label={t('password')}
          placeholder={t('passwordPlaceholder')}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          {...accessibility.passwordInput}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>{t('forgotPassword')}</Text>
        </TouchableOpacity>

        <CustomButton
          title={t('login')}
          onPress={handleLogin}
          {...accessibility.loginButton}
        />

        <LanguageSwitcher />
      </View>
    </View>
  );
};

export default LoginScreen;
