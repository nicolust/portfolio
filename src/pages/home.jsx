import { useState } from "react";
import NavigationBar from "../components/navigation";
import '../styles/general.css'

function HomePage() {
    return (
      <div>
        <div className="mainScreen"></div>
        <div className="Content">
          <div className="TextsNoSidebar">
            <div className="Title"><h1>Hello world!</h1></div>
            <p>
              <b>Lustin Luola</b> is a website created by me, Nico Lust, to showcase my
              works on the field of <b>Information Technology.</b>
            </p>

          <h2>What does this website include?</h2>
          <p>
            <b>Portfolio: </b>
            A showcase of my previous projects. This contains my solo projects AND group projects, which I have 
            taken part of. Most of the projects on my portfolio will have a link to their 
            GitHub repository, if it is made public.

            <br></br><br></br>

            <b>About me: </b>
            Information about who I am and what I can do. This page also contains the links to my GitHub and LinkedIn -profiles. 



          </p>

          <h2>What's new?</h2>

          <div className="NewsBox">

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