import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { createPost } from "../utilities/Posts/posts-service";

export default function PostForm({ user, setFeedList }) {
  const [postData, setPostData] = useState({
    content: "",
    multimedia: "",
    userId: user._id,
  });
  const [multimedia, setMultimedia] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (submitType, evt) => {
    evt.preventDefault();
    console.log("postform submit button clicked");
    console.log("userid", user._id);
    if (submitType === "post") {
      const response = await createPost(postData);
      console.log("response", response);
      setFeedList((prevList) => ({
        ...prevList,
        posts: [...prevList.posts, response],
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
            sx={{ mb: 1 }}
            multiline
            fullWidth
            maxRows={3}
            helperText={`${inputValue.length}/300`}
            inputProps={{ maxLength: 300 }}
            value={postData.content}
          />
          <Button
            variant="outlined"
            color="primary"
            type=""
            sx={{ marginRight: "5px" }}
          >
            Add Multimedia
          </Button>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            onClick={(evt) => handleSubmit("post", evt)}
          >
            Post it
          </Button>
        </form>
      </Box>
    </>
  );
}
