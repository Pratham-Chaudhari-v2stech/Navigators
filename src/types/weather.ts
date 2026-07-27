
export type RootStackParamList={
    Home:undefined,
    WeatherDetails:{
      city:string
    },
}

export interface WeatherResponse {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };

  current: {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    wind_kph: number;
    pressure_mb: number;
    vis_km: number;
    uv: number;

    condition: {
      text: string;
      icon: string;
    };

    air_quality: {
      pm2_5: number;
    };
  };
}