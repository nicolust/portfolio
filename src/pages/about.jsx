import { useState } from "react";
import { ReactCountryFlag } from "react-country-flag";
import NavigationBar from "../components/navigation";
import '../styles/general.css';
import Hakemuskuva from "../assets/Hakemuskuva.jpg"

function AboutPage() {
    return (
      <div>
        <div className="Content">
        <div className="Texts">
            <div className="Title">
            <h1>Work experience </h1>
            </div>
            <h2>Intern</h2>
            <p>
              <b>Oulu University of Applied Sciences</b> <br></br>
              <b>June 2025 - August 2025</b>
              <br></br>
              My tasks included C# Programming in Unity Engine. I worked on a virtual 3D Gallery project. 
              More specifically, on a tool that allows users to create their own 3D galleries in the Unity Engine more easily using custom inspectors.

            </p>
            <h1>Education</h1>
              <h2>BBA, Business Information Systems</h2>
              <p>
                <b>Oulu University of Applied Sciences</b> <br></br>
                August 2023 - estimated December 2026
                <br></br>
                <br></br>
              </p>

              <h2>Finnish matriculation examination</h2>
              <p>
                <b>Pellon lukio</b> <br></br>
                August 2020 - June 2023
                <br></br>
              </p>

            <h1>Skills</h1>
            <p>
              <b>Programming languages:</b> Python, JavaScript, C#, HTML&CSS, SQL <br></br>
              <b>Frameworks & Libraries:</b> React, React Native, Node.js, Unity Engine <br></br>
              <b>Databases:</b> MySQL, Firebase <br></br>
              <b>Tools & Platforms:</b> Git, GitHub, VS Code, Figma, Azure <br></br>
              <b>Methodologies:</b> Agile, Scrum <br></br>
              <b>Other skills:</b> Web design, UI/UX design, Game development
            </p>
            <h1>Language skills</h1>
            <p>
              <b>Finnish:</b> Native <ReactCountryFlag countryCode="FI" svg></ReactCountryFlag>    <br></br>
              <b>English:</b> Fluent <ReactCountryFlag countryCode="GB" svg></ReactCountryFlag>   <br></br>
              <b>Swedish:</b> Basics <ReactCountryFlag countryCode="SE" svg></ReactCountryFlag>   <br></br>
              <b>German:</b> Basics <ReactCountryFlag countryCode="DE" svg></ReactCountryFlag>   <br></br>
              </p>
              <br></br>
          
          </div>
          <div className="sidebar">
            <img src={Hakemuskuva}></img>
          <button onClick={() => window.location.href = "https://www.linkedin.com/in/nico-lust-ab8688339"}>
                LinkedIn
                </button>
            <button onClick={() => window.location.href = "https://github.com/nicolust"}>
                GitHub
                </button>
                <p>Contact: <br></br> nicoakseli@gmail.com</p>
          </div>
        </div>
      </div>
    )
  }

export default AboutPage;