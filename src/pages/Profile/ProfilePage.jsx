import Typography from "@mui/material/Typography";
import PostForm from "../../components/PostForm";
import { Box } from "@mui/material";
import FeedList from "../../components/FeedList";
import ProfilePicture from "../../components/ProfilePicture";
import RecommendationList from "../../components/RecommendationList";

import { useState, useEffect } from "react";
import { getFeedListByUserId } from "../../utilities/Posts/posts-service";

export default function ProfilePage({ user }) {
  const [feedList, setFeedList] = useState({ posts: [] });
  console.log("ORIGINAL FEEDLIST", feedList);

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
          border: "primary",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            border: "2px solid",
            borderColor: "primary",
            display: "flex",
            flexDirection: "column",
            alignContent: "space-around",
            width: "30vw",
            height: "100vh",
            padding: "2px",
            margin: "1px",
          }}
        >
          <ProfilePicture />
          <RecommendationList user={user} />
        </Box>
        <Box
          sx={{
            border: "2px solid",
            borderColor: "primary",
            display: "flex",
            flexDirection: "column",
            width: "70vw",
            height: "100vh",
            padding: "2px",
            margin: "1px",
          }}
        >
          <PostForm user={user} setFeedList={setFeedList} />
          <FeedList
            user={user}
            setFeedList={setFeedList}
            feedList={feedList.posts}
          />
        </Box>
      </Box>
    </>
  );
}
