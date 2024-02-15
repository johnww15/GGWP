import PostForm from "../../components/PostForm";
import { Box, Button } from "@mui/material";
import FeedList from "../../components/FeedList";
import ProfilePicture from "../../components/ProfilePicture";
import RecommendationList from "../../components/RecommendationList";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getFeedListByUserId,
  getPremiumFeedList,
} from "../../utilities/Posts/posts-service";
import { getFriendsList } from "../../utilities/Friends/friends-service";
import {
  getRecommendationList,
  getUser,
  userLogout,
} from "../../utilities/Users/users-service";

export default function ProfilePage({ user, setUser }) {
  const navigate = useNavigate();
  const [feedList, setFeedList] = useState({ posts: [] });
  const [friendsList, setFriendsList] = useState([]);
  const [recommendationList, setRecommendationList] = useState([]);

  useEffect(() => {
    (async function () {
      if (user.isPremium === true) {
        const friendsListResponse = await getFriendsList();

        const recommendationListResponse = await getRecommendationList(
          friendsListResponse
        );
        const premiumFeedListResponse = await getPremiumFeedList(
          friendsListResponse
        );
        setRecommendationList(recommendationListResponse);
        setFriendsList(friendsListResponse);
        let alteredFeed = { posts: premiumFeedListResponse };
        setFeedList(alteredFeed);
        console.log("premiumFeedListResponse", premiumFeedListResponse);
        console.log("RecommendationList response", recommendationListResponse);
        console.log("friendListResponse", friendsListResponse);
      } else {
        const feedListResponse = await getFeedListByUserId();
        console.log("FeedList response", feedListResponse);
        setFeedList(feedListResponse);
      }
    })();
  }, [user]);

  const handleLogout = (evt) => {
    evt.preventDefault();
    // userLogout();
    localStorage.removeItem("token");
    setFeedList({ posts: [] });
    setFriendsList([]);
    setRecommendationList([]);
    setUser(null);
  };

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
          <ProfilePicture
            user={user}
            setUser={setUser}
            friendsList={friendsList}
            setFriendsList={setFriendsList}
          />
          <RecommendationList
            user={user}
            recommendationList={recommendationList}
            setRecommendationList={setRecommendationList}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ m: 1, width: "20%" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
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
