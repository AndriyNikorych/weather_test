const api = {
  key: '48c10b837a89cf30e61e5a411308c08c',
  base: 'http://api.openweathermap.org/data/2.5/',
};

export const getWeather = async (cityName: string, language: string, metric: string) => {
  const response = await fetch(`${api.base}weather?q=${cityName}&units=${metric}&APPID=${api.key}&lang=${language}`);

  return response.json();
};
