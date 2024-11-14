import React, { useState, useContext } from "react";
import { Button, Box, Typography } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  // Validation Functions
  const isNameValid = (name) => /^[a-zA-Z\s]+$/.test(name); // Only letters and spaces
  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = (password) =>
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password); // At least one number, one special character, and 8+ chars

  const handleSignUp = () => {
    const isPasswordMatching = password === confirmPassword;

    setErrors({
      name: !isNameValid(name),
      email: !isEmailValid(email),
      password: !isPasswordValid(password),
      confirmPassword: !isPasswordMatching,
    });

    if (
      isNameValid(name) &&
      isEmailValid(email) &&
      isPasswordValid(password) &&
      isPasswordMatching
    ) {
      const userData = { username: name, bookings: [] };
      login(userData);
      alert("Registered Successfully");
      navigate("/");
    }
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.formContainer}>
        <Typography variant="h4" sx={styles.title}>
          Sign Up
        </Typography>

        {/* Name Field */}
        <div style={styles.inputWrapper}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          {errors.name && <span style={styles.errorText}>Enter a valid name (letters only)</span>}
        </div>

        {/* Email Field */}
        <div style={styles.inputWrapper}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          {errors.email && <p style={styles.errorText}>Enter a valid email address</p>}
        </div>

        {/* Password Field */}
        <div style={styles.inputWrapper}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          {errors.password && (
            <span style={styles.errorText}>
              Password must contain at least 8 characters, a number, and a special character
            </span>
          )}
        </div>

        {/* Confirm Password Field */}
        <div style={styles.inputWrapper}>
          <label style={styles.label}>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
          />
          {errors.confirmPassword && <span style={styles.errorText}>Passwords must match</span>}
        </div>

        {/* Sign Up Button */}
        <Button
          variant="contained"
          fullWidth
          sx={styles.signUpButton}
          onClick={handleSignUp}
        >
          Sign Up
        </Button>

        {/* Link to Login */}
        <span sx={styles.linkContainer}>
          Already have an account?{" "}
          <Link to="/login" style={styles.loginLink}>
            Login
          </Link>
        </span>
      </Box>
    </Box>
  );
}

export default SignUpPage;

// Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f7f7f7",
  },
  formContainer: {
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "40px",
    backgroundColor: "white",
    width: "400px",
    maxWidth: "90%",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#6a11cb",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
  },
  inputWrapper: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  errorText: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  },
  signUpButton: {
    backgroundColor: "#6a11cb",
    color: "white",
    marginTop: "20px",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#5a0fb7",
    },
  },
  linkContainer: {
    textAlign: "center",
    marginTop: "15px",
  },
  loginLink: {
    color: "#6a11cb",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
