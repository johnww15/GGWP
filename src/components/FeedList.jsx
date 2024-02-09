import { Box } from "@mui/material";
import FeedItem from "./FeedItem";

export default function FeedList() {
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
        <FeedItem />
        <FeedItem />
        <FeedItem />
      </Box>
    </>
  );
}
