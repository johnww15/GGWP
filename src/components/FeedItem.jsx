import { Box, Typography } from "@mui/material";

export default function FeedItem({ user, SetFeedList, post }) {
  const postDisplayName = post.userId.display_name;
  const content = post.content;

  //Reformatting date string from database for rendering
  const receivedCreateDate = post.createdAt;

  const date = new Date(receivedCreateDate);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const formattedDate = `${day} ${month} ${year}, ${hour}:${
    minute < 10 ? "0" : ""
  }${minute}`;

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
          {postDisplayName} / {content} / {formattedDate}
        </Typography>
      </Box>
    </>
  );
}
