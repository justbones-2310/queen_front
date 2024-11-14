import React from "react";
import './../styles/pages/LiveAidPage.css'
import Header from "../components/layout/Header";

const LiveAidPage = (props) => {
    return (
        <main>
            <Header />
            <div className="holder grid container">
                <section className="liveaid">

                    <h1> 13 de julio de 1985 </h1>

                    <div className="concierto">
                        <iframe width="560" height="315"
                            src="https://www.youtube.com/embed/_9pfbgpYDsk?si=bqjU7Hlz5cu7xusy"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                            gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </section>

                <article className="noticia">
                    <h1> Veinte minutos de delirio</h1>
                    <p>
                        En ese espacio de tiempo Queen interpreto seis temas que quedarían inmortalizados para siempre.
                        Comenzaron con un fragmento de Bohemian Rhapsody que enlazaron con sus dos éxitos más recientes,
                        Radio Ga Ga y Hammer To Fall. Entonces, Mercury se colgó una guitarra y recuperó ese tema que suena
                        a viejo rock and roll, Crazy Little Thing Called Love. Finalmente, sellaron ese
                        momento icónico en la historia del Rock con sus dos himnos: We Will Rock You y We Are The Champions.
                    </p>
                </article>

                <aside className="links border">

                </aside>
            </div>
        </main>
    );
}

export default LiveAidPage;