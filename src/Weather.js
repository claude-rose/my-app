import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Footer from "./Footer";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function handleResponse(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  let apiKey = `677a0d74bb153df8022c5d432026b13a`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);

  return (
    <div className="Weather">
      <div className="card main-card">
        <div className="card-body">
          <div className="row">
            <div className="col-3 border-end todays-temp">
              {description}
              <div className="temperature">{temperature}°</div>
            </div>
            <div className="col">
              <ul className="list-info">
                <li>
                  <i className="far fa-moon"></i>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{props.city}</span>
                </li>
                <li>Updated: now</li>
                <li>
                  Wind: {wind}km/h
                  <i className="fas fa-wind"></i> Humidity: {humidity}%
                </li>
              </ul>
            </div>
            <div className="col-3">
              <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="sunny"
                width="100%"
                className="weather-symbol"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
