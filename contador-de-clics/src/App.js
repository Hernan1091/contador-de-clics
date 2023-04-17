import { useState } from 'react'

import './App.css';
import freeCodeCampLogo from './imagenes/logo-freecodecamp.png'
import Boton from './componentes/Boton.jsx'
import Contador from './componentes/Contador';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div className='App'>
      <div className='frecodecamp-logo-contenedor'>
        <img
          alt='Logo de frecodecamp'
          className='frecodecamp-logo'
          src={freeCodeCampLogo} />

      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
