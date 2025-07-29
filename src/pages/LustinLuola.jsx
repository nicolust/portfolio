import { useState } from "react";
import NavigationBar from "../components/navigation";
import '../styles/general.css';
import LustinLuola2 from "../assets/LustinLuola2.png"
import { Link, useLocation } from "react-router-dom";

function LustinLuolaPage() {
    return (
      <div>
        <div className="Content">
        <div className="Texts">
            <div className="Title">
            <h1>Lustin Luola</h1>
            </div>

            <img src={LustinLuola2} className="ProjectPhoto"></img>
           


          </div>
          <div className="sidebar">
            <h2>Tools & Languages:</h2>
            <p>React, Vite, JavaScript, HTML&CSS</p>

            <h2>GitHub Repository:</h2>
            <Link to="https://github.com/nicolust/portfolio" className="LinkText"> Github.com/nicolust/portfolio </Link>

            <h2>Status:</h2>
            <p>Solo project, In development</p>
          </div>

          <div className="TextsNoSidebar">
          <h2>Devlog</h2>
          <p>
            <b>3.4.2025</b><br></br>

            First 2 projects added to the portfolio: "Lustin Luola" and "Shoot 'em up -game". The first version of the website is 
            getting close to being finished. The CSS has to be cleaned up, since it's very unconventional.
            <br></br>

            <b>2.4.2025</b><br></br>
            The first version of the website was published on GitHub pages.
            <br></br>

            <b>22.3.2025</b><br></br>
            I started developing this website, and pushed the initial commit to GitHub. 
            I wanted to use "Doto" -font family from Google Fonts. I tried to make the website look both personal 
            and professional.

          </p>
          </div>
        </div>
      </div>
    )
  }

export default LustinLuolaPage;