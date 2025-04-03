import { useState } from "react";
import NavigationBar from "../components/navigation";
import '../styles/general.css';
import LustinLuola2 from "../assets/LustinLuola2.png"
import { Link, useLocation } from "react-router-dom";

function LustinLuolaPage() {
    return (
      <div>
        <div className="mainScreen"></div>
        <div className="Content">
        <div className="Texts">
            <div className="Title">
            <h1>Lustin Luola</h1>
            </div>

            <img src={LustinLuola2} className="ProjectPhoto"></img>
           


          </div>
          <div className="sidebar">
            <h2>Tools used:</h2>
            <p>React, Vite, JavaScript, HTML&CSS</p>

            <h2>GitHub Repository:</h2>
            <Link to="https://github.com/nicolust/portfolio" className="LinkText"> Github.com/nicolust/portfolio </Link>

            <h2>Status</h2>
            <p>Solo project, In development</p>
          </div>

          <div className="TextsNoSidebar">
          <h2>Devlog</h2>
          <p>I started developing this website at the end of March 2025.
            The first time I published this site on GitHub Pages took place on April 2nd, 2025.

          </p>
          </div>
        </div>
      </div>
    )
  }

export default LustinLuolaPage;