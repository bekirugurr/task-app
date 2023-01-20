import React from "react";

const Pegination = ({ numberOfPages, setSelectedPage, selectedPage }) => {
  //! Kaç page olacaksa numberOfPages prop u ile bu component'a iletiliyor. Aşağıda 1'den başlayan ve sayfa sayısına kadar numaralardan oluşan bir array oluşuyor. Bu array'ı aşağıda map ile iterate edip pegination button'larını oluşturdum
  const pageArr = new Array(numberOfPages).fill().map((_, i) => i + 1);

  return (
    <div className="flex-fill">
      {pageArr.map((pageNum) => (
        <button
          className={`me-1 px-2 fw-semibold btn ${
            pageNum === selectedPage ? "btn-outline-primary" : "btn-primary"
          }`}
          style={{ width: "2rem" }}
          key={pageNum}
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
