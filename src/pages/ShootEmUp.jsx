import { useState } from "react";
import NavigationBar from "../components/navigation";
import '../styles/general.css';
import ShootEmUp1 from "../assets/ShootEmUp1.png"
import { Link, useLocation } from "react-router-dom";

function ShootEmUpPage() {
    return (
      <div>
        <div className="mainScreen"></div>
        <div className="Content">
        <div className="Texts">
            <div className="Title">
            <h1>Shoot 'em up -game</h1>
            </div>

            <img src={ShootEmUp1} className="ProjectPhoto"></img>
           


          </div>
          <div className="sidebar">
            <h2>Tools used:</h2>
            <p>Unity Engine, C#</p>

            <h2>GitHub Repository:</h2>
            <Link to="https://github.com/luttinenjoni/TopDownGame" className="LinkText"> Github.com/luttinenjoni/TopDownGame </Link>

            <h2>Status:</h2>
            <p>Group project, In development, Scheduled for release in May 2025.</p>
            <h2>Game download:</h2>
            <p>TBA</p>
          
          </div>

          <div className="TextsNoSidebar">
          <h2>Devlog</h2>
          <p>The development of this game began in March 2025. It is currently being developed by a team of 4 people.

          </p>
          </div>
        </div>
      </div>
    )
  }

export default ShootEmUpPage;