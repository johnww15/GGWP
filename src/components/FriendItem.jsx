import { Avatar, Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteFriend,
  getFriendsList,
} from "../utilities/Friends/friends-service";
import { getRecommendationList } from "../utilities/Users/users-service";
import { getPremiumFeedList } from "../utilities/Posts/posts-service";

export default function FriendItem({
  friend,
  setFriendsList,
  setRecommendationList,
  setFeedList,
}) {
  const handleDeleteClick = async (evt) => {
    evt.preventDefault();
    const response = await deleteFriend(friend);
    const friendsListResponse = await getFriendsList();
    const recommendationListResponse = await getRecommendationList(
      friendsListResponse
    );
    const premiumFeedListResponse = await getPremiumFeedList(
      friendsListResponse
    );
    let alteredFeed = { posts: premiumFeedListResponse };
    setFeedList(alteredFeed);
    setFriendsList(response);
    setRecommendationList(recommendationListResponse);
  };

  return (
    <>
      <Box
        sx={{
          border: "1px solid",
          borderColor: "primary",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "300px",
          height: "100px",
          padding: "5px",
          margin: "5px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src={friend.profilepic} alt={friend.display_name} />
          <Typography
            variant="body1"
            sx={{ marginLeft: "13px", fontWeight: "bold" }}
          >
            @{friend.display_name}
          </Typography>
        </Box>

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
