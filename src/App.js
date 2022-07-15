import './App.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import { VehiclesCard, DrivesCard, DateCard } from './Components/cards';



function App() {
  return (
    <>
      <div className='App'>
        <h1 style={{color:'white'}}>Prueba Tecnica</h1>
      </div>
      <div>
        <Container className='Contenedor1'>
          <center>
            <Row>
              <Col><Container className='contenedorVehiculos'><center><VehiclesCard Titulo={'Vehiculos'} Descripcion={'Detalle de vehiculos registrados en la Base de Datos'}/></center></Container></Col>
              <Col><Container className='contenedorPiltos'> <center><DrivesCard Titulo={'Pilotos'} Descripcion={'Detalle de pilotos registrados en la Base de Datos'}/></center></Container></Col>
              <Col><Container className='contenedorFecha'> <center><DateCard Titulo={'Fechas Disponibles'} Descripcion={'Buscar pilotos y vehiculos disponibles por rango de fecha'}/></center></Container></Col>
            </Row>
          </center>
        </Container>

      </div>
    </>
  );
}

export default App;
