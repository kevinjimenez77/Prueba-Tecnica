import Carousel from 'react-bootstrap/Carousel';

import Container from 'react-bootstrap/esm/Container';
import BasicExample from './Card';


function DarkVariantExample() {
  return (
    <>
      <center><h1 style={{color:'white'}}>FUNCIONALIDADES</h1></center>
      <Carousel variant="light" className="col justify-content-center">
        <Carousel.Item>
          <Container>
            <center>{<BasicExample Titulo={'Vehiculos'} Descripcion={'Detalle de cada vehiculo, agregar o eliminar'} />}</center>
          </Container>

        </Carousel.Item>
        <Carousel.Item>
        <Container>
            <center>{<BasicExample Titulo={'Pilotos'} Descripcion={'Detalle de los pilotos registrados, agregar o eliminar'} />}</center>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
        <Container>
            <center>{<BasicExample Titulo={'Buscar Disponibles'} Descripcion={'Verificar los pilotos y vehiculos disponibles en un rango de fechas'}/>}</center>
          </Container>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default DarkVariantExample;