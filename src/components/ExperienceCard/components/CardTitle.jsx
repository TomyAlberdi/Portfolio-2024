import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const CardTitle = ({ name, year, wip, accentColor }) => {
  const { t } = useTranslation();
  const [OpenWipInfo, setOpenWipInfo] = useState(false);

  return (
    <section className="title div1">
      <div className="title_info">
        <h3 style={{borderBottom: `1px solid ${accentColor}`}}>{name}</h3>
        <span>({year})</span>
      </div>
      <div
        className="title_wip"
        onMouseEnter={() => setOpenWipInfo(true)}
        onMouseLeave={() => setOpenWipInfo(false)}
      >
        {wip ? <h3>WIP</h3> : null}
        <section className={"wip_info " + (OpenWipInfo ? "open" : "")}>
          {t("ExperienceCardWipInfo")}
        </section>
      </div>
    </section>
  );
};

export default CardTitle;
