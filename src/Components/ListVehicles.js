import React from "react";


export function VehiclesList({ setVehicle, vehicle, vehicles, setListVUpdated }) {

    const handleDelete = id => {
        const requesInit = {
            method: 'DELETE'
        }

        fetch('http://localhost:4000/vehiculos/' + id, requesInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setListVUpdated(true)

    }
    let { Capacidad, Ubicacion, Depreciacion, Carga } = vehicle

    const handleUpdate = id => {
        //validacion
        if (Capacidad === 0 || Ubicacion === '' || Depreciacion === 0 || Carga === '') {
            alert("Campos Incorrectos")
            return
        }

        const requesInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(vehicle)
        }

        fetch('http://localhost:4000/vehiculos/' + id, requesInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setVehicle({
            Capacidad: 0,
            Ubicacion: '',
            Depreciacion: 0,
            Carga: ''
        })

        setListVUpdated(true)
    }

    return (
        <div className="table-wrapper-scroll-y">
            <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Capacidad</th>
                    <th>Ubicacion</th>
                    <th>Depreciacion</th>
                    <th>Carga</th>
                </tr>
            </thead>
            <tbody>
                {vehicles.map(vehicle => (
                    <tr key={vehicle.IdVehiculo}>
                        <td>{vehicle.IdVehiculo}</td>
                        <td>{vehicle.Capacidad}</td>
                        <td>{vehicle.Ubicacion}</td>
                        <td>{vehicle.Depreciacion}</td>
                        <td>{vehicle.Carga}</td>
                        <td>
                            <div className="btn-group">
                                <button onClick={() => handleDelete(vehicle.IdVehiculo)} className="btn btn-danger btn-sm" >Eliminar</button>
                                <button onClick={() => handleUpdate(vehicle.IdVehiculo)} className="btn btn-secondary btn-sm">Actualizar</button>
                            </div>


                        </td>
                    </tr>
                )

                )}
            </tbody>
        </table>
        </div>


    )
}