import React from "react";
import { VehiclesList } from './ListVehicles';
import { FormVehicles } from './formVehicles';
import { useState, useEffect } from 'react';

export function Prueba () {

    const [vehicle, setVehicle] = useState({
        IdVehiculo: '',
        Capacidad: 0,
        Ubicacion: '',
        Depreciacion: 0,
        Carga: 0
      })
    
      const [vehicles, setvehicles] = useState([])
    
    
      useEffect(() => {
        const getVehicles = () => {
          fetch('http://localhost:4000/vehiculos')
          .then(res => res.json())
          .then(res => setvehicles(res))
        }
        getVehicles()
      }, [])
    

return(
    <>
    <div>
        <VehiclesList vehicles={vehicles}/>
    </div>
    <div>
        <FormVehicles vehicle={vehicle} setVehicle={setVehicle}/>
    </div>
    </>
)

}