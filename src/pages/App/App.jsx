import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Button from "@mui/material/Button";

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
      <h1>app is running</h1>
      {user ? (
        <>
          <div className="flex">
            <Routes>
              <Route path="/profile" element={<ProfilePage user={user} />} />
            </Routes>
          </div>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
      <div>
        <Button variant="contained" onClick={handleClick}>
          Tmp button to toggle setUser state
        </Button>
      </div>
    </>
  );
}

export default App;
