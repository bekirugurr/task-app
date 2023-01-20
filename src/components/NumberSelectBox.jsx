import React from "react";

const NumberSelectBox = ({ setHowManyRowWillBeShown }) => {
  return (
    <div className="flex-fill">
      <select
        className="form-select form-select-sm bg-secondary text-light"
        style={{ width: "4rem" }}
        aria-label=".form-select-sm example "
        onChange={(e) => setHowManyRowWillBeShown(parseInt(e.target.value))}
        defaultValue={10}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
    </div>
  );
};

export default NumberSelectBox;
