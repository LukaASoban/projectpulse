import "./Episodes.scss";
import {
  Box,
  Typography,
  Stack,
  Paper,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Footer from "../footer/Footer";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ep1 from "../../assets/images/episodeCovers/episode1.png";
import EpisodeCard from "./EpisodeCard";
import Grid2 from "@mui/material/Unstable_Grid2";

function Episodes() {
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
            variant="h1"
            color="white"
          >
            Episodes
          </Typography>
        </Box>
        <Box marginBottom={"50px"}>
          <Grid2 container spacing={2}>
            <Grid2 xs={12} md={6} lg={4}>
              <EpisodeCard
                image={ep1}
                showName="PROJECT PULSE E01"
                episodeTitle="The Streets of Atlanta"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis
             orci. Morbi non arcu risus quis varius quam quisque id. Nibh tellus molestie nunc non blandit massa 
             enim. Montes nascetur ridiculus mus mauris vitae ultricies leo integer."
              />
            </Grid2>
            <Grid2 xs={12} md={6} lg={4}>
              <EpisodeCard
                image={ep1}
                showName="PROJECT PULSE E01"
                episodeTitle="The Streets of Atlanta"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis
             orci. Morbi non arcu risus quis varius quam quisque id. Nibh tellus molestie nunc non blandit massa 
             enim. Montes nascetur ridiculus mus mauris vitae ultricies leo integer."
              />
            </Grid2>
            <Grid2 xs={12} md={6} lg={4}>
              <EpisodeCard
                image={ep1}
                showName="PROJECT PULSE E01"
                episodeTitle="The Streets of Atlanta"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis
             orci. Morbi non arcu risus quis varius quam quisque id. Nibh tellus molestie nunc non blandit massa 
             enim. Montes nascetur ridiculus mus mauris vitae ultricies leo integer."
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
