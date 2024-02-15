import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
import FriendItem from "./FriendItem";

export default function FriendsDialog({
  friendsOpen,
  handleFriendsClose,
  friendsList,
  setFriendsList,
  setRecommendationList,
  setFeedList,
}) {
  const handleClose = () => {
    handleFriendsClose();
  };
  return (
    <>
      <Dialog onClose={handleClose} open={friendsOpen} fullWidth>
        <DialogTitle align="center">My Friends</DialogTitle>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
          }}
        >
          {friendsList?.map((friend, idx) => (
            <div key={idx}>
              <FriendItem
                friend={friend}
                setFriendsList={setFriendsList}
                setRecommendationList={setRecommendationList}
                setFeedList={setFeedList}
              />
            </div>
          ))}
        </Box>
      </Dialog>
    </>
  );
}
