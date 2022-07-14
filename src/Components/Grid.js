import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import BasicExample from './Card';


function ButtonsExample() {
    return (
        <Stack gap={2} className="col-md-5 mx-auto">
            <center>
                <h1>Titulo</h1>
            </center>
            <Row>
                <Col>
                    {<BasicExample/>}
                </Col>
                <Col>
                {<BasicExample/>}
                </Col>
                <Row>
                <center>
                <Col>
                {<BasicExample/>}</Col>
                </center>
                </Row>
                
            </Row>
        </Stack>
    );
}

export default ButtonsExample;