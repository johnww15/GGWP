import { Box, IconButton, Typography } from "@mui/material";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

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
        <IconButton variant="outlined" color="primary" size="small">
          <AddCircleSharpIcon />
        </IconButton>
      </Box>
    </>
  );
}
