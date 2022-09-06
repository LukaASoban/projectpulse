import {
  Dialog,
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { characters, getCharacterByName } from "../../data/characters";

function CharacterDialog() {
  const { character } = useParams();
  const i = getCharacterByName(character!);
  const c = characters[i];

  const [open, setOpen] = useState(true);
  let navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} scroll={"body"}>
      <Card elevation={18} sx={{ minWidth: 345, textAlign: "left" }}>
        <CardMedia component="img" image={c.image} alt={c.name} />
        <CardHeader title={c.name} subheader={c.subHeader} />
        <Stack ml={2} direction={"row"} spacing={1}>
          <Chip sx={{ backgroundColor: "#00D4FC" }} label={"Age " + c.age} />
          <Chip
            sx={{ backgroundColor: "#920184", color: "white" }}
            label={c.firstSeen}
          />
        </Stack>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {c.fullDescription
              ? c.fullDescription.split("\n").map((i, key) => {
                  return <p key={key}>{i}</p>;
                })
              : c.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" onClick={handleClose}>
            Close
          </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
}

export default CharacterDialog;
