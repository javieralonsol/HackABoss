import { RedesSociales } from '../components/RedesSociales';

export const Contacto = () => (
  <>
    <img className="imagebannersection" src="/media/img/contacto.jpg" alt="foto sección"></img>
    <h2>Puedes contactar con Helpium</h2>
    <ul>
      <li>
        En nuestro correo electrónico <a href="mailto:contacto@helpium.com">contacto@helpium.com</a>
      </li>
      <li>O a través de nuestras Redes Sociales:</li>
    </ul>
    <RedesSociales></RedesSociales>
  </>
);
