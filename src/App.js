import 'bootstrap/dist/css/bootstrap.min.css';
import background from './img/clean.jpg'
import './App.css'
import DarkVariantExample from './Components/Carrusel';
import Titulo from './Components/Titulo'

function App() {
  return (
    <>
    <div>
      <center>
        <h1 style={{color:'white'}}>PRUEBA TECNICA</h1>
      </center>
    </div >
    <div className='contenido'>
    <DarkVariantExample/>
    </div>
 
    </>
    
  );
}

export default App;
