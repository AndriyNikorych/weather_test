/// <reference types="react-scripts" />

type Weather = {
  main: Main,
  sys: Sys,
  name: string,
  weather: Array<string>,
  visibility: string,
  wind: Wind,
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
