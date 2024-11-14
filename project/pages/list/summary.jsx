import React from "react";
import "./summary.css";

import { useLocation, useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const { state } = useLocation(); // Access the passed state
  const navigate = useNavigate();

  if (!state) return <div>No order summary available.</div>; // Fallback if state is missing

  const { orderSummary } = state;

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <p><strong>Hotel: {orderSummary.hotel}</strong></p>
      <p><strong>Name: {orderSummary.userDetails.name}</strong></p>
      <p><strong>Check-in:{orderSummary.checkInDate}</strong></p>
      <p><strong>Check-out: {orderSummary.checkOutDate}</strong> </p>
      <p><strong>Total Price: ${orderSummary.totalPrice}</strong> </p>
      <p><strong>Payment Method: {orderSummary.paymentMethod}</strong> </p>

      <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
        Close
      </button>
    </div>
  );
};

export default OrderSummary;
