import {fetchWeatherByCoordinate, fetchWeatherByCity} from "../services/weather.service.js";

export async function getWeatherByCity(req, res) {
    let {cityName} = req.query;
    cityName = decodeURI(cityName);
    let weatherData = await fetchWeatherByCity(cityName);

    if (weatherData) {
        res.status(200).send(weatherData);
    } else {
        res.status(404).json({message:"Error get weather by City"});
        console.log("Error get weather by City");
    }
}

export async function getWeatherByCoordinate(req, res) {
    let {lat, lon} = req.query;
    let weatherData = await fetchWeatherByCoordinate(lat, lon);

    if (weatherData) {
        res.status(200).send(weatherData);
    } else {
        res.status(404).json({message:"Error get weather by Coordinate"});
        console.log("Error get weather by Coordinate");
    }
}
