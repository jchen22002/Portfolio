import React from "react";
import arrowIcon from "../assets/arrow.png";

const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-3 right-3 z-50 cursor-pointer"
      onClick={handleClick}
      aria-label="Scroll to top"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      <img
        src={arrowIcon}
        alt="Scroll to top arrow"
        className="h-10 w-10 transform rotate-180 transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
};

export default ScrollToTop;