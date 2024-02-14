import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import PremiumDialog from "./PremiumDialog";
import SettingsDialog from "./SettingsDialog";
import BioItem from "./BioItem";
import { getBio } from "../utilities/Bios/bios-service";

export default function ProfilePicture({ user, setUser }) {
  const [premiumOpen, setPremiumOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [bio, setBio] = useState({
    type: "undisclosed",
    genre: "undisclosed",
    body: "yet to be updated",
  });
  const [bioData, setBioData] = useState(bio);

  const handlePremiumClick = (evt) => {
    evt.preventDefault();
    setPremiumOpen(true);
  };

  const handlePremiumClose = () => {
    setPremiumOpen(false);
  };

  const handleSettingsClick = (evt) => {
    evt.preventDefault();
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  useEffect(() => {
    (async function () {
      const response = await getBio();
      setBio(response);
      setBioData(response);
      console.log("getBio response", response);
    })();
  }, []);

  return (
    <>
      <Box
        sx={{
          border: "primary",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          justifyContent: "center",
          width: "50%",
        }}
      >
        <img src={`${user.profilepic}`} alt="profile" />
        <Button
          variant="outlined"
          color="primary"
          sx={{ m: 1 }}
          onClick={(evt) => handlePremiumClick(evt)}
        >
          Premium
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ m: 1 }}
          onClick={(evt) => handleSettingsClick(evt)}
        >
          Settings
        </Button>
        <BioItem user={user} bio={bio} />
        <PremiumDialog
          user={user}
          premiumOpen={premiumOpen}
          handlePremiumClose={handlePremiumClose}
          setUser={setUser}
        />
        <SettingsDialog
          user={user}
          settingsOpen={settingsOpen}
          handleSettingsClose={handleSettingsClose}
          bio={bio}
          setBio={setBio}
          bioData={bioData}
          setBioData={setBioData}
        />
      </Box>
    </>
  );
}
