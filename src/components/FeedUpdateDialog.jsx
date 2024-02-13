import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

import { updateFeedItem } from "../utilities/Posts/posts-service";

export default function FeedUpdateDialog({
  user,
  updateOpen,
  handleUpdateClose,
  post,
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
    console.log("submit clicked", updatePostData);
    const response = await updateFeedItem(updatePostData);
    console.log("feed item update", response);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={updateOpen}>
        <DialogTitle>Set update form</DialogTitle>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h2>Update Form</h2>
          <TextField
            label="content"
            name="content"
            defaultValue={content}
            // value={updatePostData.content}
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
