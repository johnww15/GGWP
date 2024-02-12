import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ProfilePage from "../Profile/ProfilePage";
import AuthPage from "../Auth/AuthPage";
import SignupPage from "../Signup/SignupPage";

function App() {
  const [user, setUser] = useState(false);

  const handleClick = () => {
    setUser(!user);
  };

  // console.log(user);
  return (
    <>
      <Typography variant="p" component="p" sx={{ mb: 2 }}>
        App is running with id: {user?._id}
      </Typography>
      {user ? (
        <>
          <div className="flex">
            <Routes>
              <Route path="/" element={<ProfilePage user={user} />} />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <div className="flex">
            <Routes>
              <Route
                path="/login"
                element={<AuthPage setUser={setUser} user={user} />}
              />
              <Route
                path="/signup"
                element={<SignupPage setUser={setUser} user={user} />}
              />
            </Routes>
          </div>
        </>
      )}
      <div>
        <Button
          variant="contained"
          color="secondary"
          sx={{ ml: 2 }}
          onClick={handleClick}
        >
          Tmp button to toggle setUser state
        </Button>
      </div>
    </>
  );
}

export default App;
