import { Box } from "@mui/material";
import RecommendationItem from "./RecommendationItem";

import { getRecommendationList } from "../utilities/Users/users-service";
import { useState, useEffect } from "react";

export default function RecommendationList({ user }) {
  const [recommendationList, setRecommendationList] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await getRecommendationList();
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
