import React from "react";
import Header from "../components/layout/Header";
import './../styles/pages/LaBandaDeRockPage.css'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const LaBandaDeRockPage = (props) => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main>

      <Header />

      <div className="title">
        <h1>
          La banda de rock
        </h1>
      </div>

      <section className="history">
        <h1> Formación histórica</h1>
        <p>
          Uno de los grupos de mayor éxito de toda la historia de la música, Queen fue una banda de rock británica que se formó en Londres en 1970. <br />
        </p>

        <p>
          Estaba compuesta por Freddie Mercury, Brian May, Roger Taylor y John Deacon. <br />
        </p>

        <p>
          Los futuros miembros de Queen se conocieron en el oeste de Londres, a finales de la década de los sesenta. Los primeros en conocerse fueron
          Brian May y Roger Taylor, quienes formaron el grupo Smile en 1968. Más tarde, conocieron a Freddie Bulsara, el futuro Freddie Mercury, en una escuela de arte.
          El grupo se llamó Smile hasta que Freddie se unió a la banda como vocalista.
          Fue él quien sugirió llamarla a la banda Queen. Por último, se incorporaría John Deacon.
        </p>
      </section>

      <div className="container holder">

        <div className="grid-item" id="freddie-mercury">

          <div className="flip-container">

            <div className="front">
              <img src="./images/Freddie-Mercury/freddie-mercury.jpg" alt="Freddie" />

              <h3> Freddie Mercury </h3>
              <p> Voz, piano, teclados, guitarra rítmica (1970-1991)</p>
            </div>

            <div className="back">

              <div className="first">
                <h1> “No seré una estrella del rock. Seré una leyenda.”  </h1>
              </div>

              <div className="second">

              </div>

            </div>
          </div>

        </div>

        <div className="grid-item" id="john-deacon">

          <div className="flip-container">

            <div className="front">
              <img src="./images/John-Deacon/john-deacon.jpg" alt="John" />

              <h3> John Deacon </h3>
              <p>Bajo, guitarra, piano, teclado y voz (1971-1997)</p>
            </div>

            <div className="back">


              <h1> Fue el último miembro en incorporarse a Queen, el 1 de marzo de 1971. Se caracterizó por ser un
                bajista brillante y por su personalidad tranquila.
                Deacon se retiró de la música y se recluyó en su casa después de la muerte de Freddie Mercury
              </h1>

            </div>
          </div>
        </div>

        <div className="grid-item" id="brian-may">

          <div className="flip-container">

            <div className="front">
              <img src="./images/Brian-May/brian-may.jpg" alt="Brain" />

              <h3> Brain May </h3>
              <p> Guitarra, piano, teclado y voz (1970-presente)</p>
            </div>

            <div className="back">
              <h1> "Cuando muera seré recordado por Queen, pero preferiría ser recordado por salvar animales." </h1>
            </div>
          </div>
        </div>

        <div className="grid-item" id="roger-taylor">

          <div className="flip-container">

            <div className="front">
              <img src="./images/Roger-Taylor/roger-taylor.jpg" alt="Roger" />

              <h3> Roger Taylor </h3>
              <p> Batería, percusión y voz (1970-presente)</p>
            </div>

            <div className="back">
              <h1> "Vive con tus recuerdos y mantenlos como recuerdos, eso es genial. Olvídate de los malos
                momentos, solo recuerda los buenos y, ya sabes, espera que mañana sea un buen día."
              </h1>
            </div>
          </div>
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



    </main>
  );
}

export default LaBandaDeRockPage;
