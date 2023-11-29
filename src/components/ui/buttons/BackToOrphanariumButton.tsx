import { ReactComponent as LeftMove } from "@/assets/svg/LeftThumb.svg"
import Link from "next/link";

export const BackToOrphanariumButton = () => {
    return (
        <div className="p-[20px] pl-[75px] hidden xl:block lg:block">
          <Link href={"/orphanarium"}>
            <div className="flex justify-start items-center w-full h-[6vh]">
              <LeftMove />
              <button className="bg-white border-2 border-solid border-black rounded-[10px] h-[80%] font-['Playfair-Display'] font-bold leading-[1vh] text-[2vh] py-[1vh] px-[1vw] cursor-pointer  hover:bg-amber-200/20">
                Back to Orphanarium
              </button>
            </div>
          </Link>
        </div>
    )
}