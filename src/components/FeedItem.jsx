import { Box, Typography, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import FeedUpdateDialog from "./FeedUpdateDialog";

export default function FeedItem({ user, setFeedList, post, feedList }) {
  const postDisplayName = post.userId.display_name;
  const content = post.content;
  const [updateOpen, setUpdateOpen] = useState(false);

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

  //handleClick function
  const handleClick = (clickType, evt) => {
    evt.preventDefault();
    if (clickType === "Update") {
      console.log("update button clicked");
      setUpdateOpen(true);
    }
    if (clickType === "Delete") {
      console.log("Delete button clicked");
    }
  };

  const handleUpdateClose = (value) => {
    setUpdateOpen(false);
    console.log("value", value);
  };

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
        <ButtonGroup
          variant="outlined"
          size="small"
          aria-label="Delete Update Group"
        >
          <Button onClick={(evt) => handleClick("Update", evt)}>Update</Button>
          <Button onClick={(evt) => handleClick("Delete", evt)}>Delete</Button>
        </ButtonGroup>
        <FeedUpdateDialog
          user={user}
          updateOpen={updateOpen}
          handleUpdateClose={handleUpdateClose}
          post={post}
          setFeedList={setFeedList}
          feedList={feedList}
        />
      </Box>
    </>
  );
}
