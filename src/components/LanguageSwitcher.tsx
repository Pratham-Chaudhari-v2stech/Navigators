import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import { accessibility } from '../utils/accessibility';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const handleLanguageChange = (language: 'en' | 'hi') => {
    i18n.changeLanguage(language);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('language')}</Text>

      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            currentLanguage === 'en' && styles.activeButton,
          ]}
          onPress={() => handleLanguageChange('en')}
          {...accessibility.englishButton}
        >
          <Text
            style={[
              styles.buttonText,
              currentLanguage === 'en' && styles.activeButtonText,
            ]}
          >
            {t('english')}
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            currentLanguage === 'hi' && styles.activeButton,
          ]}
          onPress={() => handleLanguageChange('hi')}
          {...accessibility.hindiButton}
        >
          <Text
            style={[
              styles.buttonText,
              currentLanguage === 'hi' && styles.activeButtonText,
            ]}
          >
            {t('hindi')}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LanguageSwitcher;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },

  label: {
    fontSize: Fonts.size.md,
    fontWeight: Fonts.weight.medium,
    color: Colors.textPrimary,
    marginBottom: 12,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },

  button: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.surface,
  },

  activeButton: {
    backgroundColor: Colors.primary,
  },

  buttonText: {
    color: Colors.primary,
    fontSize: Fonts.size.md,
    fontWeight: Fonts.weight.medium,
  },

  activeButtonText: {
    color: Colors.white,
  },
});