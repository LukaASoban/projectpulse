import {
  Box,
  Stack,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        marginTop: "-1%",
        backgroundColor: isMobileScreen ? "transparent" : "rgb(4, 43, 106)",
        background: isMobileScreen
          ? "transparent"
          : "linear-gradient(135deg, rgba(4, 43, 106, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        paddingTop: "2%",
        textAlign: "center",
      }}
    >
      <Box display={"flex"} justifyContent={"center"}>
        <Stack direction={"row"}>
          <IconButton
            href="https://twitter.com/eyesshutstudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
          >
            <TwitterIcon color="primary" />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/eyesshutstudio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <InstagramIcon color="primary" />
          </IconButton>
        </Stack>
      </Box>
      <Box padding={"1%"}>
        <Typography
          fontFamily={"Share Tech Mono"}
          variant="subtitle2"
          color={"white"}
        >
          contact@eyesshut.studio
        </Typography>
        <Typography
          fontFamily={"Share Tech Mono"}
          variant="subtitle2"
          color={"white"}
        >
          PROJECT PULSE™ IS THE PROPERTY OF © Eyes Shut Studios © 2022, ALL
          RIGHTS RESERVED.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
