import { Box, Paper, Stack, Typography } from "@mui/material";
import "./Home.scss";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import pulseHomeVideo from "../../assets/videos/pulseHomeVideo.mp4";
import PulseArena from "../../assets/images/episodeCovers/episode1.png";
import Hospital from "../../assets/images/episodeCovers/episode2.png";
import Hades from "../../assets/images/episodeCovers/episode3.png";
import Carousel from "react-material-ui-carousel";
import Footer from "../footer/Footer";

var itemsForCarousel = [
  {
    name: "Episode 2",
    url: Hospital,
  },
  {
    name: "Pulse Arena",
    url: PulseArena,
  },
  {
    name: "Hades",
    url: Hades,
  },
];

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home-page">
      <div className="outer-container">
        <div className="inner-container">
          <div className="video-overlay">
            <Logo style={{ maxWidth: "100%" }}></Logo>
          </div>
          <video autoPlay loop muted id="home-video">
            <source src={pulseHomeVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <Box>
        <Box>
          <Paper
            sx={{
              padding: "2%",
              marginTop: "5%",
              backgroundColor: "transparent",
            }}
            elevation={4}
          >
            <Typography
              color={"white"}
              variant="h2"
              fontFamily={"Share Tech Mono"}
              textAlign="center"
              marginBottom={6}
            >
              {" "}
              Octic changed the world,{" "}
              <span
                style={{
                  fontStyle: "italic",
                  background:
                    "linear-gradient(270deg, rgba(200,26,61,1) 0%, rgba(158,1,134,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                forever...
              </span>
            </Typography>
            <Stack
              spacing={5}
              direction={"column"}
              sx={{
                alignContent: "center",
                alignItems: "center",
              }}
              marginLeft={"20%"}
              marginRight={"20%"}
            >
              <Typography
                color={"white"}
                variant="h6"
                fontFamily={"Share Tech Mono"}
                align="center"
              >
                {" "}
                When we imagined our future, most believed we would escape. Be
                it through space travel or in giving up this reality entirely
                for a virtual one of our own creation. It's easy to see why.
                Screens became our home. Our comfort. The natural world around
                us blurred into the background as the pixels in front of us
                beckoned onward into isolation. But on April 15, 2022, the world
                changed forever. Out of thin air, a company named Octic arose.
              </Typography>
              <Typography
                color={"white"}
                variant="h6"
                fontFamily={"Share Tech Mono"}
                align="center"
              >
                {" "}
                The founder and CEO of Octic, Brent Nolewood, introduced the
                world to what
                <span
                  style={{
                    fontStyle: "italic",
                    background:
                      "linear-gradient(270deg, rgba(200,26,61,1) 0%, rgba(158,1,134,1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  &nbsp;augmented reality&nbsp;
                </span>
                could truly be, and with it came a new age for humanity.
                Suddenly, the vast majority of the workforce was rendered
                obsolete by advanced artificial intelligence and robotics, and
                medical science progressed so rapidly that curing diseases and
                disabilities became nearly instantaneous. Humanity had suddenly
                found itself in a stage of transition unlike any it had
                experienced before. In an effort to distract and help the world
                cope with such drastic, sweeping changes, Octic introduced
                Project Pulse: a
                <span
                  style={{
                    fontStyle: "italic",
                    background:
                      "linear-gradient(270deg, rgba(200,26,61,1) 0%, rgba(158,1,134,1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  &nbsp;sport&nbsp;
                </span>
                unlike any other, to show the true potential of the human
                spirit.
              </Typography>
              <Typography
                color={"white"}
                variant="h6"
                fontFamily={"Share Tech Mono"}
                align="center"
              >
                {" "}
                Overnight, Project Pulse, a three on three battle of wills in an
                ever changing arena, became the center of the world. Through the
                use of augmented reality, players entered that
                <span
                  style={{
                    fontStyle: "italic",
                    background:
                      "linear-gradient(270deg, rgba(200,26,61,1) 0%, rgba(158,1,134,1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  &nbsp;arena&nbsp;
                </span>
                with magic, might, and cunning abilities where the only
                objective was to have your team be the last one standing.
              </Typography>
              <Typography
                color={"white"}
                variant="h6"
                fontFamily={"Share Tech Mono"}
                align="center"
              >
                {" "}
                Our story follows a young boy named Derrick Walker who navigates
                this beautiful and suffering world in transition as the last
                blind child in existence. In memory of his late mother and her
                belief that disabilities are not limitations but differences to
                be accepted and cherished, Derrick refuses correction for his
                eyes and pushes forward to climb to the top of a world of
                “perfection” and become
                <span
                  style={{
                    fontStyle: "italic",
                    background:
                      "linear-gradient(270deg, rgba(200,26,61,1) 0%, rgba(158,1,134,1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  &nbsp;the greatest player in the world.
                </span>{" "}
              </Typography>
            </Stack>
          </Paper>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Carousel interval={4000} sx={{ width: "100vw" }}>
          {itemsForCarousel.map((item, i) => (
            <ItemForCarousel key={i} item={item} />
          ))}
        </Carousel>
      </Box>

      <Footer />
    </div>
  );
}

function ItemForCarousel(props: any) {
  return <img width={"100%"} src={props.item.url}></img>;
}

export default Home;