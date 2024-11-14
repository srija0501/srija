import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reserve = ({ hotelId }) => {
  const { data, loading, error, images } = useFetch(
    `https://thankful-bass-waders.cyclic.app/api/hotels/room/${hotelId}`
  );
  const [selectedRooms, setSelectedRooms] = useState([]);

  useEffect(() => {
    if (error) {
      toast.error("Failed to load hotel details. Please try again.");
    }
  }, [error]);

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = () => {
    if (selectedRooms.length === 0) {
      toast.error("Please select at least one room to reserve.");
      return;
    }
    toast.success("Reservation booked successfully!");
    console.log("Reserved Rooms:", selectedRooms);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data available.</p>;

  return (
    <div className="reserve">
      <ToastContainer autoClose={5000} />
      <h2>Hotel Details</h2>
      <h3>{data.hotelName}</h3>
      <p>{data.description}</p>
      <h4>Available Rooms:</h4>
      {data.rooms.map((room) => (
        <div key={room._id} className="room">
          <div className="room-info">
            <h5>{room.title}</h5>
            <p>Price: ${room.price}</p>
            <p>Max People: {room.maxPeople}</p>
            <label>
              <input
                type="checkbox"
                value={room._id}
                onChange={handleSelect}
              />
              Select Room
            </label>
          </div>
        </div>
      ))}
      <button onClick={handleClick} className="reserve-button">
        Reserve Now!
      </button>
    </div>
  );
};

export default Reserve;
