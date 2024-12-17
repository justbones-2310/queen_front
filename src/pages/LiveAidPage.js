import React from "react";
import './../styles/pages/LiveAidPage.css'
import Header from "../components/layout/Header";



const LiveAidPage = (props) => {

    return (
        <div>

            <Header />

            <div className="title">
                <h1> Live Aid </h1>
            </div>

            <div className="grid-container holder">

                <main className="liveaid">

                    <h1> 13 de julio de 1985 </h1>

                    <div className="concierto">
                        <iframe
                            src="https://www.youtube.com/embed/_9pfbgpYDsk?si=bqjU7Hlz5cu7xusy">
                        </iframe>
                    </div>
                </main>

                <article className="noticia">
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

                <section className="gallery">
                    <img src="./images/1985.jpg" className="img-fluid" alt="varios" />
                </section>

                <aside className="map">
                    <h1>Mapa con Marcadores</h1>
                </aside>

            </div>
        </div>
    );
}

export default LiveAidPage;