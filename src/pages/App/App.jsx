import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ProfilePage from "../Profile/ProfilePage";
import AuthPage from "../Auth/AuthPage";

function App() {
  const [user, setUser] = useState(false);

  const handleClick = () => {
    setUser(!user);
  };

  return (
    <>
      {/* <header>{user?.name}</header> */}
      <Typography variant="h6" component="h1" sx={{ mb: 2 }}>
        App is running
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
        <AuthPage setUser={setUser} />
      )}
      <div>
        <Button
          variant="contained"
          color="primary"
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
