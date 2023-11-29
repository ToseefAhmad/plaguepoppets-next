"use client";

import { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";

import { data } from "./component/Data/index";
import text from "@/data/text.json";

function Page() {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleOnExpand = (id: any, idx: number) => {
    if (expandedIndex === idx) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(idx);
    }
  };
  return (
    <div>
      <div className="bg-pagebg  bg-no-repeat bg-cover bg-center ">
        <div className="flex flex-col py-[150px] justify-center">
          <h1 className="flex justify-center text-white text-2xl xl:text-4xl lg:text-3xl font-semibold font-['source-code-pro']">
            {text.About_Plague_Poppets.main_heading}
          </h1>

          {data?.map((item, idx) => (
            <div key={idx} className="pt-[30px] flex flex-col gap-[20px] pb-[5px] flex-wrap justify-center items-center">
              <div
                key={item.id}
                className={`text-white  w-[50%] min-w-[400px] p-[25px] rounded-[20px] flex flex-col  gap-[10px] backdrop-blur-{3px} backdrop-filter bg-[black] bg-opacity-40 ${
                 expandedIndex === -1 ? "h-[100px]" : "h-fit"
                }`}
              >
                <div
                  className="flex justify-center items-center cursor-pointer"
                  onClick={() => handleOnExpand(item.id, idx)}
                >
                  <div className="w-full text-white text-lg xl:text-2xl lg:text-2xl font-semibold font-['source-code-pro']">
                    {item.question}
                  </div>
                  { expandedIndex === idx ? <PlusCircleIcon /> : <MinusCircleIcon />}
                  
                </div>
                <div
                  className={`${expandedIndex === idx ? "block" : "hidden"}`}
                >
                  {item.answer.map((para) => (
                    <>
                      <p className="xl:text-base lg:text-base text-sm">
                        {para}
                      </p>
                      <br />
                    </>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Page;
