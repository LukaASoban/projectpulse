import "./About.scss";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardHeader,
  Stack,
  Chip,
  CardContent,
  CardActions,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Footer from "../footer/Footer";
import { Masonry } from "@mui/lab";
import { cast, creators } from "../../data/cast";

function About() {
  return (
    <Box
      className="about-body"
      sx={{
        height: "100%",
        paddingTop: "100px",
      }}
    >
      <Box m={5}>
        <Box marginBottom={"50px"}>
          <Typography
            className="about-title"
            fontFamily={"Share Tech Mono"}
            variant="h1"
            color="white"
          >
            Synopsis
          </Typography>
        </Box>
        <Box marginBottom={"50px"}>
          <Typography
            fontFamily={"Share Tech Mono"}
            variant="body1"
            color="white"
          >
            <p>
              When we imagined our future, most believed we would escape. Be it
              through space travel or in giving up this reality entirely for a
              virtual one of our own creation. It's easy to see why. Screens
              became our home. Our comfort. The natural world around us blurred
              into the background as the pixels in front of us beckoned onward
              into isolation. But on April 15, 2022, the world changed forever.
              Out of thin air, a company named Octic arose. 
            </p>
            <p>
              Nearly miraculous, to the point of mysticism, the founder and CEO
              of Octic, Brent Nolewood, introduced the world to what augmented
              reality could truly be. With these incredible advancements, the
              world was born anew, and everyone connected could see what it had
              become. All around us the screens fell away for technology that
              took a living form right beside us.
            </p>
            <p>
              Suddenly, humanity had entered a new age. The advancements brought
              on through the lens of augmented reality created a world where the
              vast majority of the workforce was rendered obsolete by advanced
              artificial intelligence and robotics, and medical science
              progressed so rapidly that curing diseases and disabilities became
              nearly instantaneous.
            </p>
            <p>
              Many were overwhelmed by the change, but some saw only
              opportunity. Among those who grasped at what this new world had to
              offer, true greatness awaited when Octic changed the world again
              with Project Pulse.
            </p>
            <p>
              In its press release, Nolewood described Project Pulse as a new
              level of competition for the people of the world: a sport unlike
              any other, to show the true potential of the human spirit.
              Overnight, Project Pulse, a three on three battle of wills in an
              ever changing arena, became the center of our world. Through the
              use of augmented reality, players entered that arena with magic,
              might, and cunning abilities where the only objective was to have
              your team be the last one standing.
            </p>
            <p>
              Many dream of carving their place on that field, even the ones
              that suffer most from this new world and the expectations society
              holds for its people. For Derrick Walker, that dream is no
              different, regardless of his past.  But the path that leads him
              there, through a beautiful and suffering world in agonizing
              transition, and conflict he endures, defines his story. His tale.
              The chronicling of the last blind child and how he became the best
              player in the world. 
            </p>
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default About;
