import { Box, IconButton, Typography } from "@mui/material";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { addFriend } from "../utilities/Friends/friends-service";

export default function RecommendationItem({
  setRecommendationList,
  recommendationList,
  recommendation,
}) {
  const username = recommendation.display_name;

  const handleClick = async (evt) => {
    evt.preventDefault();
    const response = await addFriend(recommendation);
    console.log("response.friends is array", response.friends);
    console.log("recommendation", recommendation);

    let oldList = recommendationList;
    let newList = oldList.filter((item) => {
      return item._id !== recommendation._id;
    });
    setRecommendationList(newList);
  };
  return (
    <>
      <Box
        sx={{
          border: "2px solid",
          borderColor: "primary",
          display: "flex",
          overflow: "hidden",
          justifyContent: "center",
          alignContent: "center",
          width: "auto",
          height: "50px",
          padding: "2px",
          margin: "2px",
        }}
      >
        <Typography variant="p" component="p" sx={{ margin: "1px" }}>
          {username}
        </Typography>
        <IconButton
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleClick}
        >
          <AddCircleSharpIcon />
        </IconButton>
      </Box>
    </>
  );
}
