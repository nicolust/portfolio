import { useState } from "react";
import NavigationBar from "../components/navigation";
import '../styles/general.css';
import ShootEmUp1 from "../assets/ShootEmUp2.png"
import { Link, useLocation } from "react-router-dom";

function ShootEmUpPage() {
    return (
      <div>
        <div className="Content">
        <div className="Texts">
            <div className="Title">
            <h1>Taika: 2D Top-Down shooter</h1>
            </div>

            <img src={ShootEmUp1} className="ProjectPhoto"></img>
           


          </div>
          <div className="sidebar">
            <h2>Tools & Languages:</h2>
            <p>Unity Engine, C#, Scrum</p>

            <h2>GitHub Repository:</h2>
            <Link to="https://github.com/luttinenjoni/TopDownGame" className="LinkText"> Github.com/luttinenjoni/TopDownGame </Link>

            <h2>Status:</h2>
            <p>Group project, Released in May 2025.</p>
            <h2>Game download:</h2>
            <Link to="https://nicoakseli.itch.io/taika" className="LinkText">nicoakseli.itch.io/taika</Link>
          
          </div>

          <div className="TextsNoSidebar">
          <h2>Briefly</h2>
          <iframe width="device-width" height="315" src="https://www.youtube.com/embed/Mq4hflJ2W2A?si=j_Gr8h5bzIIJ5Ybe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <p>
            This project was created in roughly 8 weeks by a group of 4 people. We had no prior experience in game development. The game is a 2D shoot 'em up -game
            made with Unity Engine and C#. The goal of the game is to shoot all of the enemies until they have 0HP left. There are 3 levels + 1 boss level.
            I did mostly programming in this project, and I learned a lot of project management and game development. I learned the use of
            HackNPlan and Scrum. 
            I was also responsible for the publishing of this project. I published the game for Windowson itch.io. <br></br><br></br>
            The grade I received for this project was 4.
          </p>

          <h2>Devlog</h2>
          <p>
            <b>2.5.2025</b><br></br>
            The game was released on itch.io. We had a lot of fun developing this game, and we learned a lot about Unity Engine and C#. 
            We held a presentation about ar game at the University of Applied Sciences. 
            <br></br>
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