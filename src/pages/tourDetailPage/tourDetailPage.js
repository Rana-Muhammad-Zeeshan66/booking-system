import {
  CheckCircleFilled,
  ClockCircleOutlined,
  DollarCircleOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import "./tourDetailPage.scss";
import { Button, Divider } from "antd";
import TemperatureData from "../../components/temperatureData/TemperatureData";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TourDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const allReduxTours = useSelector((state) => state.allTours);
  const [tourDetail, setTourDetail] = useState(null);

  useEffect(() => {
    if (location.state.tourId) {
      setTourDetail(
        allReduxTours.find((tour) => tour.tourId === location.state.tourId)
      );
    }
  }, [location, allReduxTours]);

  return (
    <>
      {tourDetail && (
        <div className="tour-detail-container">
          <section className="tour-intro-section">
            <h1 className="detail-heading">{tourDetail.name}</h1>

            <div className="tour-meta">
              <div className="tour-meta-container">
                <div className="tour-meta-item">
                  <PushpinOutlined />
                  <span>{tourDetail.city}</span>
                </div>

                <div className="tour-meta-item">
                  <DollarCircleOutlined />
                  <span>{tourDetail.price}</span>
                </div>

                <div className="tour-meta-item">
                  <ClockCircleOutlined />
                  <span>{tourDetail.duration}</span>
                </div>
              </div>
            </div>

            <div className="tour-imgs-grid">
              <div className="left-side">
                <img
                  alt="example"
                  src={tourDetail.mainImg}
                  className="tour-img-left"
                />
              </div>

              <div className="right-side">
                {new Array(4).fill(null).map((_, index) => (
                  <img
                    key={index}
                    alt="example"
                    src="assets/tours/tour-4.png"
                    className="tour-img-right"
                  />
                ))}
              </div>
            </div>

            <div className="tour-description">
              <p className="description-paragraph">{tourDetail.description}</p>

              <p className="description-paragraph">
                Founded in 1984 as the Center for the Fine Arts, it became known
                as the Miami Art Museum from 1996 until it was renamed in 2013
                upon the opening its new building designed by Herzog & de Meuron
                at 1103 Biscayne Boulevard.
              </p>

              <p className="description-paragraph">
                PAMM, along with the $275 million Phillip and Patricia Frost
                Museum of Science and a city park which are being built in the
                area with completion in 2017, is part of the 20-acre Museum
                Park.
              </p>
            </div>
          </section>

          <section className="whats-included">
            <h3 className="heading">What&apos;s included</h3>

            <div className="included-things">
              <div className="things-wrapper">
                <div className="thing-heading">Destination</div>
                <div className="thing-detail">Miami</div>
              </div>

              <Divider />

              <div className="things-wrapper">
                <div className="thing-heading">Departure Location</div>
                <div className="thing-detail">
                  2000 Brush St, Detroit, MI 48226, United States
                </div>
              </div>

              <Divider />

              <div className="things-wrapper">
                <div className="thing-heading">Return</div>
                <div className="thing-detail">7:00 PM on Day 3</div>
              </div>

              <Divider />

              <div className="things-wrapper">
                <div className="thing-heading">Return</div>

                <div className="thing-detail-checks-container">
                  <div className="thing-detail-checks">
                    <CheckCircleFilled className="check-icon" />

                    <div>Basic first aid kit</div>
                  </div>

                  <div className="thing-detail-checks">
                    <CheckCircleFilled className="check-icon" />

                    <div>Basic first aid kit</div>
                  </div>
                  <div className="thing-detail-checks">
                    <CheckCircleFilled className="check-icon" />

                    <div>Basic first aid kit</div>
                  </div>
                  <div className="thing-detail-checks">
                    <CheckCircleFilled className="check-icon" />

                    <div>Basic first aid kit</div>
                  </div>
                  <div className="thing-detail-checks">
                    <CheckCircleFilled className="check-icon" />

                    <div>Basic first aid kit</div>
                  </div>
                  <div className="thing-detail-checks">
                    <CheckCircleFilled className="check-icon" />

                    <div>Basic first aid kit</div>
                  </div>
                </div>
              </div>

              <Divider />
            </div>
          </section>

          <section className="itenarary-section">
            <h3 className="heading">Itinerary Schedule</h3>

            <TemperatureData />

            <div className="detail-btn-container">
              {tourDetail.bookedBy === 2 ? (
                <Button
                  type="primary"
                  className="detail-book-now-btn"
                  onClick={() =>
                    navigate("/confirm-tour", {
                      state: { tour: tourDetail, isUpdate: true },
                    })
                  }
                >
                  Update
                </Button>
              ) : (
                <Button
                  type="primary"
                  className="detail-book-now-btn"
                  onClick={() =>
                    navigate("/confirm-tour", {
                      state: { tour: tourDetail, isUpdate: false },
                    })
                  }
                >
                  Book Now
                </Button>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default TourDetailPage;
