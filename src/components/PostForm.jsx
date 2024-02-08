import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function EntriesForm({ user }) {
  const [body, setBody] = useState("");
  const [multimedia, setMultimedia] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async () => {
    console.log("entriesform submit button clicked");
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setBody(event.target.value);
    if (newValue.length <= 300) {
      setInputValue(newValue);
    }
  };

  return (
    <>
      <Box sx={{ width: "100%", padding: "5px" }}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="New Post"
            onChange={handleChange}
            variant="outlined"
            color="secondary"
            type="body"
            sx={{ mb: 1 }}
            multiline
            fullWidth
            maxRows={3}
            helperText={`${inputValue.length}/300`}
            inputProps={{ maxLength: 300 }}
            value={body}
          />
          <Button
            variant="outlined"
            color="primary"
            type=""
            sx={{ marginRight: "5px" }}
          >
            Add Multimedia
          </Button>
          <Button variant="outlined" color="primary" type="submit">
            Post it
          </Button>
        </form>
      </Box>
    </>
  );
}
