import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerFluidExample({Contenido}) {
  return (
    <Container fluid>
      <Row>
        <Col>{Contenido}</Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;