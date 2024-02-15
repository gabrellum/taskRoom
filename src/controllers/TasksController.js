const knex = require('../database/knex')

class TasksController {

    async create(req, res) {
        const { title, description } = req.body
        const { user_id } = req.params

         await knex('tasks').insert({
            title,
            description,
            user_id
          
        })

      
        return res.status(201).json("Post criado com sucesso")
    }

    async listTasks(req, res) {
    const tasks = await knex('tasks')
    res.json(tasks)
    }

    async deleteTasks(req, res) {
        const { id } = req.params

        await knex('tasks').where({id}).delete()

        return res.status(200).json("Resgistro deletado com sucesso")
}
    async updateTasks(req, res) {
        const { id } = req.params
        const { title, description } = req.body 

        await knex('tasks').where({id}).update({
            title,
            description
        })
        
        return res.status(200).json("Registro atualizado com sucesso")
}
async checkstatus(req, res) { 
    const { id } = req.params

    const task = await knex('tasks').where({id});
    
    

    if(!task) {
        return res.status(400).json({error: 'Task not found'})

    }
        const [{status}] = task
        let updateStatus = status

        if(status === 0) {
            updateStatus = 1
        }
        else {
            updateStatus = 0
        }
        
        await knex('tasks').where({id}).update({
            status: updateStatus
        })
    return res.status(200).json(status)
}
}

module.exports = TasksController