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
            <h2>Tools & Languages:</h2>
            <p>Unity Engine, C#, Scrum</p>

            <h2>GitHub Repository:</h2>
            <Link to="https://github.com/luttinenjoni/TopDownGame" className="LinkText"> Github.com/luttinenjoni/TopDownGame </Link>

            <h2>Status:</h2>
            <p>Group project, In development, Scheduled for release in May 2025.</p>
            <h2>Game download:</h2>
            <p>TBA</p>
          
          </div>

          <div className="TextsNoSidebar">
          <h2>Devlog</h2>
          <p>
            <b>27.3.2025</b><br></br>
            After my teammate, Joni, had programmed us some basic player movement and shooting mechanics, I 
            programmed us some basic enemies, who chase the player and shoot at the player. I also 
            programmed initial HP bars, where the player and enemies get destroyed if they run out of HP.
            <br></br>

            <b>24.3.2025</b><br></br>
            Initial commit for the GitHub repository was made and we started 
            working on the project in C# using Unity Engine and Visual Studio Code.
            <br></br>

            <b>14.3.2025</b><br></br>
            Our group of 4 people had the first meeting as we started planning 
            our project. Soon, we started brainstorming ideas for a 2D shoot 'em up -game. 
            We had no prior experience with Unity Engine, so we took time in learning the Unity environment and 
            doing research on Unity Engine. We started using Hack N' Plan to organize and schedule our tasks. 
            We used <b>scrum</b> in our development and worked on 1-week long sprints.
          </p>
          </div>
        </div>
      </div>
    )
  }

export default ShootEmUpPage;