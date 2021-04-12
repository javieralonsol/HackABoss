export const Banner = (props) => {
  // console.log('Pintando Banner');

  return (
    <div className="banner">
      <img className="imagebanner" src="/media/img/portada.webp" alt="foto de portada"></img>

      <a href="/services">
        <div className="cuadrobanner">
          <div className="lineabanner">
            <span>RESPONDE una</span>
            <span className="textoBanner">PREGUNTA</span>
          </div>
          <div className="lineabanner">
            <span>APORTA una</span>
            <span className="textoBanner">SOLUCION</span>
          </div>
        </div>
      </a>
    </div>
  );
};
