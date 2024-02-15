
const path = require('path');

module.exports = {

    development: {
        client: 'mysql2',
        connection: {
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'gerenciador_de_tarefas',
          
        },
       
        migrations: { 
          directory: path.resolve(
            __dirname,
             'src',
            'database',
            'knex',
            'migrations',
            ),
        },
        useNullAsDefault: true,
      },

};
