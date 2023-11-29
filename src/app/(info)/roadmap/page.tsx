import Image from "next/image";
import localFont from 'next/font/local';

import text from "@/data/text.json";
import VideoAutoPlay from "@/components/static/VideoAutoPlay";

import { data } from "@/data/roadmap"

import { Source_Code_Pro } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Literata } from 'next/font/google'

const lulu_video = `${process.env.NEXT_PUBLIC_URL}/video/roadmap/lulu_digital2_kisses.webm`;

const belizarius = localFont({src: '../../../assets/fonts/Belizarius.woff'})

const playfair = Playfair_Display({subsets: ['latin']})
const sourceCodePro = Source_Code_Pro({subsets: ['latin']})
const literata = Literata({subsets: ['latin']})


export default function Page() {
  return (

      <div className="bg-pagebg bg-no-repeat bg-cover bg-center pt-[100px]">
        <h1 className={`${belizarius.className} text-yellow-400 text-center mt-6 p-[1vh]`}>
          {text.Roadmap.main_heading}
        </h1>
        <p className={`${literata.className} text-white mt-7 text-center pr-10 pl-10`}>
            {text.Roadmap.sub_heading}
        </p>
       
        <div>
          <div className={`${literata.className} w-[90%] contents`}>
            {data.map((feature, idx) => (
                <section key={idx} id={`${feature.id}`}>
                    <h3 className={`${belizarius.className} text-white mt-[40px] text-center p-[1vh]`}>
                        {feature.text.title}
                    </h3>
                    <p className={`${literata.className} text-white text-center mr-6 ml-6 p-[1vh]`}>
                            {feature.text.paragraphs[0]}
                    </p>
                    <div className="flex justify-center space-between">
                        {feature.img_set1 && feature.img_set1.map((img, idx) => (
                            <Image key={idx} src={img} alt="traits" className="m-3 w-[30%]"/>
                        ))}
                        {feature.video && (
                            <VideoAutoPlay src={feature.video} threshold={0.5}/>
                        )}
                    </div>
                    <div className="flex justify-center space-between">
                        {feature.img_set2 && feature.img_set2.map((img, idx) => (
                            <Image key={idx} src={img} alt="traits" className="m-3 w-[40%]"/>
                        ))}
                    </div>

                    {feature.text.paragraphs.map((paragraph, idx) => {
                        if (idx ==0 ) return null;
                        return ( <p key={idx} className={`${literata.className} text-white text-center mr-6 ml-6 p-[1vh]`}>
                                    {paragraph}
                                </p> ) 
                    })}
                    <div className="flex justify-center space-between">
                        {feature.img_set3 && feature.img_set3.map((img, idx) => (
                            <Image key={idx} src={img} alt="traits" className="m-3 w-[20%]"/>
                        ))}
                    </div>
                </section>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-between pb-8 pt-8">
            <VideoAutoPlay src={lulu_video} threshold={0.5}/>
        </div>
      </div>

  );
}
