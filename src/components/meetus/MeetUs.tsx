import "./MeetUs.scss";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Link,
} from "@mui/material";
import Footer from "../footer/Footer";
import { Masonry } from "@mui/lab";
import { cast, creators } from "../../data/cast";

function MeetUs() {
  return (
    <Box
      className="meet-us-body"
      sx={{
        height: "100%",
        paddingTop: "100px",
      }}
    >
      <Box m={5}>
        <Box marginBottom={"50px"}>
          <Typography
            className="meet-title"
            fontFamily={"Share Tech Mono"}
            variant="h3"
            color="white"
          >
            Meet Us
          </Typography>
        </Box>
        <Masonry
          columns={{ xs: 1, sm: 2, md: 3 }}
          spacing={8}
          sx={{
            backgroundColor: "transparent",
            alignContent: "center",
            alignSelf: "center",
          }}
        >
          {creators.map((member) => (
            <Card elevation={18} sx={{ minWidth: 345, textAlign: "left" }}>
              <CardMedia
                component="img"
                // height="240"
                image={member.image}
                alt={member.name}
              />
              <CardHeader title={member.name} subheader={member.title} />
              {member.aboutMe && (
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {member.aboutMe}
                  </Typography>
                </CardContent>
              )}
            </Card>
          ))}
        </Masonry>
      </Box>
      <Box m={5}>
        <Box marginBottom={"50px"}>
          <Typography fontFamily={"Share Tech Mono"} variant="h4" color="white">
            Meet the Cast
          </Typography>
        </Box>
        <Masonry
          columns={{ xs: 1, md: 2, lg: 3 }}
          spacing={8}
          sx={{
            backgroundColor: "transparent",
            alignContent: "center",
            alignSelf: "center",
          }}
        >
          {cast.map((member) => (
            <Link href={member.link} target="_blank" rel="noopener">
              <Card elevation={18} sx={{ minWidth: 345, textAlign: "left" }}>
                <CardMedia
                  component="img"
                  // height={"350px"}
                  // width={"50%"}
                  image={member.image}
                  alt={member.name}
                />
                <CardHeader title={member.name} subheader={member.character} />
              </Card>
            </Link>
          ))}
        </Masonry>
      </Box>
      <Footer />
    </Box>
  );
}

export default MeetUs;
