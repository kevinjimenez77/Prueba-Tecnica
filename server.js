const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')
const { json } = require('express')

const app = express()
//Corriendo el servidor
app.listen(4000, () => {
    console.log('Server on port 4000')
})
const dbOptions = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123456',
    database:'prueba'
}
//Middleware
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

//Rutas
app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/', routes)
