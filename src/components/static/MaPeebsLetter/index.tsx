import React from "react";

import data from '@/data/maPeebsParlor'

const { letter } = data

export const MaPeebsLetter = () => {
  return (
    <div>
      <div className="flex flex-col gap-[25px]">
        <div className="h-[430px] xl:h-[360px] lg:h-[360px] md:h-[360px] w-[450px] xl:w-[615px] lg:w-[615px] md:w-[615px]">
          <div className="bg-none md:bg-Frame bg-no-repeat flex justify-center items-center w-full h-full">
            <div className="p-[30px] h-full mt-[60px]">
              <h2 className="font-['source-code-pro'] xl:text-4xl lg:text-4xl md:text-4xl text-3xl font-semibold  text-center text-[#1B1E21] p-[15px]">
                {letter.heading}
              </h2>
              
              <p className="text-base font-normal flex items-center font-['source-code-pro'] py-[10px] px-[15px]">
                {letter.salutation}
              </p>
              {letter.body.map((p, i)=>(
                <p key={`letterbody_${i}`} className="text-base font-normal flex items-center font-['source-code-pro'] py-[10px] px-[15px]">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaPeebsLetter;
