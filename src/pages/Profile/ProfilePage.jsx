import PostForm from "../../components/PostForm";
import { Box, Button, Typography } from "@mui/material";
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
      } else if (user.isPremium === false) {
        const feedListResponse = await getFeedListByUserId();
        setFeedList(feedListResponse);
      }
    })();
  }, [user]);

  const handleLogout = (evt) => {
    evt.preventDefault();
    userLogout();
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
            setRecommendationList={setRecommendationList}
            setFeedList={setFeedList}
          />
          {user?.isPremium ? (
            <>
              <RecommendationList
                user={user}
                recommendationList={recommendationList}
                setRecommendationList={setRecommendationList}
                setFeedList={setFeedList}
              />
            </>
          ) : (
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
                  width: "25vw",
                  height: "auto",
                }}
              >
                <Typography variant="p" component="p">
                  Be Premium to get recommended friends
                </Typography>
              </Box>
            </>
          )}
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
