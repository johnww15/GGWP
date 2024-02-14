import { Box, Typography } from "@mui/material";

export default function BioItem({ bio }) {
  return (
    <>
      <Box
        sx={{
          border: "2px solid",
          borderColor: "primary",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          justifyContent: "flex-start",
          alignContent: "inherit",
          width: "90%",
          height: "auto",
          padding: "2px",
          margin: "2px",
        }}
      >
        <Typography variant="p" component="p">
          Type : {bio.type}
        </Typography>
        <Typography variant="p" component="p">
          Genre : {bio.genre}
        </Typography>
        <Typography variant="p" component="p">
          About : {bio.body}
        </Typography>
      </Box>
    </>
  );
}
