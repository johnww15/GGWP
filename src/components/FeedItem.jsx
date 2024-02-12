import { Box, Typography } from "@mui/material";

export default function FeedItem({ user, SetFeedList, post }) {
  console.log("post", post);
  return (
    <>
      <Box
        sx={{
          border: "2px solid",
          borderColor: "primary",
          display: "flex",
          overflow: "hidden",
          justifyContent: "flex-start",
          alignContent: "center",
          width: "auto",
          height: "50px",
          padding: "2px",
          margin: "2px",
        }}
      >
        <Typography variant="p" component="p" sx={{ margin: "1px" }}>
          {post.content}
        </Typography>
      </Box>
    </>
  );
}
