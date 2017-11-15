import axios from 'axios';

const API_KEY = '6adbc468c3ee935185c3456e535d28b4';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

export const FETCH_WEATHER = 'FETCH_WEATHER';

//action creator that is responsible for making API request
//to get weather data
export function fetchWeather(city) {
	//assume we are only using US cities
	const url = `${ROOT_URL}&q=${city},us&appid=${API_KEY}`;
	
	//axios returns a promise, so this waits
	const request = axios.get(url);

	//action always have to return an action
	//actions are an object that must have a type
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}