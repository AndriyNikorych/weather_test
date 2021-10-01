import React, { useEffect, useState } from 'react';

import { WeatherList } from './components/WeatherList/WeatherList';
import { getWeather } from './api/api';
import './App.scss';

export const App: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('Chernivtsi');
  const [currentWeather, setcurrentWeather] = useState<WeatherAPI | null>(null);
  const [language, setLanguage] = useState<string>('en');
  const [metric, setMetric] = useState<string>('metric');

  const loadWeather = async () => {
    const weatherFromApi = await getWeather(selectedCity, language, metric);

    setcurrentWeather(weatherFromApi);
  };

  useEffect(() => {
    loadWeather();
  }, [selectedCity, language, metric]);

  const hanleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setSelectedCity(city);
    setCity('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const selectedLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  const selectedMetric = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMetric(event.target.value);
  };

  let chooseCityMessage;
  let errorMessage;

  switch (language) {
    case 'en':
      chooseCityMessage = 'Choose city';
      errorMessage = 'City is not found';
      break;

    case 'ru':
      chooseCityMessage = 'Выберите город';
      errorMessage = 'Город не найден';
      break;

    case 'ua':
      chooseCityMessage = 'Оберіть місто';
      errorMessage = 'Місто не знайдено';
      break;

    default:
      break;
  }

  let validCity;

  if (currentWeather?.name) {
    validCity = <WeatherList currentWeather={currentWeather} language={language} metric={metric} />;
  } else {
    validCity = <h2 className="error-message">{errorMessage}</h2>;
  }

  return (
    <div className="app">
      <main className="main container-lg">
        <div className="search">
          <form
            className="search__form"
            onSubmit={hanleSubmit}
          >
            <input
              type="text"
              className="search__field"
              placeholder={chooseCityMessage}
              value={city}
              onChange={handleChange}
            />
          </form>

          <div className="select">
            <select
              value={language}
              onChange={selectedLanguage}
              className="select__language"
            >
              <option value="en" className="select__en">
                English
              </option>

              <option value="ua">
                Ukrainian
              </option>

              <option value="ru">
                Russian
              </option>
            </select>

            <select
              value={metric}
              onChange={selectedMetric}
              className="select__metric"
            >
              <option value="metric">
                Metric
              </option>

              <option value="standard">
                Standard
              </option>

              <option value="imperial">
                Imperial
              </option>
            </select>
          </div>
        </div>

        <div className="weather">
          {currentWeather && (validCity)}
        </div>
      </main>
    </div>
  );
};
