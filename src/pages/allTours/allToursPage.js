import { AlignCenterOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useSelector } from "react-redux";
import React from "react";

import CardData from "../../components/cardData/CardData";

import "./allToursPage.scss";

const AllToursPage = () => {
  const allReduxTours = useSelector((state) => state.allTours);
  return (
    <div className="all-tours-container">
      <div className="filter-btn">
        <Button type="default" icon={<AlignCenterOutlined />}>
          Filters
        </Button>
      </div>
      <CardData tours={allReduxTours} />
    </div>
  );
};

export default AllToursPage;
