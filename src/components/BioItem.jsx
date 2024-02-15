import { Box, Typography } from "@mui/material";

export default function BioItem({ bio }) {
  return (
    <>
      {bio && (
        <Box
          sx={{
            // border: "1px solid",
            borderColor: "primary.main",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            justifyContent: "flex-start",
            alignContent: "inherit",
            width: "100%",
            height: "auto",
            margin: "2px",
          }}
        >
          <Typography
            variant="p"
            component="p"
            color="text.primary"
            fontWeight="bold"
          >
            Type:
          </Typography>
          <Typography
            variant="p"
            component="p"
            color="text.primary"
            fontWeight="regular"
          >
            {bio.type || "undisclosed"}
          </Typography>
          <Typography
            variant="p"
            component="p"
            color="text.primary"
            fontWeight="bold"
          >
            Genre:
          </Typography>
          <Typography
            variant="p"
            component="p"
            color="text.primary"
            fontWeight="regular"
          >
            {bio.genre || "undisclosed"}
          </Typography>
          <Typography
            variant="p"
            component="p"
            color="text.primary"
            fontWeight="bold"
          >
            About:
          </Typography>
          <Typography
            variant="p"
            component="p"
            color="text.primary"
            fontWeight="regular"
          >
            {bio.body || "yet to be updated"}
          </Typography>
        </Box>
      )}
    </>
  );
}
