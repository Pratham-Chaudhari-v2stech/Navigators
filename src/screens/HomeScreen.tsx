import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import {
  getRecentSearches,
  saveRecentSearch,
  clearSearch,
} from '../storage/recentSearchStorage';
import { RootStackParamList } from '../types/weather';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { getWeather } from '../services/weatherApi';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [city, setCity] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadRecentSearches();
  }, []);

  const loadRecentSearches = async () => {
    const data = await getRecentSearches();
    setRecentSearches(data);
  };
  const handleClearSearch = async () => {
    await clearSearch();
    setRecentSearches([]);
  };

  const handleSearch = async (searchCity?: string) => {
    const cityName = (searchCity || city).trim();

    if (!cityName) {
      Alert.alert('Validation', 'Please enter a city name.');
      return;
    }

    try {
      setLoading(true);

      await getWeather(cityName);

      await saveRecentSearch(cityName);
      await loadRecentSearches();

      navigation.navigate('WeatherDetails', {
        city: cityName,
      });

      setCity('');
    } catch (error) {
      Alert.alert('Error', 'City not found.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Weather App</Text>

      <SearchBar
        value={city}
        onChangeText={setCity}
        onSearch={() => handleSearch()}
        loading={loading}
      />

      <View style={styles.header}>
  <Text style={styles.heading}>Recent Searches</Text>

  <Pressable style={styles.clearButton} onPress={handleClearSearch}>
    <Text style={styles.clearButtonText}>Clear</Text>
  </Pressable>
</View>

      <FlatList
        data={recentSearches}
        keyExtractor={(item, index) => `${item}-${index}`}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No recent searches</Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleSearch(item)}
          >
            <Text style={styles.cityText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 25,
  },

 header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 20,
  marginBottom: 10,
},

heading: {
  fontSize: 18,
  fontWeight: '600',
},

clearButton: {
  backgroundColor: '#EF4444',
  paddingHorizontal: 14,
  paddingVertical: 6,
  borderRadius: 8,
},

clearButtonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: '600',
},

  item: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },

  cityText: {
    fontSize: 16,
  },

  emptyText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 30,
  },
});
