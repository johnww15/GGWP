import { Box } from "@mui/material";
import RecommendationItem from "./RecommendationItem";

export default function RecommendationList({
  user,
  friendsList,
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
        {recommendationList?.map((recommendation, idx) => (
          <div key={idx}>
            <RecommendationItem
              user={user}
              setRecommendationList={setRecommendationList}
              recommendation={recommendation}
            />
          </div>
        ))}
      </Box>
    </>
  );
}
