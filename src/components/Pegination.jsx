import React from "react";

const Pegination = ({ numberOfPages, setSelectedPage, selectedPage }) => {
  const pageArr = new Array(numberOfPages).fill().map((_, i) => i + 1);

  return (
    <div className="flex-fill">
      {pageArr.map((pageNum) => (
        <button
          className="border-0 rounded me-1 px-2"
          key={pageNum}
          style={
            pageNum === selectedPage
              ? {
                  backgroundColor: "white",
                  color: "#662ba1",
                  outlineOffset: "-1px",
                  outline: "1px solid #662ba1",
                }
              : { backgroundColor: "#662ba1", color: "white" }
          }
          onClick={(e) => {
            setSelectedPage(parseInt(pageNum));
          }}
        >
          {pageNum}
        </button>
      ))}
    </div>
  );
};

export default Pegination;
