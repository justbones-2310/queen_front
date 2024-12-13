import React from "react";
import { NavLink } from "react-router-dom";
import './../styles/pages/HomePage.css'


const HomePage = (props) => {

    const playSound = () => {
        const audio = new Audio("/sounds/liveaid1985.mp3");
        audio.play();
    };

    return (
        <div className="home">

            <div className="holder">

                <div className="texto-portada">
                    <h1> QUEEN </h1>
                    <h2> The Show Must Go On! </h2>
                    <div className="button">
                        <NavLink to="/live aid" onClick={playSound} className="button1">
                            <span id="span1"></span>
                            <span id="span2"></span>
                            <span id="span3"></span>
                            <span id="span4"></span>
                            Live Aid
                        </NavLink>
                    </div>

                </div>

            </div>
        </div >
    );
}

export default HomePage;