import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PremiumDialog from "./PremiumDialog";
import SettingsDialog from "./SettingsDialog";
import BioItem from "./BioItem";
import { getBio } from "../utilities/Bios/bios-service";
import FriendsDialog from "./FriendsDialog";

export default function ProfilePicture({
  user,
  setUser,
  friendsList,
  setFriendsList,
  setRecommendationList,
  setFeedList,
}) {
  const [premiumOpen, setPremiumOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [friendsOpen, setFriendsOpen] = useState(false);
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

  const handleFriendsClick = (evt) => {
    evt.preventDefault();
    setFriendsOpen(true);
  };

  const handleFriendsClose = () => {
    setFriendsOpen(false);
  };

  useEffect(() => {
    (async function () {
      const response = await getBio();
      if (response) {
        setBio(response);
        setBioData(response);
      } else {
        setBio({
          type: "undisclosed",
          genre: "undisclosed",
          body: "yet to be updated",
        });
        setBioData({
          type: "undisclosed",
          genre: "undisclosed",
          body: "yet to be updated",
        });
      }
    })();
  }, [user]);

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
          margin: "30px",
        }}
      >
        <img
          src={`${user.profilepic}`}
          alt="profile"
          height="150px"
          border="10px solid #FEDE00"
        />
        <Typography
          variable="h1"
          component="h1"
          align="center"
          fontWeight="bold"
          fontStyle="italic"
        >
          {`@${user.display_name}`}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ m: 1 }}
          onClick={(evt) => handlePremiumClick(evt)}
        >
          Premium
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ m: 1 }}
          onClick={(evt) => handleSettingsClick(evt)}
        >
          Settings
        </Button>
        {user?.isPremium ? (
          <>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ m: 1 }}
              onClick={(evt) => handleFriendsClick(evt)}
            >
              My Friends
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              color="error"
              size="small"
              sx={{ m: 1 }}
            >
              No premium, No Friends
            </Button>
          </>
        )}
        <BioItem bio={bio} />
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
          setBio={setBio}
          bioData={bioData}
          bio={bio}
          setBioData={setBioData}
        />
        <FriendsDialog
          user={user}
          friendsOpen={friendsOpen}
          handleFriendsClose={handleFriendsClose}
          friendsList={friendsList}
          setFriendsList={setFriendsList}
          setRecommendationList={setRecommendationList}
          setFeedList={setFeedList}
        />
      </Box>
    </>
  );
}
