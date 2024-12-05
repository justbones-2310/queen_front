import React from "react";
import '../styles/pages/ContactoPage.css';
import Header from "../components/layout/Header";
import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const ContactoPage = (props) => {

  const initialForm = {
    nombre: '',
    email: '',
    pais: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);

    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }

  return (
    <main>
      <div className="title">

        <h1> Contacto  </h1>

      </div>

      <Header />
      <section className="holder contacto">

        <div className="social">

          <h2> Un poco sobre mi </h2>
          <p>Soy Bones, vivo en Buenos Aires, fan de Queen, mi momento favorito
            del día es el atardecer y tengo tres perritos. Hace aproximadamente dos años
            fallecio uno de ellos, me gustaba llamarla Queen.
            <br />
            Esta web site es en honor a ella, mi enana. Hasta el infinito
            y más allá Salsita, líder de los Guardianes de la Vagancia. Te amo.
          </p>

          <div className="always">
            <NavLink to="https://youtube.com/shorts/wl8edI9I_rc?si=1Zo3-KLBXZKpFhj9"
              target="_blank">

              <img src="/images/queen.jpg" alt="salsita" />

            </NavLink>
          </div>

        </div>

        <div>
          <h2> Pongamos en contacto </h2>

          <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
            <p>
              <label for="nombre"> Nombre</label>
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
            </p>

            <p>
              <label for="email"> Email </label>
              <input type="text" name="email" value={formData.email} onChange={handleChange} />
            </p>

            <p>
              <label for="pais">País</label>
              <input type="text" name="pais" value={formData.pais} onChange={handleChange} />
            </p>

            <p>
              <label for="mensaje">Mensaje</label>
              <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
            </p>

            <p className="acciones">
              <input type="submit" value="Enviar" />
            </p>
          </form>

          {sending ? <p>Enviando ... </p> : null}
          {msg ? <p> {msg} </p> : null}

        </div>

      </section>
    </main>
  );
}

export default ContactoPage;
