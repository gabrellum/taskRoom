const mysql = require('mysql2');

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gerenciador_de_tarefas'
})

async function connection() {
    conn.connect((err) => {
        if(err) {
            throw err;
        }
        console.log('MySql Connect ...')
    })
    conn.destroy()
}

module.exports = {connection, conn}