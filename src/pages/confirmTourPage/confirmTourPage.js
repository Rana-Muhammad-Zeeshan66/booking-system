import { Button, Form, Input, Select } from "antd";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { addTour } from "../../store";
import { useNavigate } from "react-router-dom";

import "./confirmTourPage.scss";

const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select>
      <Option value="1">+92</Option>
      <Option value="2">+1</Option>
    </Select>
  </Form.Item>
);

const ConfirmTourPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({});

  useState(() => {
    if (location.state.isUpdate) {
      setInitialValues({
        name: "random name",
        email: "random@email.com",
        phone: "121 - 121 - 121 - 1",
        prefix: "+1",
        adults: "2",
        children: "12",
        payment: "paypal",
      });
    }
  }, [location]);

  const onFormSubmit = (values) => {
    const formObj = {
      tourId: location.state.tour.tourId,
      name: location.state.tour.name,
      city: location.state.tour.city,
      description: location.state.tour.description,
      price: location.state.tour.price,
      duration: location.state.tour.duration,
      endDate: location.state.tour.endDate,
      startDate: location.state.tour.startDate,
      facilities: location.state.tour.facilities,
      bookedBy: 2,
      mainImg: location.state.tour.mainImg,
    };

    if (location.state.isUpdate) {
      navigate(-1);
    } else {
      dispatch(addTour(formObj));
      navigate("/my-tours");
    }
  };

  return (
    <section className="confirm-tour--container">
      <div className="layout--container">
        {/* LEFT SIDE */}

        <div className="left-side--container">
          <h1 className="heading">Confirm Your Booking</h1>

          <Form
            layout="vertical"
            className="form-style"
            onFinish={onFormSubmit}
            initialValues={initialValues}
          >
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "please enter your name",
                },
              ]}
              name="name"
              label="Name"
            >
              <Input />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "please provide an email",
                },
              ]}
              name="email"
              label="Email"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item
              name={"adults"}
              rules={[
                {
                  required: true,
                  message: "please provide number of adults",
                },
              ]}
              label="Numbers of Adults"
              style={{
                display: "inline-block",
                width: "calc(50% - 12px)",
              }}
            >
              <Input />
            </Form.Item>
            <span
              style={{
                display: "inline-block",
                width: "24px",
                lineHeight: "32px",
                textAlign: "center",
              }}
            ></span>
            <Form.Item
              name={"children"}
              rules={[
                {
                  required: true,
                  message: "please provide number of children",
                },
              ]}
              label="Numbers of Children"
              style={{
                display: "inline-block",
                width: "calc(50% - 12px)",
              }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="payment"
              label="payment"
              rules={[
                {
                  required: true,
                  message: "payment method required",
                },
              ]}
            >
              <Select placeholder="Payment Method">
                <Option value="Debit Card">Debit Card</Option>
                <Option value="Paypal">Paypal</Option>
              </Select>
            </Form.Item>

            <Button type="primary" htmlType="submit" className="submit-btn">
              Submit
            </Button>
          </Form>
        </div>

        {/* RIGHT SIDE */}
        <div className="form-img--container">
          <img
            src="assets/confirm-form/confirm-form.png"
            alt="add"
            className="form-img"
          />
        </div>
      </div>
    </section>
  );
};

export default ConfirmTourPage;
