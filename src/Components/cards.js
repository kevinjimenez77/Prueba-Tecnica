import Card from 'react-bootstrap/Card';

import piloto_img from '../Images/conductor.jpg'
import vehicle_img from '../Images/camiones.jpg'
import date_img from '../Images/clean.jpg'
//Modales

import { ModalDate } from './modalDate';
import { ModalDrivers } from './modalDriver';
import { ModalVehicles } from './modalVehicles';



export function VehiclesCard({ Titulo, Descripcion, Modal }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={vehicle_img} />
      <Card.Body>
        <Card.Title><h2>{Titulo}</h2></Card.Title>
        <Card.Text>
          {Descripcion}
        </Card.Text>
        <Card.Footer>
          <ModalVehicles/>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export function DrivesCard({ Titulo, Descripcion, Modal }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={piloto_img} />
      <Card.Body>
        <Card.Title><h2>{Titulo}</h2></Card.Title>
        <Card.Text>
          {Descripcion}
        </Card.Text>
        <Card.Footer>
          <ModalDrivers/>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export function DateCard({ Titulo, Descripcion, Modal }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={date_img} />
      <Card.Body>
        <Card.Title><h2>{Titulo}</h2></Card.Title>
        <Card.Text>
          {Descripcion}
        </Card.Text>
        <Card.Footer>
          <ModalDate/>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

