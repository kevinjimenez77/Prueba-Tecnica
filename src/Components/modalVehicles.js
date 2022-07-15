import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//Listar y Form
import { VehiclesList } from './ListVehicles';
import VehiclesForm from './formVehicles';

export function ModalVehicles() {
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ver Vehiculos
      </Button> 

      <Modal show={show} onHide={handleClose} size="xl" fullscreen="true">
        <Modal.Header closeButton>
          <Modal.Title>Vehiculos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            <div className='row'>
              <div className='col-8'>
                  <VehiclesList setVehicle={setVehicle} vehicle={vehicle} vehicles={vehicles} setListVUpdated={setListVUpdated}/>
              </div>
              <div className='col-4'>
                  <VehiclesForm vehicle={vehicle} setVehicle={setVehicle} setListVUpdated={setListVUpdated}/>
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
