
import { TeamMemberBio } from "@/components/static/TeamMemberBio";
import { data } from "@/data/team"

import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({subsets: ['latin']})


export default function Page() {
  return (
    <>
      <div className="bg-pagebg bg-no-repeat bg-cover bg-center pt-[100px]">
        <h2 className={`${sourceCodePro.className} font-semibold text-white mt-[40px] text-center p-[3vh]`}>
          Our Team Of Haberdashers
        </h2>
       
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-col-2 justify-center">
          <div className={`${sourceCodePro.className} w-[90%] contents`}>
          {data.map((item,id) => (
            <TeamMemberBio {...item} key={`team_member_${item.name}`} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
