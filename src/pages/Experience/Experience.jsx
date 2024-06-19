import React from "react";
import list from "../../utils/experience.json";
import { useHorizontalScroll } from "./../../hooks/HorizontalScroll";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

const Experience = () => {
  const scrollRef = useHorizontalScroll();
  return (
    <>
      <div className="RightPanel Experience " ref={scrollRef}>
        {list.map((item, index) => {
          return <ExperienceCard key={index} data={item} />;
        })}
      </div>
      <swiper-container autoplay="false" slides-per-view="1.05">
        {
          list.map((item, index) => {
            return (
              <swiper-slide key={index}>
                <ExperienceCard data={item} />
              </swiper-slide>
            )
          })
        }
      </swiper-container>
    </>
  );
};

export default Experience;
