import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarClic = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
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
          manejarClic={reiniciarClic} />
      </div>
    </div>
  );
}

export default App;
