import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaJava, FaHtml5, FaCss3, FaSass, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GoFileBinary } from "react-icons/go";
import { FaGolang } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="RightPanel Home">
      <section>
        <div className="year">2020 - 2022</div>
        <div className="stack">
          <span>
            <FaJava className="div2" />
            <GoFileBinary />
          </span>
        </div>
        <div className="text">
          Studied a <span>bachelor's degree </span>in{" "}
          <span>computer systems</span> in the{" "}
          <span>faculty of informatics</span> of the{" "}
          <span>National University of La Plata</span>
        </div>
        <div className="textHidden">
          Studied a <span>bachelor's degree </span>in{" "}
          <span>computer systems</span> in the{" "}
          <span>faculty of informatics</span> of the{" "}
          <span>National University of La Plata</span>
        </div>
      </section>
      <section>
        <div className="year">2022 - 2023</div>
        <div className="stack">
          <span>
            <IoLogoJavascript className="div3" />
            <FaHtml5 className="div4" />
            <FaCss3 className="div5" />
            <FaSass className="div6" />
            <FaJava className="div2" />
            <FaGitAlt />
          </span>
        </div>
        <div className="text">
          I graduated as a{" "}
          <Link
            to="https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer"
            target="_blank"
          >
            Certified Tech Developer
          </Link>
          , a degree backed by Globant and Mercado Libre. <br />
          Thanks to this, I obtained knowledge in the following fields:
          <ul>
            <li>
              <span>FrontEnd</span> Development
            </li>
            <li>
              <span>BackEnd</span> Development
            </li>
            <li>
              <span>Database</span> Adminstration
            </li>
            <li>
              <span>Git</span> and <span>Bash Scripting</span>
            </li>
          </ul>
        </div>
        <div className="textHidden">
          I graduated as a{" "}
          <Link
            to="https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer"
            target="_blank"
          >
            Certified Tech Developer
          </Link>
          , a degree backed by Globant and Mercado Libre. <br />
          Thanks to this, I developed knowledge in the following fields:
          <ul>
            <li>
              <span>FrontEnd</span> Development
            </li>
            <li>
              <span>BackEnd</span> Development
            </li>
            <li>
              <span>Database</span> Adminstration
            </li>
            <li>
              <span>Git</span> and <span>Bash Scripting</span>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="year">2023 - 2024</div>
        <div className="stack">
          <span>
            <FaReact className="div1" />
            <FaJava className="div2" />
            <FaGolang />
          </span>
        </div>
        <div className="text">
          I finished my <span>Backend Specialization</span>, gaining knowledge
          and experience in:
          <ul>
            <li>
              <span>Microservices</span> based backend architecture
            </li>
            <li>
              Security: <span>Authentification</span> and{" "}
              <span>authorization</span>
            </li>
            <li>
              <span>Non-relational Database</span> administration
            </li>
            <li>
              <span>Testing</span>: Selenium and RestAssured
            </li>
            <li>
              Infrastructure as Code: <span>Docker</span> and{" "}
              <span>Kubernetes</span>
            </li>
            <li>
              <span>Go</span> Backend
            </li>
          </ul>
        </div>
        {/* Hacky but it works 👍 */}
        <div className="textHidden">
          I finished my <span>Backend Specialization</span>, gaining knowledge
          and experience in:
          <ul>
            <li>
              <span>Microservices</span> based backend architecture
            </li>
            <li>
              Security: <span>Authentification</span> and{" "}
              <span>authorization</span>
            </li>
            <li>
              <span>Non-relational Database</span> administration
            </li>
            <li>
              <span>Testing</span>: Selenium and RestAssured
            </li>
            <li>
              Infrastructure as Code: <span>Docker</span> and{" "}
              <span>Kubernetes</span>
            </li>
            <li>
              <span>Go</span> Backend
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
