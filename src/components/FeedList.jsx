import { Box } from "@mui/material";
import FeedItem from "./FeedItem";
import { useState, useEffect } from "react";
import { getFeedListByUserId } from "../utilities/Posts/posts-service";

export default function FeedList({ user }) {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    console.log("user", user._id);
    (async function () {
      const response = await getFeedListByUserId(user._id);
      setFeedList(response);
      console.log("checking in react", response);
    })();
  }, [user]);

  return (
    <>
      <Box
        sx={{
          border: "2px solid",
          borderColor: "primary",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          alignContent: "space-around",
          justifyContent: "center",
          width: "70vw",
          height: "auto",
        }}
      >
        <p>This is the feed list</p>
        <FeedItem user={user} />
        <FeedItem user={user} />
        <FeedItem user={user} />
      </Box>
    </>
  );
}
