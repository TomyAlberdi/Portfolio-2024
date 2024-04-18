import React from "react";
import list from "./experience.json";
import { useHorizontalScroll } from "./../../hooks/HorizontalScroll";

const Experience = () => {
  const scrollRef = useHorizontalScroll();
  return (
    <div className="RightPanel Experience " ref={scrollRef}>

    </div>
  );
};

export default Experience;
