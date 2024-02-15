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
      return;
    }
    const response = await premiumSwitch(submitType);
    if (response.isPremium) {
      const friendsResponse = await createFriendList(response);
      console.log("friendsResponse", friendsResponse);
    }
    console.log("response", response);
    setUser(response);
    handleClose();
    return;
  };

  return (
    <>
      <Dialog onClose={handleClose} open={premiumOpen} fullWidth>
        <DialogTitle align="center">Want to be a premium member?</DialogTitle>
        {user?.isPremium ? (
          <>
            <Typography variant="p" component="p" align="center">
              Currently you{" "}
              <b>
                <u>ARE</u>
              </b>{" "}
              a premium user
            </Typography>
          </>
        ) : (
          <Typography variant="p" component="p" align="center">
            Currently you{" "}
            <b>
              <u>ARE NOT</u>
            </b>{" "}
            a premium user
          </Typography>
        )}
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
