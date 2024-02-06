// import Typography from "@mui/material/Typography";
import SignupForm from "../../components/SignupForm";

export default function SignupPage({ setUser, user }) {
  return (
    <>
      <h1>signup page here</h1>
      <SignupForm setUser={setUser} user={user} />
    </>
  );
}
