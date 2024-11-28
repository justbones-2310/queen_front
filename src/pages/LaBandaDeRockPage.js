import React from "react";
import Header from "../components/layout/Header";



const LaBandaDeRockPage = (props) => {

  return (
    <main>
      <div className="title">
        <h1> La Banda</h1>

      </div>
      <Header />
      <article className="holder">
        <section>
          <h2 className="titulo-principal"> A KIND OF MAGIC <br /> <span> Formación histórica</span> </h2>
        </section>

        <div className="row row-cols-1 row-cols-md-2 g-4 text-center">
          <div className="col">
            <div className="card">
              <img src="./images/Freddie-Mercury/freddie-mercury.jpg" className="card-img-top" alt="Freddie" />
              <div className="card-body">
                <h5 className="card-title">Freddie Mercury</h5>
                <p className="card-text">Voz, piano, teclados, guitarra rítmica (1970-1991)</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="./images/Brian-May/brian-may.jpg" className="card-img-top" alt="Brain" />
              <div className="card-body">
                <h5 className="card-title">Brain May</h5>
                <p className="card-text">Guitarra, piano, teclado y voz (1970-presente)</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="./images/Roger-Taylor/roger-taylor.jpg" className="card-img-top" alt="Roger" />
              <div className="card-body">
                <h5 className="card-title">Roger Taylor</h5>
                <p className="card-text">Batería, percusión y voz (1970-presente)</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="./images/John-Deacon/john-deacon.jpg" className="card-img-top" alt="John" />
              <div className="card-body">
                <h5 className="card-title">John Deacon</h5>
                <p className="card-text">Bajo, guitarra, piano, teclado y voz (1971-1997)</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default LaBandaDeRockPage;
