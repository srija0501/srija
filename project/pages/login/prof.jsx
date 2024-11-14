// src/pages/Profile/Profile.js
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Typography, Card, CardContent } from "@mui/material";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ margin: "50px" }}>
      <Card>
        <CardContent>
          <Typography variant="h4">Profile</Typography>
          <Typography variant="h6">Username: {user.username}</Typography>
          <Typography>Email: {user.email}</Typography>

          <Typography variant="h5" style={{ marginTop: "20px" }}>
            Booking Details:
          </Typography>
          {user.bookings.length > 0 ? (
            user.bookings.map((booking, index) => (
              <Typography key={index}>
                {booking.hotel} in {booking.country} - {booking.status}
              </Typography>
            ))
          ) : (
            <Typography>No bookings found.</Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
