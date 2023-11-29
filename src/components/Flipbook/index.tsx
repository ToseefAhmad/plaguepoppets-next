"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import HTMLFlipBook from "react-pageflip";
import "./style/index.css";
import  { TableOfContents }  from "./components/TableOfContent";
import { Page } from "./components/FlipBookPage";

import { Literata } from "next/font/google";

interface FlipBookProps {
  pages: any[];
}

const literata = Literata({subsets:['latin']})

const FlipBook = ({ pages }: FlipBookProps) => {
  // const [page, setPage] = useState(0);

  const [bookData, setBookData] = useState<any[] | null>(null);
  const [size, setSize] = useState({
    height: (window as any).innerHeight,
    width: (window as any).innerWidth,
  });
  const [initialized, setInitialized] = useState(false);
  const book = useRef(null);

  const portrait = useMediaQuery("(orientation: portrait)");

  const updatePage = ({ data }: { data: number }) => {
    console.log(data);
    if (!initialized) {
      setInitialized(true);
    }
  };

  const stateChanged = ({ data }: { data: string }) => {
    console.log(data);
  };



  useEffect(() => {
    setBookData(pages);
  }, [pages]);


  useEffect(() => {
    function handleResize() {
      setSize({ height: window.innerHeight, width: window.innerWidth });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log(size);
  }, [size]);

  return (
    <div className={`${literata.className} w-full h-[100vh] overflow-hidden relative p-0 text-transparent`}>
      {bookData && (
        <HTMLFlipBook
          onFlip={updatePage}
          onChangeState={stateChanged}
          showCover={!portrait}
          height={size.height}
          width={
            size.width > size.height ? size.width * 0.47 : size.width * 0.94
          }
          size="stretch"
          minWidth={
            size.width > size.height ? size.width * 0.4 : size.width * 0.94
          }
          maxWidth={
            size.width > size.height ? size.width * 0.47 : size.width * 0.94
          }
          minHeight={size.height}
          maxHeight={size.height * 2}
          maxShadowOpacity={0.5}
          key={size.width * size.height}
          ref={book}
          style={{
            zIndex: 997,
          }}
          className={`flipbook`}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={1}
          autoSize={false}
          mobileScrollSupport={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          <TableOfContents pages={bookData} book={book} portrait={portrait} />
          {bookData.map((currentvalue, icv) => (
            <Page
              data={currentvalue}
              // number={icv}
              key={`book_page_${currentvalue.attributes.pageNumber}`}
            />
          ))}
        </HTMLFlipBook>
        
      )}
  
   
    </div>
  );
};

export default FlipBook;


