import React from "react";
import Header from "../components/layout/Header";

const MusicaPage = (props) => {
    return (
        <main >
            <Header />
            <div class="holder">
                <h2>All we hear is radio ga ga</h2>
                <div className="song-of-the-day">
                    <h3>Un día como hoy Queen compartía con nosotros,
                        los mortales, la canción </h3>
                    <h4>Song</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos dolorem sequi qui, non voluptatem.
                        Cum voluptatibus veniam delectus placeat tempora distinctio quidem minima aspernatur, numquam dicta
                        doloremque
                        consectetur neque?
                    </p>
                </div>
            </div>
        </main>
    );
}

export default MusicaPage;