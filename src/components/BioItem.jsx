import { Box, Typography } from "@mui/material";

export default function BioItem({ bio }) {
  return (
    <>
      {bio && (
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
            Type : {bio.type || "undisclosed"}
          </Typography>
          <Typography variant="p" component="p">
            Genre : {bio.genre || "undisclosed"}
          </Typography>
          <Typography variant="p" component="p">
            About : {bio.body || "yet to be updated"}
          </Typography>
        </Box>
      )}
    </>
  );
}
