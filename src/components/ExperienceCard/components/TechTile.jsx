import React, { useState } from "react";

const TechTile = ({ name, icon }) => {

  const handleClickOpen = (e) => {
    e.stopPropagation()
    setOpen(!Open)
  }

  const [Open, setOpen] = useState(false);

  return (
    <article
      className={"TechTile " + (Open ? "open" : "")}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={(e) => handleClickOpen(e)}
    >
      {
        !Open ? <i className={icon}></i> : name
      }
    </article>
  );
};

export default TechTile;
