import React from "react";
import "./searchItem.scss";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SearchItem = ({ item, date }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBookingClick = () => {
    console.log("Navigating to hotel with ID:", item.id);
    navigate(`/hotels/${item.id}`); // Ensure item.id is the correct hotel ID
  };

  return (
    <div className="searchItem">
      <img src={item.image} alt={item.name} className="searchItemImage" />
      <div className="searchItemDetails">
        <h2 className="searchItemName">{item.name}</h2>
        <span className="contains">{item.description}</span>
        <span className="searchItemPrice">${item.cheapestPrice} per night</span>
        <span className="searchItemDates">
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
        </span>
        {/* Displaying room images */}
      
      </div>
      <button className="searchItemButton" onClick={handleBookingClick}>
        Book Now
      </button>
    </div>
  );
};

export default SearchItem;
