import React, { useState, useContext } from "react";
import { Button, Typography, Box, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [role, setRole] = useState(null); // Track the selected role
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: false, password: false });
  const [isRoleDialogOpen, setRoleDialogOpen] = useState(true); // Open role dialog initially

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Hardcoded admin credentials
  const ADMIN_USERNAME = "srija";
  const ADMIN_PASSWORD = "12345678@00";

  const isUsernameValid = (username) => /^[a-zA-Z0-9]+$/.test(username); // Alphanumeric only  
  const isPasswordValid = (password) =>
    /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/.test(password); // At least one number, one special char, min 6 chars

  const handleLogin = () => {
    setErrors({
      username: !isUsernameValid(username),
      password: !isPasswordValid(password),
    });

    // Check if the role is admin and validate the credentials
    if (
      role === "admin" &&
      (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD)
    ) {
      alert("Invalid username or password. Redirecting to home page.");
      navigate("/"); // Redirect to the home page
      return;
    }

    // For valid admin credentials or user login, proceed with login
    if (isUsernameValid(username) && isPasswordValid(password)) {
      const userData = { username, role, bookings: [] }; // Include role in userData
      login(userData);
      alert(`${role} Login Successful`);
      navigate(role === "admin" ? "/" : "/");
    }
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole); // Store the selected role
    setRoleDialogOpen(false); // Close the role selection dialog
  };

  return (
    <Box sx={styles.container}>
      {/* Role Selection Dialog */}
      <Dialog open={isRoleDialogOpen}>
        <DialogTitle>Select Login Role</DialogTitle>
        <DialogActions>
          <Button onClick={() => handleRoleSelect("admin")} variant="contained" color="primary">
            Admin Login
          </Button>
          <Button onClick={() => handleRoleSelect("user")} variant="contained" color="secondary">
            User Login
          </Button>
        </DialogActions>
      </Dialog>

      {/* Show Login Form Only if Role is Selected */}
      {role && (
        <Box sx={styles.card}>
          <Typography variant="h4" sx={styles.title}>
            {role === "admin" ? "Admin Login" : "User Login"}
          </Typography>

          {/* Username Input */}
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
            {errors.username && (
              <p style={styles.errorText}>
                Username must be alphanumeric (no spaces or special characters).
              </p>
            )}
          </div>

          {/* Password Input */}
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            {errors.password && (
              <p style={styles.errorText}>
                Password must be at least 6 characters, include a number, and a special character.
              </p>
            )}
          </div>

          {/* Login Button */}
          <Button
            variant="contained"
            fullWidth
            sx={styles.loginButton}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default LoginPage;

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f5",
  },
  card: {
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    width: "350px",
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
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  errorText: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  },
  loginButton: {
    backgroundColor: "#6a11cb",
    color: "white",
    marginTop: "20px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#5a0fb7",
    },
  },
};
