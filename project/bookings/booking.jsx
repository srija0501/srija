import React, { useEffect, useState } from "react";
import axios from "axios";
import "./booking.css"; // CSS file

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);
  const [editingBooking, setEditingBooking] = useState(null); // Track editing
  const [updatedDetails, setUpdatedDetails] = useState({}); // Store input values

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/booking`);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching booking details:", error);
      }
    };
    fetchBookings();
  }, []);

  const handleDelete = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:3001/booking/${bookingId}`);
      setBookings(bookings.filter((booking) => booking.id !== bookingId));
      alert("Booking deleted successfully.");
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const handleUpdateClick = (booking) => {
    setEditingBooking(booking);
    setUpdatedDetails(booking);
  };

  const handleInputChange = (field, value) => {
    setUpdatedDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleUserDetailsChange = (field, value) => {
    setUpdatedDetails((prev) => ({
      ...prev,
      userDetails: { ...prev.userDetails, [field]: value },
    }));
  };

  const handleSaveUpdate = async () => {
    try {
      const { id } = editingBooking;
      await axios.put(`http://localhost:3001/booking/${id}`, updatedDetails);
      setBookings(
        bookings.map((booking) =>
          booking.id === id ? { ...booking, ...updatedDetails } : booking
        )
      );
      setEditingBooking(null);
      alert("Booking updated successfully.");
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-details-container">
        <h2>Booking Details</h2>

        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <ul>
            {bookings.map((booking) => (
              <li key={booking.id}>
                {editingBooking?.id === booking.id ? (
                  <form className="update-form" onSubmit={(e) => e.preventDefault()}>
                    <h3>Update Booking</h3>
                    <label>
                      Hotel Name:
                      <input
                        type="text"
                        value={updatedDetails.hotelName}
                        onChange={(e) => handleInputChange("hotelName", e.target.value)}
                      />
                    </label>
                    <label>
                      Name:
                      <input
                        type="text"
                        value={updatedDetails.userDetails?.name || ""}
                        onChange={(e) =>
                          handleUserDetailsChange("name", e.target.value)
                        }
                      />
                    </label>
                    <label>
                      Address:
                      <input
                        type="text"
                        value={updatedDetails.userDetails?.address || ""}
                        onChange={(e) =>
                          handleUserDetailsChange("address", e.target.value)
                        }
                      />
                    </label>
                    <label>
                      Check-in Date:
                      <input
                        type="date"
                        value={updatedDetails.checkInDate}
                        onChange={(e) =>
                          handleInputChange("checkInDate", e.target.value)
                        }
                      />
                    </label>
                    <label>
                      Check-out Date:
                      <input
                        type="date"
                        value={updatedDetails.checkOutDate}
                        onChange={(e) =>
                          handleInputChange("checkOutDate", e.target.value)
                        }
                      />
                    </label>
                    <label>
                      Total Persons:
                      <input
                        type="number"
                        value={updatedDetails.totalPersons}
                        onChange={(e) =>
                          handleInputChange("totalPersons", e.target.value)
                        }
                      />
                    </label>
                    <label>
                      Total Price:
                      <input
                        type="number"
                        value={updatedDetails.totalPrice}
                        onChange={(e) =>
                          handleInputChange("totalPrice", e.target.value)
                        }
                      />
                    </label>
                    <label>
                      Payment Method:
                      <input
                        type="text"
                        value={updatedDetails.paymentMethod}
                        onChange={(e) =>
                          handleInputChange("paymentMethod", e.target.value)
                        }
                      />
                    </label>

                    <button className="save-btn" onClick={handleSaveUpdate}>
                      Save
                    </button>
                    <button
                      className="cancel-btn"
                      onClick={() => setEditingBooking(null)}
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <>
                    <h4>{booking.hotelName}</h4>
                    <p>Name: {booking.userDetails.name}</p>
                    <p>Address: {booking.userDetails.address}</p>
                    <p>Check-in: {booking.checkInDate}</p>
                    <p>Check-out: {booking.checkOutDate}</p>
                    <p>Total Persons: {booking.totalPersons}</p>
                    <p>Total Price: ${booking.totalPrice}</p>
                    <p>Payment Method: {booking.paymentMethod}</p>

                    <div className="booking-actions">
                      <button
                        className="update-btn"
                        onClick={() => handleUpdateClick(booking)}
                      >
                        Update
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(booking.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BookingDetails;
