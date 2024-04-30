import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CardTitle from "./components/CardTitle";
import TechTile from "./components/TechTile";
import ReactCardFlip from "react-card-flip";

const ExperienceCard = ({ data }) => {
  const { t, i18n } = useTranslation();
  let en = i18n.language === "en";
  let bkgColor = data.bkg_color;
  let accentColor = data.accent_color;

  const [Flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!Flipped);
  };

  return (
    <div className="cardFlip_container" onClick={handleClick}>
      <ReactCardFlip
        isFlipped={Flipped}
        flipDirection="vertical"
        style={{ backgroundColor: bkgColor }}
      >
        <div className="card_front">ey</div>
        <div className="card_back">
          <CardTitle
            name={en ? data.name_en : data.name_es}
            year={data.year}
            wip={data.wip}
            accentColor={accentColor}
          />
          <section className="position">
            {en ? data.role_en : data.role_es}
          </section>
          <section className="description">{en ? data.description_en : data.description_es}</section>
          <section className="stack">
            <h4 style={{ borderBottom: `1px solid ${accentColor}` }}>
              Tech Stack
            </h4>
            <div className="stack_list">
              {data.icons.map((item, index) => {
                return (
                  <TechTile key={index} name={item.name} icon={item.icon} />
                );
              })}
            </div>
          </section>
          <section className="link">
            {data.link ? (
              <a href={data.link}>{t("ExperienceCardVisit")}</a>
            ) : (
              <a onClick={(e) => e.preventDefault()} className="disabled">
                {t("ExperienceCardButtonDisabled")}
              </a>
            )}
          </section>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default ExperienceCard;
