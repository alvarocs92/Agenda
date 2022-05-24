import mysql from 'mysql'
let todos

// crear conexion mysql
const conector = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agenda_contactos'
})

const conectar = () => {
    conector.connect(err => {
        if(err) throw err
        console.log('conectado')
    })
}

const agregarContacto = (nombre, numero) => {

    const sql = `INSERT INTO agenda (id_agenda, nombre_contacto, numero_contacto) VALUES (${null}, "${nombre}", ${numero})`
    conector.query(sql, function (err, result, filed) {
        if (err) throw err
        console.log(result)
        
    })

}

const obtenerContactos = () =>{

    const sql = 'SELECT * FROM agenda'
    conector.query(sql, function (err, result, field) {
    todos = result        
    })

    return todos
}


const borrarContacto = (id) =>{
    const sql =  `DELETE FROM agenda where id_agenda=${id}`
    conector.query(sql , function (err, result, filed) {
        if (err) throw err
        console.log("borro")
    })

}


export {conectar, agregarContacto, obtenerContactos, borrarContacto}