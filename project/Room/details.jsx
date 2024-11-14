import React, { useEffect, useState } from "react";
import axios from "axios";
import "./details.css";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const fetchHotels = async (source) => {
  const url = source === "users"
    ? "http://localhost:3000/Users"
    : "http://localhost:3000/countries";
  const response = await axios.get(url);
  return response.data;
};

const HotelDetails = () => {
  const { hotelId } = useParams();
  const location = useLocation();
  const [hotel, setHotel] = useState(null);
  const [roomCounts, setRoomCounts] = useState({});
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [checkInDate, setCheckInDate] = useState("");n
  const [checkOutDate, setCheckOutDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    idNumber: "",
    acPreference: "AC",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const determineSource = () => {
    if (location.pathname.includes("/users")) return "users";
    if (location.pathname.includes("/countries")) return "countries";
    return "users"; // Default source
  };

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const source = determineSource();
        const data = await fetchHotels(source);
        const foundHotel = data?.find((hotel) => String(hotel.id) === String(hotelId));
        if (foundHotel) {
          setHotel(foundHotel);
          const initialCounts = {};
          foundHotel.rooms.forEach((room) => {
            initialCounts[room.type] = 0;
          });
          setRoomCounts(initialCounts);
        } else {
          console.error(`Hotel not found with ID: ${hotelId}`);
        }
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };

    if (hotelId) fetchHotelData();
  }, [hotelId]);

  const calculateTotalPrice = () => {
    if (!hotel) return;
    let price = 0;
    Object.keys(roomCounts).forEach((roomType) => {
      const room = hotel.rooms.find((r) => r.type === roomType);
      if (room) {
        price += room.price * roomCounts[roomType];
      }
    });
    setTotalPrice(price);
  };

  const handleReserve = () => {
    if (!checkInDate || !checkOutDate) {
      alert("Please select check-in and check-out dates.");
      return;
    }
    setShowBookingForm(true);
  };

  const handleBook = async () => {
    if (!userDetails.name || !userDetails.address || !userDetails.idNumber || !paymentMethod) {
      alert("Please fill all details and select a payment method.");
      return;
    }
  
    const bookingDetails = {
      hotel: hotel.name,
      userDetails,
      checkInDate,
      checkOutDate,
      numberOfPersons,
      totalPrice,
      paymentMethod,
      roomCounts,
    };
  
    try {
      await axios.post(`http://localhost:3001/booking`, bookingDetails); // Save booking
      navigate("/order-summary", { state: { orderSummary: bookingDetails } }); // Navigate to summary
    } catch (error) {
      console.error("Error saving booking details:", error);
      alert("There was an error saving your booking. Please try again.");
    }
  };
  
  const changeRoomCount = (roomType, change) => {
    setRoomCounts((prevCounts) => {
      const newCount = Math.max(0, prevCounts[roomType] + change);
      return { ...prevCounts, [roomType]: newCount };
    });
    setTimeout(calculateTotalPrice, 0);
  };

  if (!hotel) return <div>Loading hotel details...</div>;

  return (
    <div className="hotel-details-container container">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        &larr; Back
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={hotel.image} alt={hotel.name} className="hotel-img img-fluid" />
          <h2>{hotel.name}</h2>
          <h5>{hotel.description}</h5>
          <div>Rating: {hotel.rating} ⭐</div>
        </div>

        <div className="col-md-6">
          <h3>Available Rooms</h3>
          <div className="room-types">
            {hotel.rooms.map((room, index) => (
              <div key={index} className="room-card">
                <img src={room.image} alt={room.type} className="room-img img-fluid" />
                <div className="room-info">
                  <h4>{room.type}</h4>
                  <h4>${room.price}/night</h4>
                  <div className="room-selection">
                    <button onClick={() => changeRoomCount(room.type, -1)}>-</button>
                    <input
                      type="number"
                      value={roomCounts[room.type] || 0}
                      readOnly
                      style={{ width: "60px", textAlign: "center", margin: "0 10px" }}
                    />
                    <button onClick={() => changeRoomCount(room.type, 1)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="date-selection mt-4">
            <label>Check-in Date:</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
            <br />
            <label>Check-out Date:</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>

          <div className="total-price mt-4">
            <h4>Total Price: ${totalPrice}</h4>
            <button className="btn btn-primary" onClick={handleReserve}>Reserve</button>
          </div>

          {showBookingForm && (
            <div className="user-details-form mt-4">
              <h4>Fill Your Details</h4>
              <label>
                Name:
                <input
                  type="text"
                  value={userDetails.name}
                  onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                  required
                />
              </label>
              <br />
              <label>
                Address:
                <input
                  type="text"
                  value={userDetails.address}
                  onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
                  required
                />
              </label>
              <br />
              <label>
                ID Number:
                <input
                  type="text"
                  value={userDetails.idNumber}
                  onChange={(e) => setUserDetails({ ...userDetails, idNumber: e.target.value })}
                  required
                />
              </label>
              <br />
              <label>
                AC/Non-AC:
                <select
                  value={userDetails.acPreference}
                  onChange={(e) => setUserDetails({ ...userDetails, acPreference: e.target.value })}
                >
                  <option value="AC">AC</option>
                  <option value="Non-AC">Non-AC</option>
                </select>
              </label>
              <br />

              <h5>Payment Method:</h5>
              <div>
                <input
                  type="radio"
                  value="Credit Card"
                  checked={paymentMethod === "Credit Card"}
                  onChange={() => setPaymentMethod("Credit Card")}
                /> Credit Card
                <input
                  type="radio"
                  value="Debit Card"
                  checked={paymentMethod === "Debit Card"}
                  onChange={() => setPaymentMethod("Debit Card")}
                /> Debit Card
                <input
                  type="radio"
                  value="Cash"
                  checked={paymentMethod === "Cash"}
                  onChange={() => setPaymentMethod("Cash")}
                /> Upi
              </div>
              <br />
              <button onClick={handleBook} className="btn btn-primary mt-2">Book Now</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
