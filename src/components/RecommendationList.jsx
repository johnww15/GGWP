import { Box } from "@mui/material";
import RecommendationItem from "./RecommendationItem";

export default function RecommendationList() {
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
        <p>this is the recommmendation list</p>
        <RecommendationItem />
        <RecommendationItem />
        <RecommendationItem />
      </Box>
    </>
  );
}
