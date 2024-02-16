import { Box, Typography } from "@mui/material";
import RecommendationItem from "./RecommendationItem";

export default function RecommendationList({
  recommendationList,
  setRecommendationList,
  setFeedList,
  setFriendsList,
}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          alignContent: "space-around",
          justifyContent: "center",
          width: "25vw",
          height: "auto",
        }}
      >
        <Typography
          variant="h5"
          component="h6"
          align="center"
          sx={{ align: "center", fontWeight: "bold" }}
        >
          Recommended Users
        </Typography>
        {recommendationList?.map((recommendation, idx) => (
          <div key={idx}>
            <RecommendationItem
              setRecommendationList={setRecommendationList}
              recommendation={recommendation}
              recommendationList={recommendationList}
              setFeedList={setFeedList}
              setFriendsList={setFriendsList}
            />
          </div>
        ))}
      </Box>
    </>
  );
}
