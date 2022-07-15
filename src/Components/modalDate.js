import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SelectDate } from './FormDate';

import { DatesList } from './ListDates';

export function ModalDate() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [vehicle, setVehicle] = useState({
    Capacidad: 0,
    Ubicacion: '',
    Depreciacion: 0,
    Carga: ''
})
const [vehicles, setvehicles] = useState([])

const [listVUpdated, setListVUpdated] = useState(false)

useEffect(() => {
  const getVehicles = () => {
    fetch('http://localhost:4000/vehiculos')
    .then(res => res.json())
    .then(res => setvehicles(res))
  }
  getVehicles()
  setListVUpdated(false)
}, [listVUpdated])


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Buscar por Fecha
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Fechas Disponibles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='container'>
            <div className='row'>
              <div className='col-8'>
              <DatesList setVehicle={setVehicle} vehicle={vehicle} vehicles={vehicles} setListVUpdated={setListVUpdated}/>
              </div>
              <div className='col-4'>
                  <SelectDate/>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
