import { useState } from "react";
import NavigationBar from "../components/navigation";
import '../styles/general.css'

function HomePage() {
    return (
      <div>
        <div className="mainScreen"></div>
        <div className="Content">
          <div className="TextsNoSidebar">
            <h1>Welcome!</h1>
            <p>
              <b>Lustin Luola</b> is a website created by me, Nico Lust, to showcase my
              skills on the field of <b>Information Technology.</b>
            </p>

          <h2>What does this website include?</h2>
          <p>
            <b>Portfolio: </b> A showcase of my previous projects

            <br></br>

            <b>About me: </b> Information about who I am and what I can do. My contact information is also here.


          </p>

          <h2>What's new?</h2>

          </div>
        </div>
      </div>
    )
  }

export default HomePage;