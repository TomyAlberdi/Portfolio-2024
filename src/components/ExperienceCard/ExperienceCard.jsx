import React from "react";
import { useTranslation } from "react-i18next";
import CardTitle from "./components/CardTitle";
import CardDescriptionImages from "./components/CardDescriptionImages";
import TechTile from "./components/TechTile";

const ExperienceCard = ({ data }) => {
  const { t, i18n } = useTranslation();
  let en = i18n.language === "en";
  let bkgColor = data.bkg_color;
  let accentColor = data.accent_color;

  return (
    <div className="ExperienceCard" style={{ backgroundColor: bkgColor }}>
      <CardTitle
        name={en ? data.name_en : data.name_es}
        year={data.year}
        wip={data.wip}
        accentColor={accentColor}
      />
      <section className="position div2">
        {en ? data.role_en : data.role_es}
      </section>
      <CardDescriptionImages
        description={en ? data.description_en : data.description_es}
        images={data.images}
        accentColor={accentColor}
      />
      <section className="stack div4">
        <h4 style={{ borderBottom: `1px solid ${accentColor}` }}>Tech Stack</h4>
        <div className="stack_list">
          {data.icons.map((item, index) => {
            return <TechTile key={index} name={item.name} icon={item.icon} />;
          })}
        </div>
      </section>
      <section className="link div5">
        {data.link ? (
          <a href={data.link}>{t("ExperienceCardVisit")}</a>
        ) : (
          <a onClick={(e) => e.preventDefault()} className="disabled">
            {t("ExperienceCardButtonDisabled")}
          </a>
        )}
      </section>
    </div>
  );
};

export default ExperienceCard;
