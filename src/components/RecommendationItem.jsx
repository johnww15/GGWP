import { Box, Typography } from "@mui/material";

export default function RecommendationItem({
  user,
  setRecommendationList,
  recommendation,
}) {
  const username = recommendation.display_name;
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
      </Box>
    </>
  );
}
