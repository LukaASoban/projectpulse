import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";

interface EpisodeCardProps {
  showName: string;
  episodeTitle: string;
  description: string;
  image: string;
}

function EpisodeCard(props: EpisodeCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 343,
        margin: "auto",
        borderRadius: 12,
        padding: 3,
        boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
      }}
    >
      <CardMedia
        sx={{
          borderRadius: 6,
          width: "100%",
          height: 0,
          paddingBottom: "75%",
          backgroundColor: "rgba(0, 0, 0, 0.08)",
        }}
        image={props.image}
      ></CardMedia>
      <CardContent>
        <Typography
          component={"span"}
          sx={{
            display: "block",
            textAlign: "center",
            color: "#9e9e9e",
            letterSpacing: "2px",
            fontSize: 14,
            marginTop: 3,
          }}
        >
          {props.showName}
        </Typography>
        <Typography
          component={"h4"}
          sx={{
            textAlign: "center",
            fontSize: 32,
            lineHeight: 2,
            fontWeight: 300,
            fontFamily:
              // eslint-disable-next-line max-len
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            marginBottom: "0.72em",
            "&:after": {
              content: '""',
              width: 24,
              height: 2,
              backgroundColor: "#ddd",
              display: "block",
              margin: "8px auto",
              borderRadius: 2,
            },
          }}
        >
          {props.episodeTitle}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 14,
            color: "#222",
            lineHeight: 1.75,
            width: "88%",
            margin: "0 auto",
          }}
        >
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default EpisodeCard;
