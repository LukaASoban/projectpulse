import { Masonry } from "@mui/lab";
import {
  Typography,
  Box,
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
} from "@mui/material";
import { Stack } from "@mui/system";
import { characters } from "../../data/characters";
import Footer from "../footer/Footer";
import { AnimationOnScroll } from "react-animation-on-scroll";

function World() {
  return (
    <Box
      sx={{
        height: "100%",
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(0deg,rgba(0, 218, 255, 1) 0%,rgba(0, 0, 0, 1) 100%)",
      }}
    >
      <Box pt={"100px"}>
        <Typography fontFamily={"Share Tech Mono"} variant="h4" color="white">
          The World of Project Pulse
        </Typography>
      </Box>
      <Typography
        sx={{ marginTop: "5%", marginBottom: "2%" }}
        variant="h5"
        color="white"
      >
        Characters
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Masonry
          columns={{ xs: 1, sm: 2, md: 3 }}
          spacing={8}
          sx={{
            backgroundColor: "transparent",
            alignContent: "center",
          }}
        >
          {characters.map((character) => (
            <AnimationOnScroll
              initiallyVisible
              animateIn="animate__pulse"
              animateOnce={true}
            >
              <Card elevation={18} sx={{ minWidth: 345, textAlign: "left" }}>
                <CardMedia
                  component="img"
                  image={character.image}
                  alt={character.name}
                />
                <CardHeader
                  title={character.name}
                  subheader={character.subHeader}
                />
                <Stack ml={2} direction={"row"} spacing={1}>
                  <Chip
                    sx={{ backgroundColor: "#00D4FC" }}
                    label={"Age " + character.age}
                  />
                  <Chip
                    sx={{ backgroundColor: "#920184", color: "white" }}
                    label={character.firstSeen}
                  />
                </Stack>

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {character.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </AnimationOnScroll>
          ))}
        </Masonry>
      </Box>

      <Footer />
    </Box>
  );
}

export default World;
