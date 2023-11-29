import React from "react";
import useFitText from "use-fit-text";

interface TOCItemProps {
    page: number;
    book: React.MutableRefObject<any>;
    portrait: boolean;
    numItems: number;
    children: React.ReactNode;
  }
  
  export const ContentIndex = ({
    page,
    book,
    portrait,
    numItems,
    children,
  }: TOCItemProps) => {
    const { fontSize, ref } = useFitText({
      minFontSize: 20,
      maxFontSize: 100,
      resolution: 5,
    });
  
    return (
      <div
        onClick={() => {
          book.current
            .pageFlip()
            .flip(portrait ? page : page % 2 === 0 ? page - 2 : page - 1, "top");
        //  page returns the page number
        }}
        className="flex justify-between cursor-pointer w-full md:w-[90%] text-base"
      >
        <h5
          className="hover:underline whitespace-nowrap"
          style={{ fontSize, height: "2em", width: "90%" }}
          ref={ref}
        >
          {children}
        </h5>
        <h6 className="ml-2">{page}</h6>
      </div>
    );
  };