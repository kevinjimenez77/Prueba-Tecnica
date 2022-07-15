import React from "react";

const VehiclesForm = ({ vehicle, setVehicle, setListVUpdated }) => {


    const handleChange = e => {
        setVehicle({
            ...vehicle,
            [e.target.name]: e.target.value
        })
    }

    let { Capacidad, Ubicacion, Depreciacion, Carga } = vehicle

    const handleSubmit = () => {
        //validacion
        if (Capacidad === 0 || Ubicacion === '' || Depreciacion === 0 || Carga === '') {
            alert("Campos Incorrectos")
            return
        }

        //consulta POST

        const requesInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(vehicle)
        }

        fetch('http://localhost:4000/vehiculos', requesInit)
            .then(res => res.json())
            .then(res => console.log(res))

        setListVUpdated(true)

        setVehicle({
            Capacidad: 0,
            Ubicacion: '',
            Depreciacion: 0,
            Carga: ''
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="capacity" className="form-label">Capacidad metros cubicos:</label>
                <input value={Capacidad} name="Capacidad" onChange={handleChange} type={'number'} id="capacity" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="location" className="form-label">Donde esta ubicado?</label>
                <input value={Ubicacion} name="Ubicacion" onChange={handleChange} type={'text'} id="location" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="dep" className="form-label">Depreciacion por km:</label>
                <input value={Depreciacion} name="Depreciacion" onChange={handleChange} type={'number'} id="dep" className="form-control" />
                <label htmlFor="car" className="form-label">Tipo de carga:</label>
                <input value={Carga} name="Carga" onChange={handleChange} type={'text'} id="car" className="form-control" />

            </div>

            <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
    )
}

export default VehiclesForm