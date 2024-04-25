import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import { useTranslation } from "react-i18next";
import TextTransition, { presets } from "react-text-transition";

const Home = () => {
  const { t, i18n } = useTranslation();

  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [index4, setIndex4] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 4000);
    const intervalIcon1 = setInterval(
      () => setIndex1((index1) => index1 + 1),
      4000
    );
    const intervalIcon2 = setInterval(
      () => setIndex2((index2) => index2 + 1),
      4000
    );
    const intervalIcon3 = setInterval(
      () => setIndex3((index3) => index3 + 1),
      4000
    );
    const intervalIcon4 = setInterval(
      () => setIndex4((index4) => index4 + 1),
      4000
    );
    return () =>
      clearTimeout(
        intervalId,
        intervalIcon1,
        intervalIcon2,
        intervalIcon3,
        intervalIcon4
      );
  }, []);

  const texts_en = [
    "Frontend Developer",
    "Backend Developer",
    "Database Administrator",
  ];
  const texts_es = [
    "Desarrollador Frontend",
    "Desarrollador Backend",
    "Administrador de BBDD",
  ];

  const icons_1 = [
    <i class="fa-brands fa-react"></i>,
    <i class="fa-solid fa-database"></i>,
    <i class="fa-brands fa-java"></i>,
  ];
  const icons_2 = [
    <i class="fa-brands fa-js"></i>,
    <i class="fa-brands fa-docker"></i>,
    <i class="fa-brands fa-golang"></i>,
  ];
  const icons_3 = [
    <i class="fa-brands fa-sass"></i>,
    <i class="fa-solid fa-code-compare"></i>,
    <i class="fa-solid fa-circle-nodes"></i>,
  ];
  const icons_4 = [
    <i class="fa-brands fa-html5"></i>,
    <i class="fa-solid fa-file-lines"></i>,
    <i class="fa-solid fa-lock"></i>,
  ];

  return (
    <div className="RightPanel Home">
      <section className="div1">
        <img src="public/favicon.ico" />
        <div>Tomás <br /> Alberdi</div>
      </section>
      <section className="div2">
        <div className="row icon_transition_first_row mult">
          <TextTransition springConfig={presets.gentle} className="icon">
            {icons_1[index1 % icons_1.length]}
          </TextTransition>
          <TextTransition springConfig={presets.gentle} className="icon">
            {icons_2[index2 % icons_2.length]}
          </TextTransition>
        </div>
        <div className="row text_transition_container">
          <TextTransition springConfig={presets.gentle}>
            {i18n.language === "en"
              ? texts_en[index % texts_en.length]
              : texts_es[index % texts_es.length]}
          </TextTransition>
        </div>
        <div className="row icon_transition_second_row mult">
          <TextTransition springConfig={presets.gentle} className="icon">
            {icons_3[index3 % icons_3.length]}
          </TextTransition>
          <TextTransition springConfig={presets.gentle} className="icon">
            {icons_4[index4 % icons_4.length]}
          </TextTransition>
        </div>
      </section>
      <section className="div3"></section>
    </div>
  );
};

export default Home;
