const Sequelize = require('sequelize')
const db = require('../db/connection')

const Job = db.define('job', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  salary: {
    type: Sequelize.STRING
  },
  company: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.STRING
  },
  updatedAt: {
    type: Sequelize.STRING
  },
  new: {
    type: Sequelize.INTEGER
  },
  id: {
    type: Sequelize.INTEGER
  }
})

module.exports = Job