import { PermissionsAndroid, Platform } from 'react-native';

export const requestLocationPermission = async (): Promise<boolean> => {
  if (Platform.OS !== 'android') {
    return true;
  }

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message:
          'This app needs access to your location to display your current location.',
        buttonPositive: 'Allow',
        buttonNegative: 'Deny',
      },
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (error) {
    console.error('Permission request error:', error);
    return false;
  }
};