const db = require('../models')
const Animal = db.animals

exports.index = async (req, res) => {
    try {
        data = await Animal.findAll()

        res.send(data)        
    } catch (error) {
        res.send(`ERRO: ${error}`)
    }

}

exports.create = async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            year: req.body.year
        }

        await Animal.create(data)  
        res.send(data)      
    } catch (error) {
        res.send(`Erro: ${error}`)
    }

}

exports.show = async (req, res) => {
    const id = req.params.id
    const data = await Animal.findOne({
        where: { id: id }
    })

    res.send(data)
}

exports.update = async (req, res) => {

    try {
        const id = req.params.id

        const data = {
            name: req.body.name,
            year: req.body.year,
        }
    
        await Animal.update(data, {
            where: { id: id }
        }) 

        const result = await Animal.findOne({
            where: {
                id: id
            }
        })
        
        res.send(result)

    } catch (error) {
        res.send(`ERRO: ${error}`)
    }
}

exports.destroy = async (req, res) => {
    try {
        await Animal.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send('Deleted')
    } catch (error) {
        res.send(`ERRO: ${error}`)
    }

}