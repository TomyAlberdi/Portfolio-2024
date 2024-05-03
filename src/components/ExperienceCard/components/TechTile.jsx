import React, { useState } from "react";

const TechTile = ({ name, icon }) => {
  const [Open, setOpen] = useState(false);

  return (
    <article
      className={"TechTile " + (Open ? "open" : "")}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {
        !Open ? <i className={icon}></i> : name
      }
    </article>
  );
};

export default TechTile;
