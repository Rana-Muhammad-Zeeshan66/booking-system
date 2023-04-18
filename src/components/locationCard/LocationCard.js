import { Button, Card, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeTour } from "../../store";

import "./locationCard.scss";

import {
  ClockCircleOutlined,
  DeleteOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
const LocationCard = ({ tour }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cardHovered, setCardHovered] = useState(false);
  const [myBookedLocation, setMyBookedLocation] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isWarningModalOpen, setIswarningModalOpen] = useState(false);

  const days = 2;

  useEffect(() => {
    setMyBookedLocation(tour.bookedBy === 2);
  }, [tour]);

  const handleOkDelete = () => {
    dispatch(removeTour(tour.tourId));
    setIsDeleteModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const handleCancelWarning = () => {
    setIswarningModalOpen(false);
  };

  const deleteModal = () => {
    return (
      <Modal
        title="Delete Tour"
        open={isDeleteModalOpen}
        onOk={handleOkDelete}
        onCancel={handleCancelDelete}
        okText="Delete"
        cancelText="Cancel"
        // className="delete-tour-modal"
        // wrapClassName="modal-test"
        // getPopupContainer={(trigger) => trigger.parentNode}
        // getContainer={() => document.getElementById("delete-modal-test")}
      >
        <p>
          Are you sure you want to <strong>{tour.name}</strong> ?
        </p>
      </Modal>
    );
  };

  const warningModal = () => {
    return (
      <Modal
        title="Delete Tour"
        open={isWarningModalOpen}
        onCancel={handleCancelWarning}
        footer={
          <Button type="default" onClick={handleCancelWarning}>
            Cancel
          </Button>
        }
      >
        <p>
          You can not delete <strong>{tour.name}</strong> becase there are only{" "}
          <strong>3 days remaining</strong> until begining of this tour.
        </p>
      </Modal>
    );
  };

  const deleteTour = () => {
    if (days >= 3) {
      setIswarningModalOpen(true);
    } else {
      setIsDeleteModalOpen(true);
    }
  };

  return (
    <div className="location-card-container">
      <Card
        cover={<img alt="example" src={tour.mainImg} />}
        className="location-card-container-card"
        hoverable
        onMouseOver={() => setCardHovered(true)}
        onMouseOut={() => setCardHovered(false)}
      >
        <Meta title={tour.name} description={tour.description} />

        <div className="footer-card">
          {cardHovered && !myBookedLocation ? (
            <Button
              type="primary"
              className="view-detail-button"
              onClick={() =>
                navigate("/tour-detail", { state: { tourId: tour.tourId } })
              }
            >
              View Details
            </Button>
          ) : cardHovered && myBookedLocation ? (
            <div className="myBookedLocationCard-footer">
              <DeleteOutlined
                className="myBookedLocationCard-footer-icon"
                onClick={deleteTour}
              />

              <Button
                type="primary"
                className="myBookedLocationCard-footer-button"
                onClick={() =>
                  navigate("/tour-detail", { state: { tourId: tour.tourId } })
                }
              >
                Details
              </Button>

              <Button
                type="primary"
                className="myBookedLocationCard-footer-button"
                onClick={() =>
                  navigate("/confirm-tour", { state: { tour, isUpdate: true } })
                }
              >
                Update
              </Button>
            </div>
          ) : (
            <div className="footer-detail">
              <div className="footer-detail-element">
                <DollarCircleOutlined />
                <span>{tour.price}</span>
              </div>

              <div className="footer-detail-element">
                <ClockCircleOutlined />
                <span>{tour.duration}</span>
              </div>
            </div>
          )}
        </div>
      </Card>

      <div className="modal-test" id="delete-modal-test">
        {deleteModal()}
      </div>
      {warningModal()}
    </div>
  );
};

export default LocationCard;
