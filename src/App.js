import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      numClics: 0
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador =this.reiniciarContador.bind(this);
  }

  manejarClic(){
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  reiniciarContador(){
    this.setState({ numClics: 0 })
  }
  render(){
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
            <Contador numClics={this.state.numClics} />
            <Boton
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={this.manejarClic} />
            <Boton
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}

// function App() {

//   const [numClics, setNumClics] = useState(0);

//   const manejarClic = () => {
//     setNumClics(numClics + 1);
//   }

//   const reiniciarClic = () => {
//     setNumClics(0);
//   }

//   return (
//     <div className="App">
//       <div className='freecodecamp-logo-contenedor'>
//         <img
//           className='freecodecamp-logo'
//           src={freeCodeCampLogo}
//           alt='Logo de freeCodeCamp'
//         />
//       </div>
//       <div className='contenedor-principal'>
//           <Contador numClics={numClics} />
//           <Boton
//           texto='Clic'
//           esBotonDeClic={true}
//           manejarClic={manejarClic} />
//           <Boton
//           texto='Reiniciar'
//           esBotonDeClic={false}
//           manejarClic={reiniciarClic} />
//       </div>
//     </div>
//   );
// }

export default App;
