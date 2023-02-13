import react from "react";
import "../hojas-estilos/testimonio.css"


function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img src={require(`../imagenes/${props.img}-español.png`)} alt="imagen 1" className="imagen-testimonio"  />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-lugar">
          <strong>{props.nombre}</strong> in {props.pais}</p>
        <p className="cargo-empresa">{props.cargo} at <strong>{props.empresa}</strong></p>
        <p className="testimonio">"{props.testimonio}"</p>
      </div>

    </div>
  );
}







export default Testimonio;