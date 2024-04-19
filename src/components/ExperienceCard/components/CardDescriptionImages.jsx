import React, { useState } from 'react'
import FsLightbox from "fslightbox-react";
import { useTranslation } from "react-i18next";

const CardDescriptionImages = ({description, images, accentColor}) => {

  const { t } = useTranslation();
  const [Toggler, setToggler] = useState(false)

  return (
    <section className="div3 description">
      <div className="description">
        {description}
      </div>
      <div className="images">
        <button onClick={() => setToggler(!Toggler)}>{t("ExperienceCardViewImages")}</button>
        <FsLightbox
				toggler={Toggler}
				sources={images}
			/>
      </div>
    </section>
  )
}

export default CardDescriptionImages