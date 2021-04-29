import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&appid=8ebdf159c6683c3f059160960b374aca`;

export function fetchWeatherByCity(cityName) {
    return fetch(`${url}&q=${cityName}`)
        .then( (res) => {
            const data = res.json();
            return data;
        })
}

export function fetchWeatherByCoordinate(lat, lon) {
    return fetch(`${url}&lat=${lat}&lon=${lon}`)
        .then( (res) => {
            const data = res.json();
            return data;
        })
}
