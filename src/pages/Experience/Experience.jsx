import React from "react";
import list from "../../utils/experience.json";
import { useHorizontalScroll } from "./../../hooks/HorizontalScroll";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

const Experience = () => {
  const scrollRef = useHorizontalScroll();
  return (
    <div className="RightPanel Experience " ref={scrollRef}>
      {list.map((item, index) => {
        return <ExperienceCard key={index} data={item} />;
      })}
      <ExperienceCard data={list[0]} />
      <ExperienceCard data={list[0]} />
      <ExperienceCard data={list[0]} />
      <ExperienceCard data={list[0]} />
      <ExperienceCard data={list[0]} />
    </div>
  );
};

export default Experience;
