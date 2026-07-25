import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { requestLocationPermission } from '../utils/permissions';

const LocationScreen = () => {
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [status, setStatus] = useState<string>('Press the button to get your location');

  const getCurrentLocation = async () => {
    const hasPermission = await requestLocationPermission();

    if (!hasPermission) {
      setStatus('Location permission denied');
      Alert.alert(
        'Permission Denied',
        'Please allow location permission to continue.',
      );
      return;
    }

    setStatus('Fetching location...');

    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude.toString());
        setLongitude(position.coords.longitude.toString());
        setStatus('Location fetched successfully');
      },
      error => {
        console.log(error);

        setStatus('Failed to fetch location');

        Alert.alert(
          'Location Error',
          error.message,
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Location</Text>

      <Button
        title="Get Current Location"
        onPress={getCurrentLocation}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          Latitude:
        </Text>
        <Text selectable>{latitude || '-'}</Text>

        <Text style={styles.label}>
          Longitude:
        </Text>
        <Text selectable>{longitude || '-'}</Text>

        <Text style={styles.label}>
          Status:
        </Text>
        <Text>{status}</Text>
      </View>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  infoContainer: {
    marginTop: 30,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 15,
  },
});