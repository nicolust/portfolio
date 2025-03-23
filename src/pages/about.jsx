import { useState } from "react";
import NavigationBar from "../components/navigation";
import '../styles/general.css';
import Hakemuskuva from "../assets/Hakemuskuva.jpg"

function AboutPage() {
    return (
      <div>
        <div className="mainScreen"></div>
        <div className="Content">
        <div className="Texts">

            <h1>Hi! I'm Nico </h1>
            <p>My name is Nico Lust. I am a Finnish 20-year old student from Oulu, Finland. I am currently
                studying my second year of <b>Business Information Systems</b> in <b>Oulu
                University of Applied Sciences.</b> I should graduate on the December of 2026.
                I am interested in programming and web design. I know how to use Azure, React,
                HTML&CSS, JavaScript, Python, C# and SQL.
            </p>
            <h2>What do I do?</h2>
            <p>Right now I am studying my second year at Oulu University of Applied sciences.
              I program websites, mobile apps and desktop apps.
            </p>
            <h2>Programming skills</h2>
            <p>I have learned the basics of programming at OAMK with Python. I am also familiar with JavaScript
              and React. I know some basic C# Programming too. I can handle databases using Firebase, SQL and MySQL.
            </p>
            <h2>Language skills</h2>
            <p>I speak Finnish fluently as my mother tongue. I speak English fluently. I know the basicsof German and Swedish.</p>

          </div>
          <div className="sidebar">
            <img src={Hakemuskuva}></img>
          <button onClick={() => window.location.href = "https://www.linkedin.com/in/nico-lust-ab8688339"}>
                LinkedIn
                </button>
            <button onClick={() => window.location.href = "https://github.com/nicopasma"}>
                GitHub
                </button>
                <p>Contact me: <br></br> ???@gmail.com</p>
          </div>
        </div>
      </div>
    )
  }

export default AboutPage;