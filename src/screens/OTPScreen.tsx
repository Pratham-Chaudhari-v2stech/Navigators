import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { showErrorToast, showSuccessToast } from '../utils/toast';
import CustomButton from '../components/CustomButton';
import { OTPFormData } from '../types/auth.types';
import { RootStackParamList } from '../navigation/AppNavigator';
import { otpSchema } from '../validation/otpSchema';

const CELL_COUNT = 6;

type OTPScreenProps = NativeStackScreenProps<RootStackParamList, 'OTP'>;

const OTPScreen = ({ navigation }: OTPScreenProps) => {
  const [otp, setOtp] = useState('');

  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPFormData>({
    resolver: yupResolver(otpSchema),
    defaultValues: {
      otp: '',
    },
  });

  const ref = useBlurOnFulfill({
    value: otp,
    cellCount: CELL_COUNT,
  });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otp,
    setValue: value => {
      setOtp(value);

      setValue('otp', value, {
        shouldValidate: true,
      });
    },
  });

  const handleVerifyOTP = (data: OTPFormData) => {
    console.log('OTP:', data);

    if (data.otp === '123456') {
      showSuccessToast('OTP verified successfully');

      navigation.navigate('Success');
    } else {
      showErrorToast('Invalid OTP. Please try again.');
    }
  };

  const handleOTPChange = (value: string) => {
    setOtp(value);

    setValue('otp', value, {
      shouldValidate: true,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Verify OTP</Text>

        <Text style={styles.subtitle}>
          Enter the 6-digit OTP sent to your email (for test enter
          123456)
        </Text>

        <CodeField
          ref={ref}
          {...props}
          value={otp}
          onChangeText={handleOTPChange}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete="sms-otp"
          rootStyle={styles.codeFieldRoot}
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />

        {errors.otp?.message ? (
          <Text style={styles.error}>{errors.otp.message}</Text>
        ) : null}

        <CustomButton
          title="Verify OTP"
          onPress={handleSubmit(handleVerifyOTP)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
  },

  card: {
    width: '100%',
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,

    elevation: 5,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30,
  },

  codeFieldRoot: {
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  cell: {
    width: 42,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: '#111',
  },

  focusCell: {
    borderColor: '#2563EB',
    borderWidth: 2,
  },

  error: {
    color: '#DC2626',
    fontSize: 13,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default OTPScreen;
