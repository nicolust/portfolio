import { useState } from "react";
import NavigationBar from "../components/navigation";
import '../styles/general.css'
import etusivu0 from "../assets/etusivu0.jpg"
import etusivu1 from "../assets/etusivu1.jpg"

function HomePage() {
    return (
      <div>
        <div className="Content">
          <div className="Texts">
            <div className="Title"><h1>Hello world!</h1></div>
            <p>
              My name is <b>Nico Lust</b>. I am a Finnish BBA student at Oulu University of Applied Sciences. 
              I study programming, software development and web and game design. I am currently in my third semester.
            </p>

          <br>
          </br>

          <h2>What does this website include?</h2>
          <p>
            <br></br>
            <b>Portfolio: </b>
            A showcase of my previous projects.

            <br></br><br></br>

            <b>About me: </b>
            My skills, education and work experience listed. 
            <br></br><br></br>


          </p>

          <h2>What's new?</h2>

          <div className="NewsBox">

            <h4>30.7.2025</h4>
            <p>It has been a while. I have been working on my first internship for the summer, so I haven't really had time to update 
              these pages. I also started working on a "To do -list" -app as a side project, but I have put that on hold because of the internship.
            </p>

            <h4>30.5.2025</h4>

            <p>
              The Shoot 'Em up -game has been released on itch.io! The project page has been updated with a link to the game.'
            </p>

            <h4>19.4.2025</h4>

            <p>The sixth week out of the eight weeks of the Shoot 'Em up -game development
              is now in progress. I have been actively working on the programming of the game, and I have focused 
              mainly on the game instead of this website, as we are making the game for a school course.
            </p>

            <h4>3.4.2025</h4>
            <p>Project -pages updated. Sidebar now has borders and a background to make it stand out from the 
              rest of the "Contents" -div
            </p>

            <h4>2.4.2025</h4>
            <p>The website is now public on GitHub pages! Project cards
              added to the "Portfolio" -page, for Lustin Luola and for 
              an upcoming 2D Shoot 'em up -game. Right now the "Read more" -buttons 
              don't do anything, but I'll make a new page for each project later.
            </p>

            <h4>1.4.2025</h4>
            <p>News box added! Currently the site is not public, and the pages are still very much in progress. 
              Only the "About me" -page is well done. The CSS is a horrendous mess, but I plan on cleaning that 
              up later!
            </p>

          </div>

          </div>
          <div className="sidebar">
                      <img src={etusivu0}></img>
                      <p><i>Programming is my passion.</i></p>
            </div>
        </div>
      </div>
    )
}

export default HomePage;