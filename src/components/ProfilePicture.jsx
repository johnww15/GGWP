import { Box, Button } from "@mui/material";
import { useState } from "react";
import PremiumDialog from "./PremiumDialog";

export default function ProfilePicture({ user, setUser }) {
  const [premiumOpen, setPremiumOpen] = useState(false);

  const handlePremiumClick = (evt) => {
    evt.preventDefault();
    setPremiumOpen(true);
  };

  const handlePremiumClose = () => {
    setPremiumOpen(false);
  };

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
        <PremiumDialog
          user={user}
          premiumOpen={premiumOpen}
          handlePremiumClose={handlePremiumClose}
          setUser={setUser}
        />
      </Box>
    </>
  );
}
