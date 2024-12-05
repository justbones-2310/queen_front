import React from "react";
import Header from "../components/layout/Header";
import './../styles/pages/LaBandaDeRockPage.css'


const LaBandaDeRockPage = (props) => {

  return (
    <main>
      <div className="title">
        <h1> La Banda de Rock!</h1>

      </div>
      <Header />
      <article className="holder">
        <section>
          <h2 className="titulo-principal"> A KIND OF MAGIC <br /> <span> Formación histórica</span> </h2>
        </section>

        <div className="container">
          <div className="grid-item">
            <img src="./images/Freddie-Mercury/freddie-mercury.jpg" alt="Freddie" />

            <h3 className="shine"> <span>Freddie Mercury</span> </h3>
            <p> Voz, piano, teclados, guitarra rítmica (1970-1991)</p>
          </div>

          <div className="grid-item">
            <img src="./images/Brian-May/brian-may.jpg" alt="Brain" />

            <h3 className="shine"> <span>Brain May</span> </h3>
            <p> Guitarra, piano, teclado y voz (1970-presente)</p>
          </div>

          <div className="grid-item">
            <img src="./images/Roger-Taylor/roger-taylor.jpg" alt="Roger" />

            <h3 className="shine"> <span>Roger Taylor</span> </h3>
            <p> Batería, percusión y voz (1970-presente)</p>
          </div>

          <div className="grid-item">
            <img src="./images/John-Deacon/john-deacon.jpg" alt="John" />

            <h3 className="shine"> <span>John Deacon</span> </h3>
            <p>Bajo, guitarra, piano, teclado y voz (1971-1997)</p>
          </div>

        </div>
      </article>
    </main>
  );
}

export default LaBandaDeRockPage;
