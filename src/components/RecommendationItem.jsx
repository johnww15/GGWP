import { Box, Typography } from "@mui/material";

export default function RecommendationItem() {
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
          this is a feed item.
        </Typography>
      </Box>
    </>
  );
}
