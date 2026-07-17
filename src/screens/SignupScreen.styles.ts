import { StyleSheet } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },

  formContainer: {
    marginHorizontal: scale(20),
    backgroundColor: '#fff',
    padding: moderateScale(20),
    borderRadius: moderateScale(12),
    elevation: 5,
  },

  heading: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: verticalScale(25),
    color: '#333',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: moderateScale(8),
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(12),
    marginBottom: verticalScale(15),
    fontSize: moderateScale(16),
    backgroundColor: '#fff',
  },

  error: {
    color: 'red',
    marginTop: verticalScale(4),
    marginBottom: verticalScale(10),
    fontSize: moderateScale(14),
  },

  button: {
    backgroundColor: '#2196F3',
    paddingVertical: verticalScale(14),
    borderRadius: moderateScale(8),
    marginTop: verticalScale(10),
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
});

export default styles;