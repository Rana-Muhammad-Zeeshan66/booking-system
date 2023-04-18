import React from "react";
import TemperatureCard from "../temperatureCard/TemperatureCard";

import "./temperatureData.scss";
const TemperatureData = () => {
  return (
    <div className="temperature-data-container">
      <TemperatureCard />
      <TemperatureCard />
      <TemperatureCard />
    </div>
  );
};

export default TemperatureData;
