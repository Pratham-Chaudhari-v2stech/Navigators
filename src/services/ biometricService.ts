import SimpleBiometrics from 'react-native-simple-biometrics';

export const authenticateWithBiometrics = async (): Promise<boolean> => {
  try {
    const canAuthenticate =
      await SimpleBiometrics.canAuthenticate();

    if (!canAuthenticate) {
      console.log('Biometric authentication is not available');

      return false;
    }

    const result = await SimpleBiometrics.requestBioAuth(
      'Customer Approval',
      'Authenticate to approve the customer',
    );

    return result;
  } catch (error) {
    console.log('Biometric authentication failed:', error);

    return false;
  }
};