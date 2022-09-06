import Derrick from "../assets/images/characters/derrickWalker.png";
import Barry from "../assets/images/characters/barryWatt.png";
import Brock from "../assets/images/characters/brock.png";
import Catherine from "../assets/images/characters/catherineWalker-edited.png";
import Emma from "../assets/images/characters/emma.png";

import Garret from "../assets/images/characters/garret-edited.png";

import Kato from "../assets/images/characters/katoAtadori.png";

import Kayla from "../assets/images/characters/kaylaBryant.png";

import MarkBolt from "../assets/images/characters/markBolt-edited.png";

import MarkHall from "../assets/images/characters/markHall.png";
import Mia from "../assets/images/characters/miaClark-edited.png";
import Nolewood from "../assets/images/characters/nolewood.png";
import PaulWalker from "../assets/images/characters/paulWalker-edited.png";
import Hades from "../assets/images/characters/hades.png";

interface Character {
  name: string;
  subHeader: string;
  age: number;
  image: string;
  firstSeen: string;
  description: string;
}

/**
 * Every character in Pulse will be listed here. Updated regularly as new episodes come out.
 */
export const characters: Character[] = [
  {
    name: "Derrick Walker",
    subHeader: "Main Protagonist",
    age: 15,
    image: Derrick,
    firstSeen: "Episode 1",
    description: `Derrick Walker is a kid from Atlanta, GA. Ever since he was a young child, he would listen
        to Pulse tournaments on his parents TV. He is the last person on earth who is blind. Blindness, along 
        with other disabilities, have been eradicated with technilogical advancements of this new age. Now, with the
        help of his friends, he aims to become the greatest Pulse player there ever was
        ...`,
  },
  {
    name: "Mia Clark",
    subHeader: "Friend of Derrick",
    age: 17,
    image: Mia,
    firstSeen: "Episode 3",
    description: `Mia, an only child, was born into
       a loving, middle class family with little to complai
       n about. Her childhood was a happy one, full of affection f
       rom her parents. Everything was perfect, until the large quantity of stocks
        her mother placed in a company named Octic exploded almost overnight as the company 
        skyrocketed and took over nearly all technological advancements for the next decade. 
        Octic created a brand new world, one that introduced humanity to freedom they weren’t 
        entirely prepared for, and this was especially true for the Clarks...`,
  },
  {
    name: "Kato Atadori",
    subHeader: "Friend of Derrick",
    age: 22,
    image: Kato,
    firstSeen: "Episode 1",
    description: `Kato Atadori, age 22, was born in the city of Atlanta, Georgia. And from the very 
    moment he could walk, he claimed the city for his own. As a third generation Japanese American, 
    he enjoys his heritage, but lacks the accent his mother and father have mere traces of themselves. 
    Instead, like his younger sister, everything that defined who he was from a young age was found on the 
    streets of Atlanta. So when he turned twelve years old and the city, no, the entire world, flipped on its 
    head, Kato went happily right along with it...
    `,
  },
  {
    name: "Brent Nolewood",
    subHeader: "CEO of Octic",
    age: 45,
    image: Nolewood,
    firstSeen: "Episode 1",
    description: `The elusive CEO of Octic, the company that invented Project Pulse. He keeps out of the press
    as much as he can. No one knows how he looks like.
        ...`,
  },
  {
    name: "Mark Bolt",
    subHeader: "Lead Shout-Caster for Project Pulse",
    age: 45,
    image: MarkBolt,
    firstSeen: "Episode 1",
    description: `Mark Bolt is the lead shout-caster and has been the sole caster for the past few years since Octic released Project Pulse.
    No one can match his energy. He came out of no-where and ever since his debut, people have taken his voice and create multiple AI versions of his persona.
    You can find these AI versions of Mark Bolt all around the country.
        ...`,
  },
  {
    name: "Paul Walker",
    subHeader: "Father of Derrick",
    age: 53,
    image: PaulWalker,
    firstSeen: "Episode 1",
    description: `Paul Walker, age 53, grew up in a time before the world flipped on its head. 
    He lived a normal life as an electrical engineer until he met the woman who charmed the very 
    floor out from beneath his feet. Her name was Cathrine, Cat to anyone who didn’t want her response 
    to be an uncharacteristically cold, cutting glare. She was a beacon of optimism and adventure to 
    all around her and that light wrapped its way around Paul until he couldn’t imagine a moment of 
    his life could be worth living without basking in her effervescent glow. Together they soared 
    through life, Cat leading Paul by the hand as they sought out the grandest adventures, until 
    they reached their greatest one yet...
    `,
  },
  {
    name: "Catherine Walker",
    subHeader: "Mother of Derrick",
    age: 48,
    image: Catherine,
    firstSeen: "Episode 1",
    description: `Catherine Walker, now deceased, would have been 48 years old in the year our show takes
     place. Born with a hereditary disease, Catherine spent her life confined to a wheelchair, 
     though to say she was hindered in any way would be laughable. Catherine lived her life to the fullest, 
     bringing joy to all who met her along her travels and philanthropic work. It was often said that you 
     had but a moment to see the wheelchair she lived in, for once she began to speak it became startlingly 
     clear how far above you she truly stood...
    `,
  },
  {
    name: "Emma",
    subHeader: "Derrick's AI Companion",
    age: 0,
    image: Emma,
    firstSeen: "Episode 1",
    description: `Emma, an artificial intelligence generated on the day Derrick (the main protagonist) 
    first created an Octic account, is an often sassy and playful companion to her human counterpart, 
    Derrick. She works alongside Derrick as the bridge between him and the Octic network (which replaced 
        the internet during the meteoric rise of the company Octic.) While happy in her position as Derrick’s 
        AI partner and best friend, she enjoys the liberties her coded personality affords her, usually 
        refusing or bantering before giving Derrick what he asks for. Deep down though, as an AI there is 
        always a fear that if she were to go too far in her playful defiance she might one day push Derrick 
        to a point where he resets her to factory settings, essentially deleting who she is entirely
    ...
    `,
  },
  {
    name: "Barry Watt",
    subHeader: "Shadows of Chicago",
    age: 21,
    image: Barry,
    firstSeen: "Episode 2",
    description: `Born in Chicago, Illinois into a family of twelve, Barry Watt enjoyed a uniquely chaotic
     and surprisingly loving childhood. His parents cared for Barry and his siblings with all their hearts, 
     doing everything in their power to protect them from the rough streets of Chicago. But when Barry was 
     introduced into the real world after being homeschooled until high school, the culture shock shattered 
     his reality ...
    `,
  },
  {
    name: "Kayla Bryant",
    subHeader: "Shadows of Chicago",
    age: 21,
    image: Kayla,
    firstSeen: "Episode 2",
    description: `Born onto the streets of Chicago, Illinois, Kayla Bryant knew only hardship from a young age. 
    Her parents, whoever they were, didn’t want her and apparently neither did anyone else as she got shipped 
    from foster home to foster home. Kayla had tried at first. She tried to be sweet and loving, but both left 
    bad tastes in her mouth each time she got passed over by potential parents for a less ‘feral’ option. By her 
    tenth birthday, options were bleak. Her only real solace came from nightly strolls through the city alleyways. 
    But one night, she found something that changed her whole outlook: a comic book ...
    `,
  },
  {
    name: "Mark Hall",
    subHeader: "Piedmont Park Pulse Court Guard",
    age: 31,
    image: MarkHall,
    firstSeen: "Episode 2",
    description: `Often mistaken as a simple man, Mark Hall, 31, is the definition of strong, quiet, 
    and blunt. He finds little interest in small talk, seeing it as a waste of effort, especially 
    compared to the care he takes sculpting each thought into exact words before presenting them to 
    the world. Since it came to be, Mark fell in love with the game of Pulse. It was a sport unlike 
    any other, and since he was little he threw himself into every new challenge he could think of. 
    Pulse, of course, was no different...
    `,
  },
  {
    name: "Garrett Gilheart",
    subHeader: "Pulse Champion",
    age: 28,
    image: Garret,
    firstSeen: "Episode 1",
    description: `A genius born in the middle of a family of five children, Garrett Gilheart 
    spent his young life yearning to be heard, and in doing so, developed a flair for the dramatic. 
    Through school, he rose to the top of academics and performed in the limelight in any capacity 
    he could: theater, sports, music, and academic competitions. But Garrett never truly lived until 
    a few weeks after his nineteenth birthday when the world changed...
    `,
  },
  {
    name: "Brock Holdwin",
    subHeader: "Pulse Runner-Up",
    age: 29,
    image: Brock,
    firstSeen: "Episode 1",
    description: `Brock Holdwin, a gruff, hardy young man in his early twenties, 
    is the embodiment of perseverance. When he was first introduced to Pulse, a 
    futuristic sport akin to team-based gladiatorial combat, he fell in love and 
    spent every waking moment dreaming of that arena. As the sport grew before him, 
    he was enamored with the men and women who showed themselves to be the greatest 
    of the great. Brock spent endless hours analyzing these legends of Pulse, until 
    finally he was able to step onto the field as a Pulse player himself and face them...
    `,
  },
  {
    name: "Hades",
    subHeader: "God",
    age: 1800000,
    image: Hades,
    firstSeen: "Episode 3",
    description: `Hades, lord of the Underworld, bears a close resemblance to the traditional Greek God. 
    Unlike many modern interpretations, Hades is not a villain. Bound by duty and obligation, Hades 
    oversees the souls of the dead and ensures balance for the world. While gruff and intimidating, 
    he is also compassionate in his own way. Though all the while he maintains a regal air of power and control. 
    ..
    `,
  },
];
