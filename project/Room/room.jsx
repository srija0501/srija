// Hotels.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./room.css"; 

const Hotels = () => {
  const navigate = useNavigate();

  const hotels = [
    {
      id: 1,
      name: "Hotel Berlin",
      description: "A beautiful hotel in the heart of Berlin.",
      image: require("../../src/images/ht1.jpg"),
      rating: 4.5,
    },
    {
      id: 2,
      name: "Hotel Madrid",
      description: "A stunning hotel located in Madrid.",
      image: require("../../src/images/im1.jpg"),
      rating: 4.2,
    },
    
    {
      id: 3,
      name: "Hotel London",
      description: "Experience luxury in London.",
      image: "https://i.pinimg.com/236x/07/7e/f9/077ef9d7c5649120384fc65978ec405a.jpg",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Hotel Paris",
      description: "Enjoy your stay in the city of love.",
      image: "https://i.pinimg.com/236x/f1/ba/82/f1ba82ad7808a47b58fc207f1ed54169.jpg",
      rating: 4.6,
    },
  ];

  const handleBooking = (hotelId) => {
    navigate(`/hotels/${hotelId}`); // Navigate to the HotelDetails page
  };

  return (
    <div className="hotels-container container">
      <h1 className="homeTitle mb-3">Available Hotels</h1>
      <div className="hotels-grid row">
        {hotels.map((hotel) => (
          <div className="hotel-card col-md-6 col-lg-3 col-6" key={hotel.id}>
            <img src={hotel.image} alt={hotel.name} className="hotel-img img-fluid" />
            <div className="hotel-info">
              <h2>{hotel.name}</h2>
              <div className="hotel-rating">Rating: {hotel.rating} ⭐</div>
              <button
                className="booking-btn"
                onClick={() => handleBooking(hotel.id)} // Navigate to HotelDetails
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
