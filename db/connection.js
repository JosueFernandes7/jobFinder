const Sequelize = require('sequelize')

// Cria uma conexão com o banco e gera o arquivo app.db
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/app.db'
})
module.exports = sequelize