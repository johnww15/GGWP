import PostForm from "../../components/PostForm";
import { Box } from "@mui/material";
import FeedList from "../../components/FeedList";
import ProfilePicture from "../../components/ProfilePicture";
import RecommendationList from "../../components/RecommendationList";

import { useState, useEffect } from "react";
import { getFeedListByUserId } from "../../utilities/Posts/posts-service";
import { getFriendsList } from "../../utilities/Friends/friends-service";
import { getRecommendationList } from "../../utilities/Users/users-service";

export default function ProfilePage({ user, setUser }) {
  const [feedList, setFeedList] = useState({ posts: [] });
  const [friendsList, setFriendsList] = useState([]);
  const [recommendationList, setRecommendationList] = useState([]);

  useEffect(() => {
    (async function () {
      const feedListResponse = await getFeedListByUserId();
      const friendsListResponse = await getFriendsList();
      const recommendationListResponse = await getRecommendationList(
        friendsListResponse
      );
      setRecommendationList(recommendationListResponse);
      console.log("RecommendationList response", recommendationListResponse);
      console.log("friendListResponse", friendsListResponse);
      console.log("FeedList response", feedListResponse);
      setFeedList(feedListResponse);
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
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "30vw",
            height: "100vh",
            padding: "2px",
            margin: "1px",
          }}
        >
          <ProfilePicture user={user} setUser={setUser} />
          <RecommendationList
            user={user}
            friendsList={friendsList}
            recommendationList={recommendationList}
            setRecommendationList
          />
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
