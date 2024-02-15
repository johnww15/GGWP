import { Box, Typography } from "@mui/material";
import RecommendationItem from "./RecommendationItem";

export default function RecommendationList({
  user,
  recommendationList,
  setRecommendationList,
}) {
  return (
    <>
      <Box
        sx={{
          border: "2px solid",
          borderColor: "primary",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          alignContent: "space-around",
          justifyContent: "center",
          width: "25vw",
          height: "auto",
        }}
      >
        <Typography variant="p" component="p" sx={{ align: "center" }}>
          Reommended Friends
        </Typography>
        {recommendationList?.map((recommendation, idx) => (
          <div key={idx}>
            <RecommendationItem
              user={user}
              setRecommendationList={setRecommendationList}
              recommendation={recommendation}
              recommendationList={recommendationList}
            />
          </div>
        ))}
      </Box>
    </>
  );
}
