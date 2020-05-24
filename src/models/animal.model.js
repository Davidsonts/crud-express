module.exports = (sequelize, Sequelize) => {

    Animal = sequelize.define("animal", {
        name: {
            type: Sequelize.STRING
        },
        year: {
            type: Sequelize.INTEGER
        }

    })

    return Animal
}