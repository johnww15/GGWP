import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

import { updateFeedItem } from "../utilities/Posts/posts-service";

export default function FeedUpdateDialog({
  updateOpen,
  handleUpdateClose,
  post,
  setFeedList,
  feedList,
}) {
  const content = post.content;
  const [updatePostData, setUpdatePostData] = useState(post);

  const handleClose = () => {
    handleUpdateClose(post);
    setUpdatePostData(post);
  };

  const handleChange = (evt) => {
    setUpdatePostData({
      ...updatePostData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const response = await updateFeedItem(updatePostData);
    const Index = feedList.findIndex((feedItem) => feedItem._id == post._id);

    let newFeed = [...feedList];
    newFeed[Index] = response;
    let alteredFeed = { posts: newFeed };

    setFeedList(alteredFeed);
    handleClose();
  };

  return (
    <>
      <Dialog onClose={handleClose} open={updateOpen} fullWidth>
        <DialogTitle>Edit Post</DialogTitle>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="content"
            name="content"
            defaultValue={content}
            onChange={handleChange}
            required
            variant="outlined"
            color="secondary"
            type="content"
            sx={{ mb: 3 }}
            fullWidth
          />
        </form>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Update
        </Button>
      </Dialog>
    </>
  );
}
