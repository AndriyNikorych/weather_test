/// <reference types="react-scripts" />

type WeatherAPI = {
  main: Main,
  sys: Sys,
  name: string,
  weather: string[Weather],
  wind: Wind,
  dt: Date,
};

type Main = {
  temp: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number,
};

type Sys = {
  country: string,
};

type Wind = {
  speed: number,
  deg: number,
};

type Weather = {
  description: string,
  icon: string,
};
