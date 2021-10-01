import React from 'react';

type Props = {
  currentWeather: WeatherAPI,
  language: string,
  metric: string,
};

export const WeatherList: React.FC<Props> = (props) => {
  const { currentWeather, language, metric } = props;

  const {
    main,
    name,
    wind,
    weather,
    sys,
  } = currentWeather;

  const {
    temp,
    temp_min,
    temp_max,
    pressure,
    humidity,
  } = main;

  const max = Math.round(temp_max);
  const min = Math.round(temp_min);
  const { description, icon } = weather[0];

  return (
    <>
      <div className="weather__info">
        <h2 className="weather__city">
          {`${name}, ${sys.country}`}
        </h2>
        <h3 className="weather__temp">
          {Math.round(temp)}
          {(metric === 'standard') && 'K'}
          {(metric === 'metric') && <span>&#176;C</span>}
          {(metric === 'imperial') && <span>&#176;F</span>}
        </h3>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
          className="weather__image"
        />
        <h3 className="weather__description">{`${description.toUpperCase()}`}</h3>
      </div>
      <ul className="weather__list">
        <li className="weather__item">
          {(language === 'ru') && 'Макс/Мин: '}
          {(language === 'ua') && 'Макс/Мін: '}
          {(language === 'en') && 'High/Low: '}
          {max}
          {(metric === 'standard') && 'K'}
          {(metric === 'metric') && <span>&#176;C</span>}
          {(metric === 'imperial') && <span>&#176;F</span>}
          /
          {min}
          {(metric === 'standard') && 'K'}
          {(metric === 'metric') && <span>&#176;C</span>}
          {(metric === 'imperial') && <span>&#176;F</span>}
        </li>
        <li className="weather__item">
          {(language === 'ru') && 'Давление: '}
          {(language === 'ua') && 'Тиск: '}
          {(language === 'en') && 'Pressure: '}
          {pressure}
          {(language === 'en') ? ' hPa' : ' гПа'}
        </li>
        <li className="weather__item">
          {(language === 'ru') && 'Влажность: '}
          {(language === 'ua') && 'Вологість: '}
          {(language === 'en') && 'Humidity: '}
          {`${humidity}%`}
        </li>
        <li className="weather__item">
          {(language === 'ru') && 'Сила ветра: '}
          {(language === 'ua') && 'Сила вітру: '}
          {(language === 'en') && 'Wind: '}
          {wind.speed}
          {((metric === 'standard') || (metric === 'metric'))
            && (language === 'ru' || (language === 'ua'))
            && ' м/сек'}
          {((metric === 'standard') || (metric === 'metric'))
            && (language === 'en')
            && ' m/sec'}

          {(metric === 'imperial')
            && (language === 'ru')
            && ' миля/ч'}

          {(metric === 'imperial')
            && (language === 'ua')
            && ' миля/год'}

          {(metric === 'imperial')
            && (language === 'en')
            && ' mph'}
        </li>
      </ul>
    </>
  );
};
