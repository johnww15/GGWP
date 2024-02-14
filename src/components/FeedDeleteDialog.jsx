import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Box, Button, Typography } from "@mui/material";
import { deletePost } from "../utilities/Posts/posts-service";

export default function FeedDeleteDialog({
  post,
  handleDeleteClose,
  deleteOpen,
  setFeedList,
  feedList,
}) {
  const handleClose = () => {
    handleDeleteClose(post);
  };

  const handleDelete = async () => {
    const response = await deletePost(post._id);

    let oldFeed = [...feedList];
    let newFeed = oldFeed.filter((item) => {
      return item._id !== response._id;
    });
    let alteredFeed = { posts: newFeed };

    setFeedList(alteredFeed);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={deleteOpen} fullWidth>
        <DialogTitle align="center">
          Are you sure you wish to delete?
        </DialogTitle>
        <Typography variant="p" component="p" align="center">
          This action cannot be reversed
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            color="error"
            sx={{ m: 1, width: "20%" }}
            onClick={handleDelete}
          >
            yes
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ m: 1, width: "20%" }}
            onClick={handleClose}
          >
            no
          </Button>
        </Box>
      </Dialog>
    </>
  );
}
