import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import AdministradorItem from '../components/administrador/AdministradorItem';
import './../styles/pages/AdministradorPage.css';
import Header from "../components/layout/Header";


const AdministradorPage = (props) => {

    const [loading, setLoading] = useState(false);

    const [administrador, setAdministrador] = useState([]);

    useEffect(() => {

        const cargarAdministrador = async () => {
            setLoading(true);

            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/administrador`);

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
                <div className="musica">
                    <div className="music-news">

                        <h1> Por acá un poco de historia de las canciones de Queen ! </h1>

                        {
                            loading ? (
                                <p> Cargando...</p>
                            ) : (
                                administrador.map(item => <AdministradorItem key={item.id}
                                    title={item.titulo} subtitle={item.subtitulo}
                                    imagen={item.imagen} body={item.cuerpo} />)
                            )
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AdministradorPage;