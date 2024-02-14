import { Box } from "@mui/material";
import RecommendationItem from "./RecommendationItem";

import { getRecommendationList } from "../utilities/Users/users-service";
import { useState, useEffect } from "react";
import { getFriendsList } from "../utilities/Friends/friends-service";

export default function RecommendationList({ user }) {
  const [recommendationList, setRecommendationList] = useState([]);

  useEffect(() => {
    (async function () {
      const friendListResponse = await getFriendsList();
      console.log("friendListResponse", friendListResponse);
      const response = await getRecommendationList(friendListResponse);
      setRecommendationList(response);
      console.log("RecommendationList response", response);
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
          width: "25vw",
          height: "auto",
        }}
      >
        {recommendationList?.map((recommendation, idx) => (
          <div key={idx}>
            <RecommendationItem
              user={user}
              setRecommendationList={setRecommendationList}
              recommendation={recommendation}
            />
          </div>
        ))}
      </Box>
    </>
  );
}
