import axios from 'axios';
import { API, API_KEY } from '../constants/api';

export const getWeather = async (city: string) => {
  try {
    const response = await axios.get(API, {
      params: {
        key: API_KEY,
        q: city,
        aqi: 'yes',
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};