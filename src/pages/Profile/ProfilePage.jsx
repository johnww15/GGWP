import Typography from "@mui/material/Typography";
import PostForm from "../../components/PostForm";

export default function ProfilePage() {
  return (
    <>
      <Typography variant="h6" component="h1" sx={{ mb: 2 }}>
        Profile Page is running here
      </Typography>
      <PostForm />
    </>
  );
}
