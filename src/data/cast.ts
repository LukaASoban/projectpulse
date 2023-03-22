import Jeremy from "../assets/images/jeremy.jpeg";
import Luka from "../assets/images/luka.png";
import Ryan from "../assets/images/ryan.png";
import Nina from "../assets/images/actors/NinaNikolic-Mia.jpeg";
import Joe from "../assets/images/actors/joe-kato.jpg";
import Scott from "../assets/images/actors/ScottTippens-PaulWalker.jpeg";
import Courtney from "../assets/images/actors/Courtney.png";
import Milli from "../assets/images/actors/MilliCul.png";
import Jessica from "../assets/images/actors/JessicaElaineJacobs-KaylaBryant.webp";
import Daniel from "../assets/images/actors/DanielZbel-BarryWatt.webp";
import Rob from "../assets/images/actors//RobMilton-MarkHall.webp";
import Czath from "../assets/images/actors/NathanielWilliamsAKAVoiceOfCzath-Hades.jpeg";
import SlipStreamer from "../assets/images/actors/slipstreamer-GarrettGilheart.webp";

interface Creator {
  name: string;
  title: string;
  image: string;
  aboutMe?: string;
}

interface CastMember {
  name: string;
  character: string;
  image: string;
  link?: string;
}

export const creators: Creator[] = [
  {
    name: "Ryan Tippens",
    title: "Director and Audio Engineer",
    image: Ryan,
  },
  {
    name: "Luka Antolic-Soban",
    title: "Producer",
    image: Luka,
  },
  {
    name: "Jeremy Thomens",
    title: "Graphic Designer and World Builder",
    image: Jeremy,
  },
];

export const cast: CastMember[] = [
  {
    name: "Nina Nikolic",
    character: "Mia Clark",
    image: Nina,
    link: "https://www.ninanikolic.com/",
  },
  {
    name: "Joe Goffeney",
    character: "Kato Atadori",
    image: Joe,
    link: "https://www.jgoffeneyva.com/",
  },
  {
    name: "Scott Tippens",
    character: "Paul Walker",
    image: Scott,
  },
  {
    name: "Courtney Lucien",
    character: "Emma",
    image: Courtney,
    link: "https://www.courtneylucien.com/",
  },
  {
    name: "Milli Cul",
    character: "Catherine Walker",
    image: Milli,
    link: "https://www.fiverr.com/milluwette",
  },
  {
    name: "Jessica Elaine Jacobs",
    character: "Kayla Bryant",
    image: Jessica,
    link: "https://jessicaelainejacobs.com/",
  },
  {
    name: "Daniel Zbel",
    character: "Barry Watt",
    image: Daniel,
    link: "https://www.linkedin.com/in/danielzbel/",
  },
  {
    name: "Rob Milton",
    character: "Mark Hall",
    image: Rob,
    link: "https://www.fiverr.com/robmilton",
  },
  {
    name: "SlipStreamer",
    character: "Garret Gilheart",
    image: SlipStreamer,
    link: "https://www.fiverr.com/slipstreamer",
  },
  {
    name: "Nathaniel Williams / Voice of Czath",
    character: "Hades",
    image: Czath,
    link: "https://www.fiverr.com/voice_of_czath",
  },
];
