import { Link } from "react-router-dom";

export const MenuFooter = (props) => {
  // console.log('Pintando MenuFooter');

  return (
    <div className="menufooter">
      <Link to="/faq">FAQ</Link>
      <Link to="/about">Sobre Helpium</Link>
      <Link to="/condiciones">Condiciones de Uso</Link>
      <Link to="/Contacto">Contacto</Link>
      <Link to="/cookies">Privacidad y Cookies</Link>
    </div>
  );
};
