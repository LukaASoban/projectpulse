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

export interface Character {
  name: string;
  subHeader: string;
  age: number;
  image: string;
  firstSeen: string;
  description: string;
  fullDescription?: string;
}

export function getCharacterByName(name: string): number {
  return characters.findIndex((obj) => obj.name === name);
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
    fullDescription: `
        
        Mia, an only child, was born into a loving, middle class family with little to complain about. Her childhood was a happy one, full of affection from her parents. Everything was perfect, until the large quantity of stocks her mother placed in a company named Octic exploded almost overnight as the company skyrocketed and took over nearly all technological advancements for the next decade. Octic created a brand new world, one that introduced humanity to freedom they weren’t entirely prepared for, and this was especially true for the Clarks.\n 

Having always lived comfortably, the Clark family settled into the new status quo as they had before the shift. But once their friends and relatives became aware of their exorbitant wealth, social pressure and expectations pulled them along like a current until Octic board meetings and extravagant social engagements dominated their life. For Mia, it was an overwhelming string of blinding lights and lonely nights surrounded by a sea of strangers with hollow words and fake smiles.\n

But just as quickly as it came, it was gone, and so were her parents. No one ever really told her how they died, but with her parents gone, she and her inherited fortune went to live with her only living relative: her uncle. Uncle Heath, her loving mother’s older brother, was once a man full of joy who took pride in his work. Before Octic’s rise, Heath loved working with his hands, often as a construction worker. But once the world shifted and blue collar labor was made obsolete, uncle Heath’s hands became cold from disuse. In the confusion of a life now without meaning, he slowly turned to beer, liquor, then so much more as he tumbled down a hole that felt cozier by the moment.\n

On the day Mia’s parents died, Health was notified, and he tried his best to pull himself back together into some semblance of a person for her. But habit and temptation won out. At first, Heath joined Mia in her family's old penthouse in Atlanta. But after countless incidents in the hotel, they were eventually thrown out and slowly slid down the poverty line until they found themselves in a broken down, two bedroom apartment in the wrong part of town.\n 

Mia, still a minor, did not have access to her full wealth. Each month she would receive a rather sizable stipend that could have easily kept herself and her uncle afloat in a comfortable loft uptown, but her uncle’s demons saw that lifeline drunk, smoked, snorted, and pissed away. Mia was trapped. Her once beloved uncle, now a shell of his former self, yet he was the only reminder of the loving family she once had. Unable to bring herself to leave him, she instead resigned to a life being dragged down with him.\n

Over the years, Mia’s constant disappointment in her uncle, herself, and the world has left her jaded and distrustful. She is slow to love and quick to anger, putting on a rough exterior to most, except ones in need. Deep down though, she has an overwhelming desire to do good and bring joy to others. It is this deep seeded desire, given to her by the memory of her parents, that keeps her in conflict with herself day in and day out.

        
        `,
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
    fullDescription: `
    Kato Atadori, age 22, was born in the city of Atlanta, Georgia. And from the very moment he could walk, he claimed the city for his own. As a third generation Japanese American, he enjoys his heritage, but lacks the accent his mother and father have mere traces of themselves. Instead, like his younger sister, everything that defined who he was from a young age was found on the streets of Atlanta. So when he turned twelve years old and the city, no, the entire world, flipped on its head, Kato went happily right along with it.\n

Octic, a tech company specializing in augmented reality, rose out of nowhere to tower above humanity and gave to its people decades of technological and scientific advancement in a matter of months. The world was changed overnight, but Kato could barely bring himself to notice. His eyes were fixed on one thing. One incredible change Octic brought along with its ascent. Project Pulse.\n

A sport unlike any other, Pulse was a living dream for young boys and girls enamored with fantasy, sci-fi, and competition, as they stepped out on that court with the help of augmented reality to face down their opponents with might, magic, and cunning abilities. Pulse was a simulated arena match invented by Octic to give back to the people of the world and prove what new heights were achievable for humanity. It quickly became the greatest sport in the world, and Kato was sold.\n

While his sister’s view of Octic grew more and more grim, Kato ignored her protests and spent the next ten years honing his skills on the Pulse courts of Atlanta. By the end of it, now at the age of 22, he is a local legend. Known for his quick wit and brilliant strategy, Kato is often hounded by recruiting pro teams. But in the end, he turns each and every one of them down in favor of building his own team with players he knows can reach the heights he envisions.\n

For the last two years, Kato has played alongside Mia Clark and Kenneth Holstet, an incredible trio quickly building it’s reputation across the country. But just as the future he longed for came into view, Kenneth went behind the team's back and accepted an offer to join a professional team called the Shadows of Chicago.\n

In this first scene we find Kato a week after Kenneth delivered his news and left Kato and Mia behind. With a qualifier match for the local tournament coming up, Kato heads for Ponce City Market to meet Mia and discuss the situation. On his way though, a commotion from a local Pulse court called “The Yard” draws his attention and he goes to investigate.\n

Kato is a calm and analytical presence. While he is effortlessly cool, sometimes to the point of seeming cold (envision Killua from Hunter x Hunter or Sasuke from Naruto in these situations), he has a natural charisma when speaking to those he likes. This gives Kato the ability to easily make friends and his genuine kindness constantly attracts people to him. In the end, everyone wants to be his friend. While he knows the effect he can have on people, he chooses not to abuse it. But in his head, just like when he’s on the Pulse court, he uses his quick thinking, reaction time, and situational awareness to stay five steps ahead of his opponents and allies, controlling the fight subtly to bring about one win after the other.

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
    fullDescription: `
    Paul Walker, age 53, grew up in a time before the world flipped on its head. He lived a normal life as an electrical engineer until he met the woman who charmed the very floor out from beneath his feet. Her name was Cathrine, Cat to anyone who didn’t want her response to be an uncharacteristically cold, cutting glare. She was a beacon of optimism and adventure to all around her and that light wrapped its way around Paul until he couldn’t imagine a moment of his life could be worth living without basking in her effervescent glow. Together they soared through life, Cat leading Paul by the hand as they sought out the grandest adventures, until they reached their greatest one yet.\n

Despite Cat’s unfortunate birthright, a hereditary disease resulting in a lifetime spent in a wheelchair, they had two children, Derrick and Katie. Led by Cat, the Walker family experienced everything the world had to offer. And when the rise of the largest tech company in the world, Octic, changed the way the world worked entirely; Paul and the children could do nothing but run to keep up as Cat explored everything this new life had to offer.\n

But one day that endless, wonderful sprint into the unknown came to a crashing halt. A small apartment building caught fire before their eyes and Paul’s future turned to ash within it as Cat dove head first inside to rescue as many as she could. In the face of that terror, she didn’t flinch. But he did. And to this day somewhere deep down he blames himself for her death. It doesn’t matter how many she saved or how many called her a hero, to him she was just… gone. And there were no words or sentiments that could grasp the wheel and guide the Walker family back on course.\n

Paul tried, of course, but he was a poor substitute for the brilliant captain they lost. Slowly the family slid into monotony, and grief shrouded every step Paul took until the only thing he could see in front of him was what else he might lose. Nearly two years later to the day, his fears were answered and his daughter Katie slipped into a coma that left doctors stumped and Paul terrified. Now, left with only his son and the faintest desperate hope of his daughter returning to him, Paul is a shell of his former self. Terrified by anything that might take more from him, Paul is overprotective of Derrick and Paul’s worry stands to drown Derrick and turn him resentful towards his father.

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
    fullDescription: `
    Catherine Walker, now deceased, would have been 48 years old in the year our show takes place. Born with a hereditary disease, Catherine spent her life confined to a wheelchair, though to say she was hindered in any way would be laughable. Catherine lived her life to the fullest, bringing joy to all who met her along her travels and philanthropic work. It was often said that you had but a moment to see the wheelchair she lived in, for once she began to speak it became startlingly clear how far above you she truly stood.\n

In stark contrast to her long list of accomplishments, she remained ever humble, warm, and inviting to all. This was true to no one more so than her soon to be husband, Paul Walker. From the moment they met, Paul followed Catherine happily to the ends of the Earth. While possessing a meek heart himself, Paul could easily let go and allow himself to be swept away in Catherine’s ever inviting current.\n

Eventually, Catherine and her husband settled down in the southeast region of the United States and started a family. Derrick, their oldest, was followed quickly by Katie, who was named after her mother. The four of them lived a joy filled and wondrous life together for many years, happily led by Catherine as they saw adventure after adventure. But one day, Catherine’s bleeding heart saw her end come far too soon.\n

While walking the streets of Atlanta one day with her son, Catherine witnessed the start of a horrible fire that trapped many within a small apartment building. Unable to simply stand by and watch, as if that had ever even crossed her mind as an option to begin with, Catherine left her son behind and threw herself into the blaze. In the end, Catherine saved dozens of lives. But their lives came at the cost of her own.\n

Now four years later, the family Catherine left behind is still in disrepair from the loss. Paul has done what he can, but without Catherine’s guiding light he remains lost and terrified of losing more. In the following scene, Catherine appears to Derrick as a vision/memory to give him hope and keep him going in difficult moments. Scene four in particular takes an excerpt from the speech Cathrine gave her son four years ago before leaving him behind on the sidewalk to save who she could from that burning building.

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
    fullDescription: `
    Born in Chicago, Illinois into a family of twelve, Barry Watt enjoyed a uniquely chaotic and surprisingly loving childhood. His parents cared for Barry and his siblings with all their hearts, doing everything in their power to protect them from the rough streets of Chicago. But when Barry was introduced into the real world after being homeschooled until high school, the culture shock shattered his reality.

Trusting and caring, he was an easy target and the bullies of his Chicago high school took it upon themselves to educate him on his misconceptions. For months Barry hid his problems from his family, silently enduring the ridicule and abuse as it slowly chipped away at his soul. Until one particularly rough day, when a group of boys jumped him in an alley on his way back from school. It was in that moment, a moment Barry hated most: curled desperately in the fetal position as a storm of kicks rained down over him, that she entered his life.\n

Kayla Bryant was an oil fire. Out of control and ready to go off the second you tried to handle her with any ‘standard procedure.’ She lived for the infamy her crazy, ‘Harley Quinn’ persona brought her and made a point of taking the road no one traveled. Backwards. And all by herself. So when she stepped into the alley that day to not only send Barry’s bullies packing, but also extend a hand of, well we’ll call it friendship, to Barry himself, the most unlikely and bizarre pair was formed.\n

From that day on, Barry and Kayla were inseparable. Kayla kept Barry safe and Barry kept Kayla sane. Mostly. But the rescue came a bit too late for Barry to keep his old, caring soul. He had become jaded and quick to anger, trying his best to craft a persona of his own to cover his instincts of compassion and love.\n

Along with his new life, Kayla introduced Barry to his first and only love: a sport called Pulse, which resembles a team-based gladiatorial fight. And as luck would have it, he was damn good. So Kayla and Barry played. They played everyday, winning far more than they lost, until they stopped losing all together. They made a name for themselves on the streets and in the parks of their city: the “Shadows of Chicago,” and this infamy quickly reached Vortex, a professional Chicago based sports organization looking to cultivate young talent for their professional Pulse team. It wasn’t long before Vortex extended an offer to the duo, and after continually sweetening the pot until it was to Kayla’s liking, the pair accepted.\n 

Now three years later, Barry (age 21) finds himself at the height of his fame and his personality nearly flipped from his childhood years. Jaded by his past yet inflated by his success, Barry holds the persona of a brutal, ruthless king of the court. The pair, currently in Atlanta meeting with their newest teammate, decided to test the local talent at a Pulse park (a collection of courts used to play Pulse) near their hotel. They find themselves facing off with Kato, a minor local legend of the area and the player their new teammate warned them about earlier that day.

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
    fullDescription: `
    Born onto the streets of Chicago, Illinois, Kayla Bryant knew only hardship from a young age. Her parents, whoever they were, didn’t want her and apparently neither did anyone else as she got shipped from foster home to foster home. Kayla had tried at first. She tried to be sweet and loving, but both left bad tastes in her mouth each time she got passed over by potential parents for a less ‘feral’ option. By her tenth birthday, options were bleak. Her only real solace came from nightly strolls through the city alleyways. But one night, she found something that changed her whole outlook: a comic book.\n

This was no ordinary comic book though. Not like the ones her ‘brothers’ had about roided up dudes flying around being stupid. No. This one was about a real princess of chaos. As Kayla peeled back the cover she found her new life wrapped in the arms of Harley Quinn.\n

From then on, Kayla’s world and Kayla herself changed forever. She did everything she could to resemble Harley, from the attitude and look to the brutality and charm. By the time Kayla got to high school no one could stop her. Kayla Bryant was an oil fire, out of control and ready to go off the second you tried to handle her with any ‘standard procedure.’ She lived for the infamy her crazy, ‘Harley Quinn’ persona brought her and made a point of taking the road no one traveled. Backwards. And all by herself. That was until she stepped into that alley.\n

When she rounded the corner and found six guys railing into some sad boy on the ground, she was pulled back to her childhood years as potential parents stared down at her in disgust, laying into her with vicious hurtful words. She snapped, and by the end of it, so did those six boys. She sent them running, beat and bruised, howling curses over their shoulders. And then they were alone: ‘Harley’ and this poor sad boy in front of her. He was trapped in his painful reality, like she had been. So, without another thought, Kayla extended a hand and that was that.\n

Kayla, and the boy she found out was named Barry, became inseparable. Kayla kept Barry safe and Barry kept Kayla sane. Mostly. And they eventually found new solace together playing a sport called Pulse, which resembles a team-based gladiatorial fight. As luck would have it, they were damn good. So Kayla and Barry played. They played everyday, winning far more than they lost, until they stopped losing all together. They made a name for themselves on the streets and in the parks of their city: the “Shadows of Chicago,” and this infamy quickly reached Vortex, a professional Chicago based sports organization looking to cultivate young talent for their professional Pulse team. It wasn’t long before Vortex extended an offer to the duo, and after continually sweetening the pot until it was to Kayla’s liking, the pair accepted.\n

Now three years later, Kayla (age 22) finds herself at the height of her Pulse fame. The pair, currently in Atlanta meeting with their newest teammate, decided to test the local talent at a Pulse park (a collection of courts used to play Pulse) near their hotel. They find themselves facing off with Kato, a minor local legend of the area and the player their new teammate warned them about earlier that day.

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
    fullDescription: `
    Often mistaken as a simple man, Mark Hall, 31, is the definition of strong, quiet, and blunt. He finds little interest in small talk, seeing it as a waste of effort, especially compared to the care he takes sculpting each thought into exact words before presenting them to the world. Since it came to be, Mark fell in love with the game of Pulse. It was a sport unlike any other, and since he was little he threw himself into every new challenge he could think of. Pulse, of course, was no different.\n

Unfortunately, the years of intense strain were not kind or gentle on Mark. Around the age of twenty-nine his knees began to give out, and where he once had a clear view from the head of the pack, he found it crowded and blocked as he stared at the backs of his advisors. Rather than a slow fall from grace, Mark decided to retire, but couldn’t stray too far from the sport he loved. He picked up a job in a city far away from those who knew him, Atlanta, and now works as an unrecognized guard for a local Pulse Park.

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
    fullDescription: `
    A genius born in the middle of a family of five children, Garrett Gilheart spent his young life yearning to be heard, and in doing so, developed a flair for the dramatic. Through school, he rose to the top of academics and performed in the limelight in any capacity he could: theater, sports, music, and academic competitions. But Garrett never truly lived until a few weeks after his nineteenth birthday when the world changed.\n 

Out of nowhere, his life as he knew it was over, and all he could see was the new stage the world had built for him. Pulse, a futuristic sport akin to team-based gladiatorial combat, took the world by storm and carried Garrett Gilheart along with it. It wasn’t long before Garrett made a name for himself in the arena for his brilliant strategies and ability to orchestrate a full blown performance that ripped the rug out from under his opponents in an instant with a dramatic flourish and a snap of his fingers.\n

Ten years later, Garrett Gilheart now stands as the greatest Pulse player in the world. Though he loves the sport with all his heart, Garrett grows ever restless awaiting a challenger to truly rival his genius. \n

In this scene, we find Garrett at the end of yet another Pulse tournament. His competition, Brock Holdwin, is thought to be the rising star who will finally topple Garrett’s reign. Unfortunately, Garrett has watched Brock’s career closely and remains unconvinced.\n

Garrett is a deceptive and theatrical character who feigns ever changing emotion and intent from line to line in an effort to lead his opponent into believing what they need to believe to finally fall for the trap Garrett has prepared for them. A classy demeanor and/or english accent may help convey his personality, but they are by no means required.

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
    fullDescription: `
    Brock Holdwin, a gruff, hardy young man in his early twenties, is the embodiment of perseverance. When he was first introduced to Pulse, a futuristic sport akin to team-based gladiatorial combat, he fell in love and spent every waking moment dreaming of that arena. As the sport grew before him, he was enamored with the men and women who showed themselves to be the greatest of the great. Brock spent endless hours analyzing these legends of Pulse, until finally he was able to step onto the field as a Pulse player himself and face them.\n

What Brock was greeted with, however, shattered his heart. These “legends” fell before him over and over again with little resistance. To him, their tactics were juvenile and their power: lacking. The thrill he had been seeking all his life became sour in his mouth, and as a result his once endless joy for the game quickly became callus and replaced with anger and ambivalence.\n 

We find Brock at the end of his journey facing down the greatest Pulse player in the world. Instead of pride and excitement, however, Brock feels only resentment and determination. Jaded by disappointment in his former heroes, he pushes forward only to reveal these false “gods” of Pulse to be the weak pretenders they truly are.

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
    fullDescription: `
    Hades, lord of the Underworld, bears a close resemblance to the traditional Greek God. Unlike many modern interpretations, Hades is not a villain. Bound by duty and obligation, Hades oversees the souls of the dead and ensures balance for the world. While gruff and intimidating, he is also compassionate in his own way. Though all the while he maintains a regal air of power and control.\n 

In this scene, we find Hades upon his throne in the Underworld. Though he enjoys his work, he is forever bound to the realm he oversees. So, when Derrick appears before him, he takes the rare opportunity to amuse himself.

    `,
  },
];
