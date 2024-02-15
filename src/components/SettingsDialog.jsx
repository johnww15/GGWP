import { Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { updateBio } from "../utilities/Bios/bios-service";

export default function SettingsDialog({
  settingsOpen,
  handleSettingsClose,
  setBio,
  bio,
  bioData,
  setBioData,
}) {
  const [typeValue, setTypeValue] = useState("");
  const [genreValue, setGenreValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");

  const handleClose = () => {
    handleSettingsClose();
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const response = await updateBio(bioData);
    setBio(response);
    handleSettingsClose();
  };

  const handleChange = (submitType, event) => {
    if (submitType === "type") {
      const newTypeValue = event.target.value;
      setBioData({
        ...bioData,
        [event.target.name]: event.target.value,
      });
      if (newTypeValue.length <= 50) {
        setTypeValue(newTypeValue);
      }
    }
    if (submitType === "genre") {
      const newGenreValue = event.target.value;
      setBioData({
        ...bioData,
        [event.target.name]: event.target.value,
      });
      if (newGenreValue.length <= 50) {
        setGenreValue(newGenreValue);
      }
    }
    if (submitType === "body") {
      const newBodyValue = event.target.value;
      setBioData({
        ...bioData,
        [event.target.name]: event.target.value,
      });
      if (newBodyValue.length <= 150) {
        setBodyValue(newBodyValue);
      }
    }
  };

  return (
    <>
      {bio && (
        <Dialog onClose={handleClose} open={settingsOpen} fullWidth>
          <DialogTitle>Edit Post</DialogTitle>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              label="type"
              name="type"
              defaultValue={bioData.type || "undiscloed"}
              onChange={(evt) => handleChange("type", evt)}
              variant="outlined"
              color="secondary"
              type="type"
              sx={{ mb: 3 }}
              fullWidth
              helperText={`${typeValue.length}/50`}
              inputProps={{ maxLength: 50 }}
            />
            <TextField
              label="genre"
              name="genre"
              defaultValue={bioData.genre || "undiscloed"}
              onChange={(evt) => handleChange("genre", evt)}
              variant="outlined"
              color="secondary"
              type="genre"
              sx={{ mb: 3 }}
              fullWidth
              helperText={`${genreValue.length}/50`}
              inputProps={{ maxLength: 50 }}
            />
            <TextField
              label="about"
              name="body"
              defaultValue={bioData.body || "undiscloed"}
              onChange={(evt) => handleChange("body", evt)}
              variant="outlined"
              color="secondary"
              type="body"
              sx={{ mb: 3 }}
              fullWidth
              multiline
              maxRows={3}
              helperText={`${bodyValue.length}/150`}
              inputProps={{ maxLength: 150 }}
            />
          </form>
          <Button
            variant="contained"
            color="primary"
            onClick={(evt) => handleSubmit(evt)}
          >
            Edit
          </Button>
        </Dialog>
      )}
    </>
  );
}
