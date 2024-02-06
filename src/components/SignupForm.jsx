import { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { userSignup } from "../utilities/Users/users-service";

export default function SignupForm({ setUser, user }) {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [displayNameError, setDisplayNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(false);
  const [signupFormData, setSignupFormData] = useState({
    first_name: "",
    last_name: "",
    display_name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validation logic goes here
    // For simplicity, I'm just checking if fields are not empty
    if (!firstName.trim()) {
      setFirstNameError(true);
      return;
    }
    if (!lastName.trim()) {
      setLastNameError(true);
      return;
    }
    if (!displayName.trim()) {
      setDisplayNameError(true);
      return;
    }
    if (!email.trim()) {
      setEmailError(true);
      return;
    }
    if (!password.trim()) {
      setPasswordError(true);
      return;
    }
    setSignupFormData({
      first_name: firstName,
      last_name: lastName,
      display_name: displayName,
      email: email,
      password: password,
    });
    try {
      console.log("handlesubmit running");
      const user = await userSignup(signupFormData);
      console.log("handlesubmit ran");
      setUser(user);
      navigate("/");
    } catch {
      // Error validation #1
      setError("The email or display name already in use. Please try again.");
    }
  };

  return (
    <Container sx={{ width: 350 }}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <TextField
          label="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          fullWidth
          value={firstName}
          error={firstNameError}
          sx={{ mb: 3 }}
        />
        <TextField
          label="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          fullWidth
          value={lastName}
          error={lastNameError}
          sx={{ mb: 3 }}
        />
        <TextField
          label="Display Name"
          onChange={(e) => setDisplayName(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          fullWidth
          value={displayName}
          error={displayNameError}
          sx={{ mb: 3 }}
        />
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          fullWidth
          value={email}
          error={emailError}
          sx={{ mb: 3 }}
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          fullWidth
          value={password}
          error={passwordError}
          sx={{ mb: 3 }}
        />
        <Button variant="outlined" color="primary" type="submit">
          Sign Up
        </Button>
      </form>
      <small>
        Already have an account? <Link to="/">Login here</Link>
      </small>
    </Container>
  );
}
