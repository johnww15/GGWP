import { Box, Typography, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import FeedUpdateDialog from "./FeedUpdateDialog";
import FeedDeleteDialog from "./FeedDeleteDialog";

export default function FeedItem({ user, setFeedList, post, feedList }) {
  const postDisplayName = post.userId.display_name;
  const content = post.content;
  const [updateOpen, setUpdateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

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
      setUpdateOpen(true);
    }
    if (clickType === "Delete") {
      setDeleteOpen(true);
    }
  };

  const handleUpdateClose = () => {
    setUpdateOpen(false);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          border: "1px solid",
          borderColor: "background",
          bgcolor: "secondary.main",
          boxShadow: "0.5",
          display: "flex",
          overflow: "hidden",
          justifyContent: "space-between",
          alignItems: "center",
          width: "auto",
          height: "100px",
          padding: "8px",
          margin: "5px",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            variant="caption"
            sx={{ fontSize: 13, fontWeight: "bold" }}
          >
            @{postDisplayName}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "right", fontSize: 10 }}>
            {formattedDate}
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ textAlign: "left", maxWidth: 300 }}>
          {content}
        </Typography>
        {post.userId._id === user._id ? (
          <>
            <ButtonGroup
              variant="outlined"
              size="small"
              aria-label="Delete Update Group"
              sx={{ alignSelf: "flex-end" }}
            >
              <Button
                size="small"
                sx={{ fontSize: 10 }}
                onClick={(evt) => handleClick("Update", evt)}
              >
                Update
              </Button>
              <Button
                size="small"
                sx={{ fontSize: 10 }}
                onClick={(evt) => handleClick("Delete", evt)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </>
        ) : (
          <></>
        )}
        <FeedUpdateDialog
          user={user}
          updateOpen={updateOpen}
          handleUpdateClose={handleUpdateClose}
          post={post}
          setFeedList={setFeedList}
          feedList={feedList}
        />
        <FeedDeleteDialog
          user={user}
          deleteOpen={deleteOpen}
          handleDeleteClose={handleDeleteClose}
          post={post}
          setFeedList={setFeedList}
          feedList={feedList}
        />
      </Box>
    </>
  );
}
