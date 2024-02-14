import { Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { updateBio } from "../utilities/Bios/bios-service";

export default function SettingsDialog({
  settingsOpen,
  handleSettingsClose,
  bio,
  setBio,
  bioData,
  setBioData,
}) {
  const [typeValue, setTypeValue] = useState("");
  const [genreValue, setGenreValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  console.log("biodata on load", bioData);
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
      <Dialog onClose={handleClose} open={settingsOpen} fullWidth>
        <DialogTitle>Edit Post</DialogTitle>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="type"
            name="type"
            defaultValue={bioData.type}
            onChange={(evt) => handleChange("type", evt)}
            required
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
            defaultValue={bioData.genre}
            onChange={(evt) => handleChange("genre", evt)}
            required
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
            defaultValue={bioData.body}
            onChange={(evt) => handleChange("body", evt)}
            required
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
    </>
  );
}
