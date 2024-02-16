import { Box, IconButton, Typography } from "@mui/material";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import {
  addFriend,
  getFriendsList,
} from "../utilities/Friends/friends-service";
import { getPremiumFeedList } from "../utilities/Posts/posts-service";

export default function RecommendationItem({
  setRecommendationList,
  recommendationList,
  recommendation,
  setFeedList,
  setFriendsList,
}) {
  const username = recommendation.display_name;

  const handleClick = async (evt) => {
    evt.preventDefault();
    const response = await addFriend(recommendation);
    const friendsListResponse = await getFriendsList();
    const premiumFeedListResponse = await getPremiumFeedList(
      friendsListResponse
    );
    console.log("response.friends is array", response.friends);

    let oldList = recommendationList;
    let newList = oldList.filter((item) => {
      return item._id !== recommendation._id;
    });
    let alteredFeed = { posts: premiumFeedListResponse };
    setFeedList(alteredFeed);
    setRecommendationList(newList);
    setFriendsList(response.friends);
  };
  return (
    <>
      <Box
        sx={{
          border: "1px solid",
          borderColor: "primary",
          boxShadow: "1",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          justifyContent: "center",
          alignContent: "center",
          width: "auto",
          height: "50px",
          padding: "2px",
          margin: "2px",
        }}
      >
        <Typography
          variant="p"
          component="p"
          display="flex"
          alignItems="center"
          textAlign="center"
          sx={{ margin: "1px" }}
        >
          {username}
        </Typography>
        <IconButton
          variant="outlined"
          color="primary"
          size="small"
          align="right"
          sx={{ marginLeft: "auto" }}
          onClick={handleClick}
        >
          <AddCircleSharpIcon />
        </IconButton>
      </Box>
    </>
  );
}
