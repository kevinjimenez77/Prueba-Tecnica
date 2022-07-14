import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import vehiculo from '../img/camiones.jpg';
import piloto from '../img/conductor.jpg';
import clean from '../img/clean.jpg';

function BasicExample({Image, Titulo, Descripcion}) {
  return (
    <Card style={{ width: '40rem' }}>
      <Card.Body>
        <Card.Title>{Titulo}</Card.Title>
        <Card.Text>
          {Descripcion}
        </Card.Text>
        <Container>
        <Button variant="primary">Ver mas...</Button>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;