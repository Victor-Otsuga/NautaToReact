import {} from "react";
import "../css/estilo.scss";
import astro from "../assets/astronaut.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="base-sec fst-sec">
        <div className="intro">
          <h1>Bem vindo ao Nauta</h1>
          <p>Uma solução gameficada construida do zero!</p>
        </div>
        <div className="intro-img">
          <img src={astro} alt="" />
        </div>
      </section>

      <section className="base-sec scn-sec">
        <div className="base-info sec-title">
          <h3>Sobre o Projeto</h3>
        </div>
        <div className="base-info">
          <p>
            Estamos desenvolvendo uma aplicação para o Instituto da Criança e do
            Adolescente (ICR), que utiliza gamificação e assistência lúdica para
            tornar a jornada do paciente pediátrico mais interativa e
            informativa, baseada no conceito "Child Life Specialisty" de Dra.
            Sandra Mutarelli. Nosso objetivo é transformar informações em
            entretenimento gamificado, promovendo a articulação entre tecnologia
            e humanização hospitalar.
          </p>
        </div>
        
        <Link className="btn btn-primary rounded-pill px-3" to="/Pitch">
          Ver Pitch
        </Link>
       
        
      </section>
    </>
  );
}

export default Home;
