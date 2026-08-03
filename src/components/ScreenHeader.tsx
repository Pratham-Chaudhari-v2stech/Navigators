import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const ScreenHeader = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        accessibilityRole="header"
      >

        {t('welcome')}
      </Text>


      <Text style={styles.subtitle}>
        {t('loginToContinue')}
      </Text>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    alignItems: 'center',
  },

  title: {
    fontSize: Fonts.size.xxl,
    fontWeight: Fonts.weight.bold,
    color: Colors.textPrimary,
  },

  subtitle: {
    marginTop: 8,
    fontSize: Fonts.size.md,
    color: Colors.textSecondary,
  },
});