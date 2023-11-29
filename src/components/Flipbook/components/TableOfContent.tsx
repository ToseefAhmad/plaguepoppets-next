"use client"
import React, { useEffect, useState } from "react";
import { ContentIndex } from "./ContentIndex";
import '../style/index.css'



interface TableOfContentsProps {
    pages: any[];
    book: React.MutableRefObject<any>;
    portrait: boolean;
  }
  
  export const TableOfContents = React.forwardRef<HTMLDivElement,TableOfContentsProps>(({ pages, book, portrait }, ref) => {
    const [numItems, setNumItems] = useState(6);
  
    useEffect(() => {
      setNumItems(
        pages.filter(
          (p) => p.attributes.bookTitle && p.attributes.bookTitle !== ""
        ).length + 1
      );
    }, [pages]);
  
    return (
      <div className="h-[100vh] w-full absolute top-0 bg-repeat-round text-center book-fade-in"  ref={ref}>
        <div className="pageWrapperFrame w-full h-full absolute left-0 p-[15%] overflow-visible flex flex-col justify-center bg-cover bg-no-repeat bg-right svgFrame">
          <div className="leftPage-description font-light max-h-[90%] overflow-visible h-[80%]">
            <div
              style={{ height: "100%", width: "100%" }}
              className="flex flex-col justify-between items-center"
            >
              <h3 className="text-center text-[#5b4f49]">Table of Contents</h3>
              <ContentIndex
                key={`toc_h5_0`}
                page={1}
                book={book}
                portrait={portrait}
                numItems={numItems}
              >
                I. A Small and Mighty Friend
              </ContentIndex>
              {pages.map((p, i) =>
                p.attributes.bookTitle && p.attributes.bookTitle !== "" ? (
                  <ContentIndex
                    key={`toc_h5_${i + 1}`}
                    page={i + 1}
                    book={book}
                    portrait={portrait}
                    numItems={numItems}
                  >
                    {p.attributes.bookTitle}
                  </ContentIndex>
                ) : (
                  <React.Fragment key={`toc_empty_${i}`} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });

  TableOfContents.displayName="TableOfContents";

