import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'


function App() {

  const manejarClic = () => {
    console.log('clic');
  }

  const reiniciarClic = () => {
    console.log('reiniciar');
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
          <Contador numClics='5' />
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
