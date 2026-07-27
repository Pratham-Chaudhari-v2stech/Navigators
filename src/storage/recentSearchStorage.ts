import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'recent_searches';

export const getRecentSearches = async (): Promise<string[]> => {
  try {
    const res = await AsyncStorage.getItem(KEY);

    return res ? JSON.parse(res) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const saveRecentSearch = async (city: string) => {
  try {
    const searches = await getRecentSearches();

    const updatedSearches = [
      city,
      ...searches.filter(item => item.toLowerCase() !== city.toLowerCase()),
    ];

    const recent = updatedSearches.slice(0, 5);

    await AsyncStorage.setItem(KEY, JSON.stringify(recent));
  } catch (error) {
    console.error(error);
  }
};

export const clearSearch = async () => {
 try {
  const res = await AsyncStorage.removeItem(KEY)
 } catch (error) {
  console.error(error)
 }
};
