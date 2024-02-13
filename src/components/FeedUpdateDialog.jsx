import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

export default function FeedUpdateDialog({
  user,
  updateOpen,
  handleUpdateClose,
  post,
}) {
  const username = post.userId.display_name;
  const content = post.content;

  const handleClose = () => {
    handleUpdateClose(post);
  };
  return (
    <>
      <Dialog onClose={handleClose} open={updateOpen}>
        <DialogTitle>Set update form</DialogTitle>
        <div>
          <p>
            {username} / {content}
          </p>
        </div>
      </Dialog>
    </>
  );
}
