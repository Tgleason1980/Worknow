const knex = require('knex')
const config = require('../knexfile')
require('dotenv').config()
require('pg')
const db = knex(config.development);

const dbEnv = process.env.DB_ENV || 'development'

module.exports = knex(config[dbEnv])