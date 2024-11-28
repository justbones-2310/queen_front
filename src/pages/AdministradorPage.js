import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import AdministradorItem from '../components/administrador/AdministradorItem';

import Header from "../components/layout/Header";


const AdministradorPage = (props) => {

    const [loading, setLoading] = useState(false);

    const [administrador, setAdministrador] = useState([]);

    useEffect(() => {

        const cargarAdministrador = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/api/administrador');

            setAdministrador(response.data);
            setLoading(false);
        };

        cargarAdministrador();
    }, []);

    return (
        <main >
            <div className="title">
                <h1> Música </h1>
            </div>

            <Header />

            <section className="holder">
                <h2> Administrador </h2>
                {
                    loading ? (
                        <p> Cargando...</p>
                    ) : (
                        administrador.map(item => <AdministradorItem key={item.id}
                            title={item.titulo} subtitle={item.subtitulo}
                            imagen={item.imagen} body={item.cuerpo} />)
                    )
                }

                {/*<h2>All we hear is radio ga ga</h2>
                <div className="song-of-the-day">
                    <h3>Un día como hoy Queen compartía con nosotros,
                        los mortales, la canción </h3>
                    <h4>Song</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos dolorem sequi qui, non voluptatem.
                        Cum voluptatibus veniam delectus placeat tempora distinctio quidem minima aspernatur, numquam dicta
                        doloremque
                        consectetur neque?
                    </p>

                    </div>*/}

            </section>
        </main>
    );
}

export default AdministradorPage;