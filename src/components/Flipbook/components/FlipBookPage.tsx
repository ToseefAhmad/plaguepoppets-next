import React from "react";
import useFitText from "use-fit-text";
import SanitizedHTML from "@/components/static/SanitizedHTML";
import "../style/index.css";
import Image from "next/image";

interface Props {
  data: any;
}

export const Page = React.forwardRef<HTMLDivElement, Props>(function Page( { data },ref) {
  const { fontSize, ref: ftRef } = useFitText({
    minFontSize: 20,
    maxFontSize: 100,
    resolution: 5,
  });

  return (
    <div
      className={`h-[100vh] w-full absolute top-0 bg-repeat-round  text-center `}
      ref={ref}
    >
      <div
        className={`pageWrapperFrame w-full h-full absolute left-0 p-[15%] overflow-visible flex flex-col justify-center bg-cover bg-no-repeat bg-right ${
          data.id >= 0 ? "svgFrame" : ""
        }`}
      >
        <div
          className={`h-full w-full flex flex-col justify-center items-center`}
          style={{ fontSize, height: "100%", width: "100%" }}
          ref={ftRef}
        >
          {data.attributes.bookTitle && data.attributes.bookTitle !== "" && (
            <h3 className="text-[1.7em] font-semibold font-serif sm:pt-[5%]  leading-[25px]">
              {data.attributes.bookTitle}
            </h3>
          )}

          {data.attributes.poppetImage.data &&
            data.attributes.poppetImage.data[0].attributes.formats.medium &&
            data.attributes.poppetImage.data[0].attributes.formats.medium
              .url !== "" && (
              <div className="flex justify-center items-center mt-[5%]">
                <div className="img_corners">
                  <Image
                    src={
                      data.attributes.poppetImage.data[0].attributes.formats
                        .medium.url
                    }
                    className={`max-h-[45vh] max-w-[26vw] md:max-w-[17vw] ${
                      data.attributes.bookTitle || data.attributes.bookDescription
                        ? ""
                        : "-w-[40vw] h-[80vh]"
                    }`}
                    alt="ppooet"
                    width={
                      data.attributes.poppetImage.data[0].attributes.formats
                        .medium.width
                    }
                    height={
                      data.attributes.poppetImage.data[0].attributes.formats
                        .medium.height
                    }
                  />
                </div>
              </div>
            )}

          {data.attributes.bookDescription &&
            data.attributes.bookDescription !== "" && (
              <div className="leftPage-description font-light max-h-[90%] overflow-visible">
                <SanitizedHTML html={data.attributes.bookDescription} />
              </div>
            )}
        </div>
      </div>
    </div>
  );
});
