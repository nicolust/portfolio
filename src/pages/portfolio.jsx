import React from "react";
import Posts from "../components/Posts";
import BlogNav from "../components/blognav";
import LustinLuola from "../assets/LustinLuola2.png"
import ShootEmUp from "../assets/ShootEmUp1.png"

function PortfolioPage () {
    return (
        <div className="mainScreen">
        <div className="PortfolioContent">
            <div className="PortfolioText">
                <h1>Portfolio</h1>
                </div>
            <div className="PortfolioItems">

                <div className="PortfolioItem">
                    <img src={ShootEmUp}></img>
                    <h2>Shoot 'em up -game</h2>
                    <h3>Group, Desktop</h3>
                    <p>A 2D Shoot 'em up -game made with Unity Engine by a group of 4 people! Currently in development.</p>
                    <button>Read more!</button>
                </div>

                <div className="PortfolioItem">
                    <img src={LustinLuola}></img>
                    <h2>Lustin Luola</h2>
                    <h3>Solo, Web</h3>
                    <p>A website portfolio to showcase my skills on the field of IT.</p>
                    <button>Read more!</button>
                </div>

            </div>
                </div>
            </div>
    );
};

export default PortfolioPage;