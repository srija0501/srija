{/*

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reserve = ({ hotelId }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        // Replace this URL with your actual API endpoint
        const response = await axios.put(`http://localhost:3000/Users`);
        setRooms(response.data.rooms);
        console.log("Error");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [hotelId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="reserve-container">
      <h2>Available Rooms</h2>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div className="room-card" key={room.id}>
            <img src={room.image} alt={room.type} className="room-img" />
            <div className="room-info">
              <h3>{room.type}</h3>
              <p>Price: {room.price}</p>
              <p>{room.available ? 'Available' : 'Not Available'}</p>
              <button className="reserve-btn" disabled={!room.available}>Reserve</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reserve;

*/}