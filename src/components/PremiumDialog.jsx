import { Box, Button, Dialog, DialogTitle, Typography } from "@mui/material";
import { premiumSwitch } from "../utilities/Users/users-service";
import { createFriendList } from "../utilities/Friends/friends-service";

export default function PremiumDialog({
  user,
  setUser,
  premiumOpen,
  handlePremiumClose,
}) {
  const handleClose = () => {
    handlePremiumClose();
  };

  const handlePremiumClick = async (submitType, evt) => {
    console.log("buttonclicked", submitType);
    evt.preventDefault();
    if (submitType === user.isPremium) {
      handlePremiumClose();
    }
    const response = await premiumSwitch(submitType);

    if (response.isPremium === true) {
      const friendsResponse = await createFriendList(response);
      console.log("friendsResponse", friendsResponse);
    }
    setUser(response);
    handlePremiumClose();
  };

  return (
    <>
      <Dialog onClose={handleClose} open={premiumOpen} fullWidth>
        <DialogTitle align="center">Want to be a premium member?</DialogTitle>
        <Typography variant="p" component="p" align="center">
          Why not?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            color={user.isPremium ? "primary" : "secondary"}
            sx={{ m: 1, width: "20%" }}
            onClick={(evt) => handlePremiumClick(true, evt)}
          >
            yes
          </Button>
          <Button
            variant="contained"
            color={user.isPremium ? "secondary" : "primary"}
            sx={{ m: 1, width: "20%" }}
            onClick={(evt) => handlePremiumClick(false, evt)}
          >
            no
          </Button>
        </Box>
      </Dialog>
    </>
  );
}
