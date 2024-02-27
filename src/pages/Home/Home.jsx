import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaJava, FaHtml5, FaCss3, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Home = () => {
  return (
    <div className="RightPanel Home">
      <p className="div1">
        Born in 2001 in <span>La Plata</span>, Argentina. <br />
        Over the years, I have acquired a diverse set of
        <span> technical and soft skills</span> that I am confident will
        contribute to my development as a professional in the field. <br />
        With my abilities, I am eager to enhance the <span>value</span> and
        <span> productivity</span> of my work.
      </p>
      <p className="div2 border">
        In 2023, I graduated as a{" "}
        <Link
          to="https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer"
          target="_blank"
        >
          Certified Tech Developer
        </Link>
        , a degree backed by Globant and Mercado Libre. <br />
        Thanks to this, I developed knowledge in the following fields:
        <ul>
          <li><span>FrontEnd</span> Development</li>
          <li><span>BackEnd</span> Development</li>
          <li><span>Database</span> Adminstration</li>
          <li><span>Git</span> and <span>Bash Scripting</span></li>
        </ul>
      </p>
      <p className="div3 border">
        In 2024, I finished my <span>Backend Specialization</span>, gaining knowledge and experience in:
        <ul>
          <li><span>Microservices</span> based backend architecture</li>
          <li>Security: <span>Authentification</span> and <span>authorization</span></li>
          <li><span>Non-relational Database</span> administration</li>
          <li><span>Testing</span>: Selenium and RestAssured</li>
          <li>Infrastructure as Code: <span>Docker</span> and <span>Kubernetes</span></li>
          <li><span>Go</span> Backend</li>
        </ul>
      </p>
      <p className="div4">
          <FaReact className="div1" />
          <FaJava className="div2" />
          <IoLogoJavascript className="div3" />
          <FaHtml5 className="div4" />
          <FaCss3 className="div5" />
          <FaSass className="div6" />
      </p>
      <img src="public/favicon.ico" alt="Webpage icon" className="div5" />
    </div>
  );
};

export default Home;
