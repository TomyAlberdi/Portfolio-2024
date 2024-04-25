import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  const Español = i18n.language === "es";

  return (
    <div className="RightPanel Home">
      <section className="div1">
        {Español ? (
          <p>
            Nacido en 2001 en <span>La Plata</span>, Argentina. <br />
            Con el tiempo, he adquirido un conjunto diverso de habilidades
            <span> técnicas y sociales </span> que estoy seguro contribuirán a
            mi desarrollo como profesional en este campo.
          </p>
        ) : (
          <p>
            Born in 2001 in <span>La Plata</span>, Argentina. <br />
            Over the years, I have acquired a diverse set of
            <span> technical and soft skills</span> that I am confident will
            contribute to my development as a professional in the field.
          </p>
        )}
      </section>
      <section className="div2">
        {Español ? (
          <ul>
            <li>De 2020 a 2023, cursé la <span>Licenciatura en Sistemas Informáticos</span> en la Facultad de Informática de la Universidad Nacional de La Plata.</li>
            <li>
              En 2023, me gradué como{" "}
              <Link
                to="https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer"
                target="_blank"
              >
                Certified Tech Developer
              </Link>{" "}
              en Digital House, una carrera respaldada por Globant y Mercado
              Libre.
            </li>
            <li>
              En 2024, finalicé mis estudios en Digital House obteniendo la
              certificación de <span>Especialista en Backend</span>.
            </li>
          </ul>
        ) : (
          <ul>
            <li>From 2020 to 2023, I pursued a <span>Bachelor's degree in Computer Systems</span> in the Faculty of Informatics of the National University of La Plata.</li>
            <li>
              In 2023, I graduated as a{" "}
              <Link
                to="https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer"
                target="_blank"
              >
                Certified Tech Developer
              </Link>{" "}
              in Digital House, a degree backed by Globant and Mercado Libre.{" "}
            </li>
            <li>
              In 2024, I concluded my studies at Digital House by earning the{" "}
              <span>Backend Specialist</span> certification.
            </li>
          </ul>
        )}
      </section>
    </div>
  );
};

export default Home;
