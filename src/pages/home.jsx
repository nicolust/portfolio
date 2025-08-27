import { useState } from "react";
import NavigationBar from "../components/navigation";
import '../styles/general.css'

function HomePage() {
    return (
      <div>
        <div className="Content">
          <div className="TextsNoSidebar">
            <div className="Title"><h1>Hello world!</h1></div>
            <p>
              Welcome! My name is <b>Nico Lust</b>. I am a Finnish 20-year-old BBA student from Oulu, Finland. 
              I study software development, web design and programming. This website is my personal portfolio. 
            </p>

          <br>
          </br>

          <h2>What does this website include?</h2>
          <p>
            <br></br>
            <b>Portfolio: </b>
            A showcase of my previous projects. This contains my solo projects AND group projects, which I have 
            taken part of. Most of the projects on my portfolio will have a link to their 
            GitHub repository, if it is made public.

            <br></br><br></br>

            <b>About me: </b>
            My skills, education and work experience listed. 



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
        </div>
      </div>
    )
}

export default HomePage;