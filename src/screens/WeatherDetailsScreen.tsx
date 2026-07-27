import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, WeatherResponse } from '../types/weather';
import { getWeather } from '../services/weatherApi';

type Props = NativeStackScreenProps<RootStackParamList, 'WeatherDetails'>;

const WeatherDetailsScreen = ({ route }: Props) => {
  const { city } = route.params;

  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!weather) {
    return (
      <View style={styles.center}>
        <Text>Unable to fetch weather.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.city}>
        {weather.location.name}, {weather.location.region}
      </Text>

      <Text style={styles.country}>{weather.location.country}</Text>

      <Image
        source={{
          uri: `https:${weather.current.condition.icon}`,
        }}
        style={styles.icon}
      />

      <Text style={styles.condition}>{weather.current.condition.text}</Text>

      <Text style={styles.info}>🌡 Temperature: {weather.current.temp_c}°C</Text>

      <Text style={styles.info}>
        🤗 Feels Like: {weather.current.feelslike_c}°C
      </Text>

      <Text style={styles.info}>💧 Humidity: {weather.current.humidity}%</Text>

      <Text style={styles.info}>💨 Wind: {weather.current.wind_kph} km/h</Text>

      <Text style={styles.info}>
        🌍 Pressure: {weather.current.pressure_mb} mb
      </Text>

      <Text style={styles.info}>
        👀 Visibility: {weather.current.vis_km} km
      </Text>

      <Text style={styles.info}>☀ UV Index: {weather.current.uv}</Text>

      <Text style={styles.info}>
        🏭 PM2.5: {weather.current.air_quality.pm2_5}
      </Text>

      <Text style={styles.time}>🕒 {weather.location.localtime}</Text>
    </View>
  );
};

export default WeatherDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  city: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },

  country: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'gray',
  },

  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },

  condition: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },

  info: {
    fontSize: 17,
    marginBottom: 10,
  },

  time: {
    marginTop: 20,
    textAlign: 'center',
    color: 'gray',
  },
});
