import {
  AlignCenterOutlined,
  CalendarOutlined,
  DollarCircleOutlined,
  DownOutlined,
  PushpinOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Card,
  Divider,
  Input,
  DatePicker,
  Space,
  Dropdown,
  Button,
  Empty,
} from "antd";

import { useState } from "react";
import moment from "moment/moment";

import { addSearch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import CardData from "../../components/cardData/CardData";

import "./landingPage.scss";

const { RangePicker } = DatePicker;

const items = [
  {
    key: "1",
    label: "$50 - $250",
    to: 50,
    from: 250,
  },
  {
    key: "2",
    label: "$250 - $500",
    to: 250,
    from: 500,
  },
  {
    key: "3",
    label: "$550 - $700",
    to: 550,
    from: 700,
  },
];

const LandingPage = () => {
  const dispatch = useDispatch();
  const allReduxTours = useSelector((state) => state.allTours);
  const searchReduxTours = useSelector((state) => state.search);
  const [searchByLocation, setSearchByLocation] = useState(null);
  const [searchByTime, setSearchByTime] = useState(null);
  const [searchByPrice, setSearchByPrice] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const onChangeDate = (e) => {
    if (e) {
      const to = moment(e[0].$d);
      const from = moment(e[1].$d);

      setSearchByTime({
        to: to.valueOf(),
        from: from.valueOf(),
      });
    }
  };

  const handlePrice = (e) => {
    const getPriceObj = items.filter((item) => item.key === e.key);

    setSearchByPrice({
      priceTo: getPriceObj[0].to,
      priceFrom: getPriceObj[0].from,
    });

    setSelectedPrice(getPriceObj[0].label);
  };

  const onSearchResult = () => {
    const temp = allReduxTours;
    let searchResult = [];

    temp.map((tour) => {
      if (searchByLocation) {
        if (tour.city.toLowerCase() === searchByLocation.toLowerCase()) {
          searchResult.push(tour);
        }

        if (searchResult.length > 0 && searchByTime) {
        }

        if (searchResult.length > 0 && searchByPrice) {
          const filterByPrice = searchResult.filter((tour1) => {
            return (
              tour1.priceStart >= searchByPrice.priceTo &&
              tour1.priceEnd <= searchByPrice.priceFrom
            );
          });

          searchResult = filterByPrice;
        }
      } else if (searchByTime) {
        if (
          tour.startDate >= searchByTime.to &&
          tour.startDate <= searchByTime.from
        ) {
          searchResult.push(tour);
        }
      } else if (searchByPrice) {
        if (
          tour.priceStart >= searchByPrice.priceTo &&
          tour.priceEnd <= searchByPrice.priceFrom
        ) {
          searchResult.push(tour);
        }
      }

      return searchResult;
    });

    dispatch(addSearch(searchResult));
  };

  return (
    <div className="landing-page">
      <section className="landing-page__hero">
        <div
          className="landing-page__hero-img"
          style={{
            backgroundImage: `url("assets/landing-page/landingpage-new.png")`,
          }}
        ></div>
      </section>

      <section className="landing-page__filter">
        <Card className="landing-page__filter-card">
          <div className="landing-page__filter-card__content">
            <div className="landing-page__filter-card__content-container">
              <PushpinOutlined className="filter-icon" />

              <div className="filter-detail">
                <strong className="filter-title">location</strong>

                <Input
                  placeholder="Where you want to go?"
                  className="loction-input"
                  onChange={(e) => setSearchByLocation(e.target.value)}
                />
              </div>
            </div>

            <Divider type="vertical" />

            <div className="landing-page__filter-card__content-container">
              <CalendarOutlined className="filter-icon" />

              <div className="filter-detail">
                <strong className="filter-title">Choose Date</strong>

                <RangePicker
                  className="filter-date-input"
                  onChange={(e) => onChangeDate(e)}
                />
              </div>
            </div>

            <Divider type="vertical" />

            <div className="landing-page__filter-card__content-container">
              <DollarCircleOutlined className="filter-icon" />

              <div className="filter-detail">
                <strong className="filter-title">Price Range</strong>

                <Dropdown
                  menu={{
                    items,
                    selectable: true,
                    defaultSelectedKeys: ["3"],
                    onClick: (e) => handlePrice(e),
                  }}
                  className="price-input"
                >
                  <Space>
                    {selectedPrice ? selectedPrice : "Choose Here"}

                    <DownOutlined />
                  </Space>
                </Dropdown>
              </div>
            </div>

            <Button
              type="primary"
              className="filter-search-icon"
              onClick={onSearchResult}
            >
              <SearchOutlined />
            </Button>

            <Button
              type="primary"
              className="filter-search-icon"
              onClick={() => {
                setSearchByLocation(null);
                setSearchByTime(null);
                setSearchByPrice(null);
                setSelectedPrice(null);
                dispatch(addSearch([]));
              }}
            >
              Reset
            </Button>
          </div>
        </Card>
      </section>

      <section className="popular-search">
        <h3 className="popular-search-heading">Popular Search</h3>

        <div className="popular-search-locations">
          <div className="popular-search-locations-grid">
            {/* {new Array(20).fill(null).map((_, index) => (
              ))} */}
            <Button
              onClick={() => {
                setSearchByLocation("Miami");
                onSearchResult();
              }}
            >
              Miami
            </Button>
            <Button
              onClick={() => {
                setSearchByLocation("Dubai");
                onSearchResult();
              }}
            >
              Dubai
            </Button>
            <Button
              onClick={() => {
                setSearchByLocation("Islamabad");
                onSearchResult();
              }}
            >
              Islamabad
            </Button>
          </div>
        </div>
      </section>

      <section className="search-results">
        <div className="search-results-header">
          <h4 className="search-results-header-heading">
            {searchReduxTours.length > 0 && (
              <>
                Top Destinations At{" "}
                {searchByLocation
                  ? searchReduxTours[0].city
                  : searchReduxTours[0].price}
              </>
            )}
          </h4>

          <Button type="default" icon={<AlignCenterOutlined />}>
            Filters
          </Button>
        </div>
        {searchReduxTours.length > 0 ? (
          <CardData tours={searchReduxTours} />
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={<span>No tours found</span>}
          />
        )}
      </section>
    </div>
  );
};

export default LandingPage;
