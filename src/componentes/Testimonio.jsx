import React from 'react';

import '../hojas-de-estilo/testimonio.css'
function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        alt='Imagen de un colaborador'
        className='imagen-testimonio'
        src={require(`../imagenes/hernan${props.imagen}.png`)} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en <strong>{props.pais}</strong></p>
        <p className='cargo-testimonio'>
          <strong>{props.cargo}</strong> en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;