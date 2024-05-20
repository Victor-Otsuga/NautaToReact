import {} from 'react';
import '../css/estilo.scss';
import footerLogo from '../assets/evologo.png';
function Footer() {

  return (
    <>
      <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">Projeto</a>
        </li>
        <li className="nav-item">
          <a href="./pitch.html" className="nav-link px-2 text-body-secondary">Pitch</a>
        </li>
        <li className="nav-item">
          <a href="./prototipo.html" className="nav-link px-2 text-body-secondary">Protótipo</a>
        </li>
        <li className="nav-item">
          <a href="./contato.html" className="nav-link px-2 text-body-secondary">Contato</a>
        </li>
      </ul>
      <p className="text-center text-body-secondary">© 2024 Evo</p>
      <div className="footer-img">
      <img className="footer-logo" src={footerLogo}/>
     </div>
    </footer>
    </>
  );
}
export default Footer;
