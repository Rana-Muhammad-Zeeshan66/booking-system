import React from "react";

import LocationCard from "../locationCard/LocationCard";

import "./cardData.scss";

const CardData = ({ tours }) => {
  return (
    <div className="card-data-container">
      {tours?.map((tour, index) => (
        <React.Fragment key={index}>
          <LocationCard tour={tour} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default CardData;
