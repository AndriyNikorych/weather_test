import React from 'react';

type Props = {
  submit: (event: React.FormEvent) => void,
  changeCity: (event: React.ChangeEvent<HTMLInputElement>) => void,
  selectedLanguage: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  selectedMetric: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  chooseCityMessage: string | undefined,
  city: string | undefined,
  language: string,
  metric: string,
};

export const Search: React.FC<Props> = (props) => {
  const {
    submit,
    chooseCityMessage,
    city,
    changeCity,
    language,
    selectedLanguage,
    metric,
    selectedMetric,
  } = props;

  return (
    <div className="search">
      <form
        className="search__form"
        onSubmit={submit}
      >
        <input
          type="text"
          className="search__field"
          placeholder={chooseCityMessage}
          value={city}
          onChange={changeCity}
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

  );
};
