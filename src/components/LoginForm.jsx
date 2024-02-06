import { useState } from "react";
import { TextField, Button } from "@mui/material";
import Container from "@mui/system/Container";
import { Link, useNavigate } from "react-router-dom";

import {userLogin} from "../utilities/Users/users-service";

export default function LoginForm({ setUser, user }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }

    if (email && password) {
      setLoginData((loginData.email = email), (loginData.password = password));
      try {
        const user = await userLogin(loginData.email, loginData.password);
        setUser(user);
        navigate("/");
      } catch {
    // User-error validation #1
      setError(
        "The email and password you specified are invalid. Please try again."
      );
      }
    }
  };

  // Might use for sign up button
  // const handleClick = () => {
  //     console.log("loginform handleclick running");
  //   };

  return (
    <Container sx={{ width: 350 }}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button variant="outlined" color="primary" type="submit">
          Login
        </Button>
      </form>
      <small>
        Need an account? <Link to="/">Register here</Link>
      </small>
    </Container>
  );
}
