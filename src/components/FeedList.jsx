import { Box } from "@mui/material";
import FeedItem from "./FeedItem";
import { useState, useEffect } from "react";
import { getFeedListByUserId } from "../utilities/Posts/posts-service";

export default function FeedList({ user }) {
  const [feedList, setFeedList] = useState({ posts: [] });

  useEffect(() => {
    (async function () {
      const response = await getFeedListByUserId();
      setFeedList(response);
      console.log("FeedList response", response);
    })();
  }, []);

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
        {feedList?.posts?.map((post, idx) => (
          <div key={idx}>
            <FeedItem user={user} setFeedList={setFeedList} post={post} />
          </div>
        ))}
      </Box>
    </>
  );
}
