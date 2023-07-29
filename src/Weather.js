import React, { useState } from "react";

export default function Weather(props) {
  //useState always accepts one value which is our initial value, can be props.something or {} null or int or other
  let [temperature, setTemperature] = useState(props.temperature);
  let [unit, setUnit] = useState("Metric");
  let [humidity, setHumidity] = useState();
  function showFarehrenheit(event) {
    event.preventDefault();
    setUnit("Imperial");
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("Metric");
    setTemperature(props.temperature);
  }

  function showHumidity(event) {
    event.preventDefault();
    setHumidity(55);
  }

  return (
    <p>
      Weather in {props.city} is {temperature} ({unit}){" "}
      <a href="/" onClick={showCelsius}>
        °C
      </a>
      |{" "}
      <a href="/" onClick={showFarehrenheit}>
        °F
      </a>
      <br />
      <a href="/" onClick={showHumidity}>
        {" "}
        Show Humidity? Humidity is {humidity}
      </a>
    </p>
  );
}
