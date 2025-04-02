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
            <div className="Title">
            <h1>Hi! I'm Nico </h1>
            </div>
            <p>Hello world! My name is Nico Lust. I am a Finnish 20-year old student from Oulu, Finland. I am currently
                studying my second year of <b>Business Information Systems</b> in <b>Oulu
                University of Applied Sciences.</b> I should graduate on the December of 2026.
                I am interested in programming, web design and software development.
            </p>
            <h2>What tools do I use?</h2>
            <p>In my studies I have learned the use of <b>HTML and CSS</b>, <b>Azure</b>, <b>WordPress</b>, <b>HackNPlan</b>,
              <b> Visual Studio Code</b>, <b>Figma, </b><b>WinSCP</b> and <b>Unity Engine</b>. I have also learned to manage databases
             with <b>Firebase</b> and <b>MySQL</b>. <br></br><br></br>I have learned to use these tools independently
             on my own side projects too, such as on this page! I am always eager to learn more.
            </p>
            <h2>Programming skills</h2>
            <p>At OUAS, I learned the basics of programming with <b>Python.</b> I learned the design, programming and
            development of websites with <b>JavaScript</b> using frameworks, such as <b>React</b> and <b>React Native</b>. 
            <br></br><br></br>For styling, I am familiar with the use of <b>Bootstrap.</b> For game development, I learned the basics of <b>C# </b> 
             and learned to use it in practice in a game project, I made in a group of 4 people using Unity Engine.
            </p>
            <h2>Language skills</h2>
            <p>
              My mother tongue is <b>Finnish.</b> I also speak <b>English</b> fluently. I can have simple conversations 
              in <b>Swedish</b> and <b>German.</b>
              </p>

          </div>
          <div className="sidebar">
            <img src={Hakemuskuva}></img>
          <button onClick={() => window.location.href = "https://www.linkedin.com/in/nico-lust-ab8688339"}>
                LinkedIn
                </button>
            <button onClick={() => window.location.href = "https://github.com/nicopasma"}>
                GitHub
                </button>
                <p>Let's work together! <br></br> Contact me: <br></br> nicoakseli@gmail.com</p>
          </div>
        </div>
      </div>
    )
  }

export default AboutPage;