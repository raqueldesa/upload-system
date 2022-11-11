const Sequelize = require("sequelize")
const database = require("./index")

const Relatorio = database.define("relatorio",{
    data:{
        type:Sequelize.DATEONLY,
    },
    open:{
        type:Sequelize.FLOAT,
    },
    high:{
        type:Sequelize.FLOAT,
    },
    low:{
        type:Sequelize.FLOAT,
    },
    close:{
        type:Sequelize.FLOAT,
    },
    volume:{
        type:Sequelize.FLOAT,
    },
    status:{
        type: Sequelize.STRING,
        allowNull: true
    }

})

module.exports = Relatorio;