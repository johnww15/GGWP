import { Avatar, Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteFriend } from "../utilities/Friends/friends-service";

export default function FriendItem({ friend, setFriendsList }) {
  const handleDeleteClick = async (evt) => {
    evt.preventDefault();
    const response = await deleteFriend(friend);
    console.log("response", response);
    setFriendsList(response);
  };
  return (
    <>
      <Box
        sx={{
          border: "2px solid",
          borderColor: "primary",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          justifyContent: "center",
          alignContent: "center",
          width: "100x",
          height: "100px",
          padding: "2px",
          margin: "2px",
        }}
      >
        <Typography variant="p" component="p" sx={{ margin: "1px" }}>
          <Avatar src={`${friend.profilepic}`} alt={`${friend.display_name}`} />
          {friend.display_name}
        </Typography>
        <IconButton
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleDeleteClick}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </>
  );
}
