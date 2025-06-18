import React from "react";
import arrowIcon from "../assets/arrow.png";

const ScrollDownArrow = () => {
  const handleClick = () => {
    window.scrollBy({ top: 910, behavior: "smooth" });
  };

  return (
    <div
      className="flex justify-center items-center cursor-pointer"
      style={{ height: "100px" }}
      onClick={handleClick}
      aria-label="Scroll down"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      <img src={arrowIcon} alt="Scroll down arrow" className="h-12 w-12 animate-bounce" />
    </div>
  );
};

export default ScrollDownArrow;
