import "./Episodes.scss";
import {
  Box,
  Typography,
  Stack,
  Paper,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Footer from "../footer/Footer";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ep1 from "../../assets/images/episodeCovers/episode1.png";
import ep2 from "../../assets/images/episodeCovers/episode2.png";
import ep3 from "../../assets/images/episodeCovers/episode3.png";
import EpisodeCard from "./EpisodeCard";
import Grid2 from "@mui/material/Unstable_Grid2";

function Episodes() {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      className="episodes-body"
      sx={{
        height: "100%",
        paddingTop: "100px",
      }}
    >
      <Box m={5}>
        <Box marginBottom={"50px"}>
          <Typography
            className="episodes-title"
            fontFamily={"Share Tech Mono"}
            variant="h3"
            color="white"
          >
            Episodes
          </Typography>
        </Box>
        <Box marginBottom={"50px"}>
          <Grid2 container spacing={4}>
            <Grid2 xs={12} md={6} lg={4}>
              <EpisodeCard
                image={ep1}
                showName="PROJECT PULSE E01"
                episodeTitle="The Streets of Atlanta"
                description="Living in Atlanta, Georgia, Derrick finds himself thinking about the past again. 
                Pulse is all he ever thinks about these days. As Derrick gets into a predicament, he manages to
                find something he never expected to."
              />
            </Grid2>
            <Grid2 xs={12} md={6} lg={4}>
              <EpisodeCard
                image={ep2}
                showName="PROJECT PULSE E02"
                episodeTitle="Shadows of Chicago Part 1"
                description="After spending some time with his sister, Derrick decides that enough is enough.
                He's not going to let anything stop him from playing Project Pulse. Putting his feelings aside,
                he heads to Piedmont Park's pulse courts..."
              />
            </Grid2>
            <Grid2 xs={12} md={6} lg={4}>
              <EpisodeCard
                image={ep3}
                showName="PROJECT PULSE E03"
                episodeTitle="Shadows of Chicago Part 2"
                description="As the formiddible battle between Kato and Derrick and the Shadows of Chicago intensifies, Derrick begins to question
                his reality. What lies in store for Derrick after his first real pulse match ends?"
              />
            </Grid2>
          </Grid2>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Episodes;
