import { Container, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function EntriesForm({ user }) {
  const [body, setBody] = useState("");
  const [multimedia, setMultimedia] = useState("");

  const handleSubmit = async () => {
    console.log("entriesform submit button clicked");
  };

  return (
    <>
      <Container sx={{ width: 350 }}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="Post"
            onChange={(e) => setBody(e.target.value)}
            variant="outlined"
            color="secondary"
            type="body"
            sx={{ mb: 3 }}
            fullWidth
            value={body}
          />
          <Button variant="outlined" color="secondary" type="">
            Add Multimedia
          </Button>
          <Button variant="outlined" color="primary" type="submit">
            Post it
          </Button>
        </form>
      </Container>
    </>
  );
}
