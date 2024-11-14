import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
  const { user, bookings } = useContext(AuthContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Profile</h2>
      {user ? (
        <>
          <h3>Username: {user.username}</h3>
          <h4>Bookings:</h4>
          {bookings.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            <ul>
              {bookings.map((booking, index) => (
                <li key={index}>{booking.details}</li> // Customize as per your booking structure
              ))}
            </ul>
          )}
        </>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
};

export default Profile;
