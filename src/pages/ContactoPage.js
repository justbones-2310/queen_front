import React from "react";
import '../styles/pages/ContactoPage.css';
import Header from "../components/layout/Header";

const ContactoPage = (props) => {
  return (
    <main>
      <Header />
      <section className="holder contacto">
        <div>
          <h2> Get in touch </h2>

          <form action="" method="" className="formulario">
            <p>
              <label for="nombre"> Nombre</label>
              <input type="text" name="" />
            </p>

            <p>
              <label for="email"> Email </label>
              <input type="text" name="" />
            </p>

            <p>
              <label for="pais">País</label>
              <input type="text" name="" />
            </p>

            <p>
              <label for="mensaje">Mensaje</label>
              <textarea name="" id=""> </textarea>
            </p>

            <p>
              <input type="submit" value="Compartir" />
            </p>
          </form>

        </div>

        <div className="datos">
          <h2> Me presento </h2>
          <p>Soy Bones, vivo en Buenos Aires, fan de Queen, mi momento favorito
            del día es el atardecer y tengo tres perritos. Hace aproximadamente dos años
            fallecio uno de ellos, me gustaba llamarla Queen. Por algún lugar de esta página
            compartí su foto.
            <br />
            En realidad, esta web site es en honor a ella. Hasta el infinito
            y más allá Salsita, líder de los Guardianes de la Vagancia. Te amo.
          </p>
          <ul>
            <li>Instagram</li>
            <li>Discord</li>
            <li>Email: justbones2310@gmail.com</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ContactoPage;
