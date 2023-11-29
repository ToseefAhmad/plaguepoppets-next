import React  from "react";
import text from "@/data/text.json";

 export const data = [
    {
      id: 0,
      question: text.About_Plague_Poppets.question1,
      answer: [
       text.About_Plague_Poppets.answer1.adventures,
       text.About_Plague_Poppets.answer1.crusious,
        text.About_Plague_Poppets.answer1.history,
     text.About_Plague_Poppets.answer1.traits,
      ],
    },
    {
      id: 1,
      question: text.About_Plague_Poppets.question2,
      answer: [
      text.About_Plague_Poppets.answer2.minting,
        text.About_Plague_Poppets.answer2.adoption,
      ],
    },
    {
      id: 2,
      question: text.About_Plague_Poppets.question3,
      answer: [
        text.About_Plague_Poppets.answer3.NFT,
      ],
    },
    {
      id: 3,
      question: text.About_Plague_Poppets.question4,
      answer: [
        text.About_Plague_Poppets.answer4.information,
      ],
    },
  ];
  