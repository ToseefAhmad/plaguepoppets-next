import trait_1 from "@/assets/img/roadmap/roadmap_trait_1.jpg";
import trait_2 from "@/assets/img/roadmap/roadmap_trait_2.jpg";
import trait_3 from "@/assets/img/roadmap/roadmap_trait_3.jpg";
import trait_4 from "@/assets/img/roadmap/roadmap_trait_4.jpg";
import lulu1 from "@/assets/img/roadmap/lulu_1.jpg";
import lulu2 from "@/assets/img/roadmap/lulu_2.jpg";
import luludigital1 from "@/assets/img/roadmap/lulu_digital2_1.jpg";
import luludigital2 from "@/assets/img/roadmap/lulu_digital2_2.jpg";
import luludigital3 from "@/assets/img/roadmap/lulu_digital2_3.jpg";
import luludigital4 from "@/assets/img/roadmap/lulu_digital2_4.jpg";
import luludigital5 from "@/assets/img/roadmap/lulu_digital2_5.jpg";

const journal_video = `${process.env.NEXT_PUBLIC_URL}/video/roadmap/roadmap_journal_small.webm`;

import text from "@/data/text.json";

export const data = [
    {
        id: 1,
        name: "High Quality Art",
        img_set1 : [luludigital1, luludigital2, luludigital3],
        img_set2 : [luludigital4, luludigital5],
        img_set3 : [lulu1, lulu2],
        text : text.Roadmap.features.highQualityArt
    },
    {
        id: 2,
        name: "Swappable Traits",
        img_set1 : [trait_1, trait_2],
        img_set2 : [trait_3, trait_4],
        text : text.Roadmap.features.swappableTraits
    },
    {
        id: 3,
        name: "AR Journaling",
        video : journal_video,
        text : text.Roadmap.features.ARJournal
    },
    {
        id: 4,
        name: "Call to Action",
        text : text.Roadmap.features.callToAction
    }
]

export default data;