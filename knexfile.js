// Update with your config settings.
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
        connection: {
            database: process.env.DATABASE,
            user: process.env.USER,
            password: process.env.PASSWORD
        },
        migrations: {
            directory: __dirname + '/backend/migrations'
        },
        pool: {
            min: 2,
            max: 10
        },
    }
}