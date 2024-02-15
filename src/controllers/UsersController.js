const knex = require('../database/knex');

class UsersController {

    async create(req, res) {
        const { name, email, password } = req.body
        
        const [users] = await knex('users').insert({
            name,
            email,
            password
        })

        return res.json(users[0])
    }

    async listUsers(req, res) {
        const users = await knex('users')

        return res.json(users)
    }

    async deleteUser(req, res) {
        const { id } = req.params
    
        await knex('users').where({id}).delete()

        res.status(200).json("Registro deletado com sucesso")
    
        
    }
    
    async updateUser(req, res) {
        const { id } = req.params
        const { name, email, password } = req.body
        
    
         await knex('users').where({id}).update({name, email, password});

        return res.json( ' Registro realizado com sucesso' )


       
        }
}

module.exports = UsersController