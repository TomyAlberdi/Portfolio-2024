import React from "react";
import { useTranslation } from "react-i18next";
import CardTitle from "./components/CardTitle";
import CardDescriptionImages from './components/CardDescriptionImages';

const ExperienceCard = ({ data }) => {
  const { t, i18n } = useTranslation();
  let en = i18n.language === "en";
  let bkgColor = data.bkg_color;
  let accentColor = data.accent_color;

  return (
    <div className="ExperienceCard" style={{ backgroundColor: bkgColor }}>
      <CardTitle name={en ? data.name_en : data.name_es} year={data.year} wip={data.wip} accentColor={accentColor} />
      <section className="position div2">{en ? data.role_en : data.role_es}</section>
      <CardDescriptionImages description={en ? data.description_en : data.description_es} images={data.images} accentColor={accentColor} />
      <section className="stack div4"></section>
      <section className="link div5"></section>
    </div>
  );
};

export default ExperienceCard;
