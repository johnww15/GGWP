import { Box } from "@mui/material";
import FeedItem from "./FeedItem";

export default function FeedList({ user, setFeedList, feedList }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
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
