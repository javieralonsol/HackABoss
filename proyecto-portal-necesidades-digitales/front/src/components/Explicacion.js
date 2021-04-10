export const Explicacion = (props) => {
  // console.log('Pintando Explicacion');

  return (
    <div className="explicacion">
      <div className="explicacionbox">
        <img className="imageexplicacion" src="/media/img/explicacion1.jpg" alt="foto explicación"></img>
        <div>
          <span className="textoexplicacion">Te atascas y no sabes cómo continuar</span>
        </div>
      </div>
      <div className="explicacionbox">
        <img className="imageexplicacion" src="/media/img/explicacion2.jpg" alt="foto explicación 2"></img>
        <div>
          <span className="textoexplicacion">Publicas tu pregunta y adjuntas tu archivo</span>
        </div>
      </div>

      <div className="explicacionbox">
        <img className="imageexplicacion" src="/media/img/explicacion3.jpg" alt="foto explicación 3"></img>
        <div>
          <span className="textoexplicacion">Otros usuarios aportan posibles soluciones</span>
        </div>
      </div>
      <div className="explicacionbox">
        <img className="imageexplicacion" src="/media/img/explicacion4.jpg" alt="foto explicación 4"></img>
        <div>
          <span className="textoexplicacion">Encuentras la solución que necesitabas</span>
        </div>
      </div>
    </div>
  );
};
