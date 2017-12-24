import axios from 'axios';

// Your OpenWeatherMap API ID key
const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';
// Your target ISO 3166 country code
const COUNTRY_CODE = 'ph';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},${COUNTRY_CODE}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
