import Typography from "@mui/material/Typography";
import PostForm from "../../components/PostForm";
import { Box } from "@mui/material";
import FeedList from "../../components/FeedList";
import ProfilePicture from "../../components/ProfilePicture";
import RecommendationList from "../../components/RecommendationList";

export default function ProfilePage({ user }) {
  return (
    <>
      <Typography variant="h6" component="h1" sx={{ mb: 2 }}>
        Profile Page is running here
      </Typography>
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
          <RecommendationList />
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
          <PostForm user={user} />
          <FeedList user={user} />
        </Box>
      </Box>
    </>
  );
}
