import React, { useState } from 'react';
import { getWeather } from './api/api';
import './App.scss';

export const App: React.FC = () => {
  const [city, setCity] = useState<string>('Chernivtsi');
  // const [date, setDate] = useState<number>(0);
  const [currentWeather, setcurrentWeather] = useState<Weather | null>(null);

  const loadWeather = async () => {
    const weatherFromApi = await getWeather(city);

    setcurrentWeather(weatherFromApi);
  };

  const hanleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    loadWeather();
    setCity('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <form
            className="find-movie"
            onSubmit={hanleSubmit}
          >
            <input
              type="text"
              className="search-field"
              placeholder="Choose city"
              value={city}
              onChange={handleChange}
            />
          </form>
        </div>

        {currentWeather && (
          <div>
            <h2>{currentWeather.name}</h2>
            <h3 className="info info__temp">
              {Math.round(currentWeather.main.temp)}
              &#176;C
            </h3>
            <ul>
              <li>{`High/Low: ${currentWeather.main.temp_max}/${currentWeather.main.temp_min}`}</li>
              <li>{`Pressure: ${currentWeather.main.pressure} mb`}</li>
              <li>{`Humidity: ${currentWeather.main.humidity}%`}</li>
              <li>{`Visibility: ${currentWeather.visibility} m`}</li>
              <li>{`Wind: ${currentWeather.wind.speed} km/h`}</li>
            </ul>

          </div>
        )}
      </main>
    </div>
  );
};
