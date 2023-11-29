import Massimo from "@/assets/img/team/Massimo.png";
import Sol from "@/assets/img/team/Sol.png";
import Zak from "@/assets/img/team/Zak.png";
import Jed from "@/assets/img/team/Jed.png";
import Alex from "@/assets/img/team/Alex.png";
import Ryan from "@/assets/img/team/Ryan.png";
import TJ from "@/assets/img/team/TJ.png";
import Nikki from "@/assets/img/team/Nikki.png";
import Colby from "@/assets/img/team/Colby.png";
import text from "@/data/text.json";


export const data = [
  {
    id: 1,
    name: "Fulcanelli (Massimo)",
    img: Massimo,
    sub_heading: "Chief Schemer and Techno Crafter",
    description: [text.team.Fulcanelli],
    socials: [
      "https://www.linkedin.com/in/mbardetti/",
      "https://twitter.com/MassimoBardetti"
    ],
  },
  {
    id: 2,
    name: "Bleubury (Sol)",
    img: Sol,
    sub_heading: "Content Visionary and All Things Social",
    description: [text.team.Bleubury],
    socials: ["https://www.linkedin.com/in/keiterstyle/",
      "https://twitter.com/keiterstyle",
      "https://www.instagram.com/keiterstyle/"
    ],
  },
  {
    id: 3,
    name: "Erstwhile (Zak)",
    img: Zak,
    sub_heading: "Make Things Happen",
    description: [text.team.Erstwhile],
    socials: [],
  },
  {
    id: 4,
    name: "Zero (Jed)",
    img: Jed,
    sub_heading: "Creative Director",
    description: [text.team.Zero],
    socials: ["https://www.linkedin.com/in/jedhathaway/",
      "https://twitter.com/JedHathaway",
      "https://www.instagram.com/jedhathaway/"],
  },
  {
    id: 5,
    name: "Foo (Alex)",
    img: Alex,
    sub_heading: "3D Art Direction",
    description: [text.team.Foo],
    socials: ["https://www.linkedin.com/in/mbardetti/",],
  },
  {
    id: 6,
    name: "Strangeruff (Ryan)",
    img: Ryan,
    sub_heading: "Principal Engineer",
    description: [text.team.Strangeruff],
    socials: ["https://twitter.com/sreyeMnayR",],
  },
  {
    id: 7,
    name: "Metric (TJ)",
    img: TJ,
    sub_heading: "All Things Discord and Web3",
    description: [text.team.Metric],
  },
  {
    id: 8,
    name: "Nikki (Nikki A)",
    img: Nikki,
    sub_heading: "Community Manager/Social Content Production",
    description: [text.team.Nikki],
    socials: ["https://twitter.com/NikkiNFT",],
  },
  {
    id: 9,
    name: "Franklin (Colby)",
    img: Colby,
    sub_heading: "Sonic Wonderment",
    description: [text.team.Colby],
    socials: ["https://twitter.com/ActionPosable",],
  }
];

export default data;