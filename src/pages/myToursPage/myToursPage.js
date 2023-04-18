import { useSelector } from "react-redux";
import React from "react";

import CardData from "../../components/cardData/CardData";

import "./myToursPage.scss";
import { Empty } from "antd";

const MyToursPage = () => {
  const myReduxTours = useSelector((state) => state.myTours);

  return (
    <div className="my-tours-page-container">
      <div className="heading">
        <h3>My Tours</h3>
      </div>

      {myReduxTours.length > 0 ? (
        <CardData tours={myReduxTours} />
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={<span>You Have Not Booked Any Tours</span>}
        />
      )}
    </div>
  );
};

export default MyToursPage;
