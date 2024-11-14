import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  // Load user and bookings from localStorage when the app initializes
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const savedBookings = JSON.parse(localStorage.getItem("bookings"));

    if (savedUser) setUser(savedUser);
    if (savedBookings) setBookings(savedBookings || []);
  }, []);

  // Store user and bookings to localStorage on every change
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [user, bookings]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setBookings([]);
    localStorage.removeItem("user");
    localStorage.removeItem("bookings");
  };

  return (
    <AuthContext.Provider value={{ user, bookings, setBookings, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
