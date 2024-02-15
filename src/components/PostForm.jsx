import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { createPost } from "../utilities/Posts/posts-service";

export default function PostForm({ user, setFeedList }) {
  const [postData, setPostData] = useState({
    content: "",
    multimedia: "",
    userId: user._id,
  });
  // const [multimedia, setMultimedia] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (submitType, evt) => {
    evt.preventDefault();
    if (submitType === "post") {
      const response = await createPost(postData);
      console.log("response", response);
      setFeedList((prevList) => ({
        ...prevList,
        posts: [response, ...prevList.posts],
      }));
    }
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
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
            name="content"
            onChange={handleChange}
            variant="outlined"
            color="secondary"
            type="content"
            InputLabelProps={{ style: { color: "#8B687F" } }}
            FormHelperTextProps={{ style: { color: "#7B7263" } }}
            InputProps={{ style: { color: "#BBE1FA" } }}
            sx={{
              mb: 1,
              mt: 5,
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "#BBE1FA",
              },
            }}
            multiline
            fullWidth
            maxRows={3}
            helperText={`${inputValue.length}/300`}
            inputProps={{ maxLength: 300 }}
            value={postData.content}
          />
          {/* <Button
            variant="outlined"
            color="primary"
            type=""
            sx={{ marginRight: "5px" }}
          >
            Add Multimedia
          </Button> */}
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ mb: 5 }}
            onClick={(evt) => handleSubmit("post", evt)}
          >
            Post it
          </Button>
        </form>
      </Box>
    </>
  );
}
