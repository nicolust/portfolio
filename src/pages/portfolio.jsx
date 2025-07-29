import React from "react";
import LustinLuola from "../assets/LustinLuola2.png"
import ShootEmUp from "../assets/ShootEmUp2.png"
import { Link, useLocation } from "react-router-dom";

function PortfolioPage () {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0 });
      };
    
    return (
        <div className="PortfolioContent">
            <div className="Title">
                <h1>Portfolio</h1>
                </div>
            <div className="PortfolioItems">

                <div className="PortfolioItem">
                    <h2>To Do -List App</h2>
                    <h3>Solo, Mobile</h3>
                    <p>A mobile application for creating and managing "To Do" -lists and tasks. Created using React Native and Firebase.</p>
                    
                    
                        <button>
                        In development.
                        </button>
                      
                </div>


                <div className="PortfolioItem">
                    <img src={ShootEmUp}></img>
                    <h2>Taika: 2D Top-Down Shooter</h2>
                    <h3>Group, Desktop</h3>
                    <p>A 2D Shoot 'em up -game made with Unity Engine and C# by a group of 4 people. I learned project management and game development.</p>
                    
                    <Link to="/works/shootemup" className="nav-link">
                        <button>
                        Read more
                        </button>
                      </Link>

                </div>

                <div className="PortfolioItem">
                    <img src={LustinLuola}></img>
                    <h2>Lustin Luola</h2>
                    <h3>Solo, Web</h3>
                    <p>A website portfolio to showcase my works on the field of IT. Created using React with Vite and JavaScript. 
                         Published on GitHub pages.
                    </p>

                    <Link to="/works/lustinluola" className="nav-link">
                        <button>
                        Read more
                        </button>
                      </Link>

                </div>


            </div>
                </div>
    );
};

export default PortfolioPage;