import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import './../styles/pages/HomePage.css'

const HomePage = (props) => {

    const playSound = () => {
        const audio = new Audio("/sounds/liveaid1985.mp3");
        audio.play();
    };


    const sliderRef = useRef(null);
    const btnRightRef = useRef(null);
    const btnLeftRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const btnRight = btnRightRef.current;
        const btnLeft = btnLeftRef.current;
        const photoSection = slider.querySelectorAll(".photo-section");

        let operacion = 0;
        let counter = 0;
        const widthImg = 100 / photoSection.length;

        const moveToRight = () => {
            if (counter >= photoSection.length - 1) {
                counter = 0;
                operacion = 0;
                slider.style.transform = `translate(-${operacion}%)`;
                slider.style.transition = "none";
            } else {
                counter++;
                operacion += widthImg;
                slider.style.transform = `translate(-${operacion}%)`;
                slider.style.transition = "all ease .6s";
            }
        };

        const moveToLeft = () => {
            if (counter <= 0) {
                counter = photoSection.length - 1;
                operacion = widthImg * (photoSection.length - 1);
                slider.style.transform = `translate(-${operacion}%)`;
                slider.style.transition = "none";
            } else {
                counter--;
                operacion -= widthImg;
                slider.style.transform = `translate(-${operacion}%)`;
                slider.style.transition = "all ease .6s";
            }
        };

        btnRight.addEventListener("click", moveToRight);
        btnLeft.addEventListener("click", moveToLeft);

        return () => {
            btnRight.removeEventListener("click", moveToRight);
            btnLeft.removeEventListener("click", moveToLeft);
        };
    }, []);

    return (
        <div className="home">

            <div className="portada">

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

            <div className="team">
                <ul className="musicians">
                    <li><NavLink to="/la banda de rock#freddie-mercury" className={({ isActive }) => isActive ? "activo" : undefined} > Freddie Mercury </NavLink></li>
                    <li><NavLink to="/la banda de rock#john-deacon" className={({ isActive }) => isActive ? "activo" : undefined} > John Deacon </NavLink></li>
                    <li><NavLink to="/la banda de rock#brian-may" className={({ isActive }) => isActive ? "activo" : undefined} > Brain May </NavLink></li>
                    <li><NavLink to="/la banda de rock#roger-taylor" className={({ isActive }) => isActive ? "activo" : undefined} > Roger Taylor </NavLink></li>
                </ul>
            </div>

            <div className="holder bienvenida">

                <div className="container-images">
                    <div className="carrusel" id="slider" ref={sliderRef}>

                        <section className="photo-section">
                            <img src="/images/carousel/freddie-mercury-live-aid-1985.jpg" alt="la banda" />
                        </section>

                        <section className="photo-section">
                            <img src="/images/carousel/1985.jpg" alt="la banda" />
                        </section>

                        <section className="photo-section">
                            <img src="/images/carousel/brian-may-live-aid.jpg" alt="la banda" />
                        </section>

                        <section className="photo-section">
                            <img src="/images/carousel/john-deacon-live-aid-1985.jpg" alt="la banda" />
                        </section>

                        <section className="photo-section">
                            <img src="/images/carousel/queen-live-aid1.jpg" alt="la banda" />
                        </section>

                    </div>

                    <div className="btn-right" ref={btnRightRef}> <i className="bi bi-arrow-right-square-fill"></i> </div>
                    <div className="btn-left" ref={btnLeftRef}> <i className="bi bi-arrow-left-square-fill"></i> </div>

                </div>

                <div className="spotify">

                    <iframe src="https://open.spotify.com/embed/album/3nG4gJT1OqZmyLh86LCwqm?utm_source=generator&theme=0"
                        //width="100%" 
                        height="360"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="music"
                    >

                    </iframe>
                </div>
            </div>



            {/* Botón flotante de WhatsApp */}
            <a
                href="https://wa.me/5491134027173"
                className="whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="bi bi-whatsapp"></i>
            </a>



        </div >
    );
}

export default HomePage;