import { Box } from "@mui/material";
import FeedItem from "./FeedItem";

export default function FeedList({ user, setFeedList, feedList }) {
  console.log("feedlistcomponent", feedList);
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
        {feedList?.map((post, idx) => (
          <div key={idx}>
            <FeedItem
              user={user}
              setFeedList={setFeedList}
              feedList={feedList}
              post={post}
            />
          </div>
        ))}
      </Box>
    </>
  );
}
