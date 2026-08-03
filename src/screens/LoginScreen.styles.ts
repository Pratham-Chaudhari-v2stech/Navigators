import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 12,
  },

  forgotPasswordText: {
    color: Colors.primary,
    fontSize: Fonts.size.sm,
    fontWeight: Fonts.weight.medium,
  },
});

export default styles;