import {} from 'react';
import '../css/estilo.scss';
import astro from "../assets/astronaut.png";

function Sobre() {
  return (
    <>
      <section className="base-sec trd-sec">
      <div className="pitch-video">
        <h2>Nosso Pitch</h2>
        <iframe
          width="100%"
          height="250rem"
          src="https://www.youtube.com/embed/TpsLsetjxGM"
          title="Challenge - HC - ICR"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="pitch-info">
        <h2>Sobre o projeto</h2>
        <div className="pitch-img">
            <img src={astro} alt="" />
        </div>
        <p>
          Nosso objetivo é proporcionar uma experiência personalizada e eficaz
          para a criança paciente residente, possibilitando o entretenimento e o
          acolhimento tecnológico, tornando a jornada do paciente mais
          educativa, carismática, envolvente e divertida. Buscamos diminuir a
          incidência de sedativos devido à ansiedade e ao estresse
          pré-operatório, bem como reduzir os números de internações de leitos
          pelos mesmos casos. Para isso, utilizamos recursos de Inteligência
          Artificial que permitem a interação ativa com o paciente por meio de
          jogos e atividades lúdicas, adaptados às suas necessidades e
          preferências.
        </p>
      </div>
    </section>
    </>
  );
}
export default Sobre;
