import React from "react";

import { Card } from "antd";
import { AntCloudOutlined } from "@ant-design/icons";

import "./temperatureCard.scss";
const TemperatureCard = () => {
  return (
    <div className="temperature-card-container">
      <Card className="temperature-card">
        <div className="temp-header">
          <strong>Day 1</strong>
          <div>
            <AntCloudOutlined />
            <strong>18 C</strong>
          </div>
        </div>
        <ul>
          <li>Tours with American Sign Language</li>
          <li>Audio description group tours</li>
          <li>Large-print gallery notes</li>
          <li>Lunch Included.</li>
        </ul>
      </Card>
    </div>
  );
};

export default TemperatureCard;
