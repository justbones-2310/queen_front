import React from "react";
import './../styles/pages/LiveAidPage.css'
import Header from "../components/layout/Header";
import { useEffect, useState } from "react";


const LiveAidPage = (props) => {

    const [weather, setWeather] = useState(null);
    const [mapVisible, setMapVisible] = useState(false);
    const [weatherVisible, setWeatherVisible] = useState(false);
    const [noticiaVisible, setNoticiaVisible] = useState(false);


    useEffect(() => {
        // Fetch weather information for London, UK
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true"
                );
                const data = await response.json();
                setWeather(data.current_weather);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        fetchWeather();
        // Intersection Observer for animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target.classList.contains("map") && entry.isIntersecting) {
                        setMapVisible(true);
                    } else if (entry.target.classList.contains("weather") && entry.isIntersecting) {
                        setWeatherVisible(true);
                    } else if (entry.target.classList.contains("noticia") && entry.isIntersecting) {
                        setNoticiaVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const mapElement = document.querySelector(".map");
        const weatherElement = document.querySelector(".weather");
        const noticiaElement = document.querySelector(".noticia");

        if (mapElement) observer.observe(mapElement);
        if (weatherElement) observer.observe(weatherElement);
        if (noticiaElement) observer.observe(noticiaElement);

        return () => observer.disconnect();
    }, []);

    return (
        <div>

            <Header />

            <div className="title">
                <h1> Live Aid </h1>
            </div>

            <div className="grid-container holder">

                <main className="liveaid">

                    <h1> 13 de julio de 1985 </h1>

                    <h2> Estadio de Wembley </h2>

                    <div className="concierto">
                        <iframe
                            src="https://www.youtube.com/embed/_9pfbgpYDsk?si=bqjU7Hlz5cu7xusy" alt="cargando..." title="show"  >
                        </iframe>
                    </div>
                </main>

                <article className={`noticia ${noticiaVisible ? "visible" : ""}`}>
                    <h1> Veinte minutos de delirio</h1>
                    <p>
                        En ese espacio de tiempo Queen interpreto seis temas que quedarían inmortalizados para siempre.
                        Comenzaron con un fragmento de Bohemian Rhapsody que enlazaron con sus dos éxitos más recientes,
                        Radio Ga Ga y Hammer To Fall. En ese ambiente cargado de emoción, Mercury se colgó una guitarra y
                        recuperó ese tema que suena a viejo rock and roll, Crazy Little Thing Called Love. Finalmente,
                        sellaron ese momento icónico en la historia del Rock con sus dos himnos: We Will Rock You y
                        We Are The Champions.
                    </p>
                </article>

                <div className="info-sections">
                    <section className={`map ${mapVisible ? "visible" : ""}`}>
                        <h2> Visita el estadio de Wembley </h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9948.979455083153!2d-0.28636716802004085!3d51.55602127898161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876136f668ca2e3%3A0x7c43b58b9971e1ea!2sWembley%20Stadium!5e0!3m2!1sen!2suk!4v1697576353452!5m2!1sen!2suk"
                            alt="cargando..." title="stadium"
                        ></iframe>
                    </section>
                    <aside className={`weather ${weatherVisible ? "visible" : ""}`}>
                        <h2>Clima en Londres</h2>
                        {weather ? (
                            <div>
                                <p><strong>Temperatura:</strong> {weather.temperature}°C</p>
                                <p><strong>Viento:</strong> {weather.windspeed} km/h</p>
                                <p><strong>Condición:</strong> {weather.weathercode === 0 ? "Despejado" : "Parcialmente nublado"}</p>
                            </div>
                        ) : (
                            <p>Cargando información del clima...</p>
                        )}
                    </aside>
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



        </div>
    );
}

export default LiveAidPage;