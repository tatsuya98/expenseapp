// Update with your config settings.
require('dotenv').config();
module.exports = {

    development: {
        client: 'postgresql',
        connection: {
            database: 'expensedb',
            user: 'postgres',
            password: 'epicduel'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        },
    },
    production:{
        client:'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/backend/migrations'
        },
        pool: {
            min: 2,
            max: 10
        },
    }
}