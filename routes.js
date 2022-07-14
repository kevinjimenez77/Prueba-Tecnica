const { application } = require('express')
const express = require('express')
const routes = express.Router()

//GET

routes.get('/vehiculos',(req,res) => {
    req.getConnection((err, conn) => {
        try{ 
            conn.query('SELECT * FROM Vehiculos', (err, rows) => {
                res.json(rows);
            })
        }catch(error){
            throw error
        }
    })
})

routes.get('/pilotos', (req,res) => {
    req.getConnection((err, conn) => {
        try{ 
            conn.query('SELECT * FROM Pilotos', (err, rows) => {
                res.json(rows);
            })
        }catch(error){
            throw error
        }
    })
})

//POST

routes.post('/vehiculos', (req,res) => {
    req.getConnection((err, conn) => {
        try{ 
            conn.query('INSERT INTO Vehiculos SET ?',[req.body], (err, rows) => {
                res.send('vehiculo agregado');
            })
        }catch(error){
            throw error
        }
    })
})

routes.post('/pilotos', (req,res) => {
    req.getConnection((err, conn) => {
        try{ 
            conn.query('INSERT INTO Pilotos SET ?',[req.body], (err, rows) => {
                res.send('piloto agregado');
            })
        }catch(error){
            throw error
        }
    })
})

//DELETE

routes.delete('/vehiculos/:id', (req,res) => {
    req.getConnection((err, conn) => {
        try{ 
            conn.query('DELETE FROM Vehiculos WHERE IdVehiculo = ?',[req.params.id], (err, rows) => {
                res.send('vehiculo eliminado');
            })
        }catch(error){
            throw error
        }
    })
})

routes.delete('/pilotos/:id', (req,res) => {
    req.getConnection((err, conn) => {
        try{ 
            conn.query('DELETE FROM Pilotos WHERE IdPiloto = ?',[req.params.id], (err, rows) => {
                res.send('piloto eliminado');
            })
        }catch(error){
            throw error
        }
    })
})

//PUT
routes.put('/vehiculos/:id', (req,res) => {
    req.getConnection((err, conn) => {
        try{ 
            conn.query('UPDATE FROM Vehiculos set ? WHERE IdVehiculo = ?',[req.body, req.params.id], (err, rows) => {
                res.send('vehiculo actualizado');
            })
        }catch(error){
            throw error
        }
    })
})

routes.put('/pilotos/:id', (req,res) => {
    req.getConnection((err, conn) => {
        try{ 
            conn.query('UPDATE FROM Pilotos set ? WHERE IdVehiculo = ?',[req.body, req.params.id], (err, rows) => {
                res.send('piloto actualizado');
            })
        }catch(error){
            throw error
        }
    })
})






module.exports = routes