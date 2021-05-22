// Update with your config settings.
module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host:'127.0.0.1',
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
            connectionString:process.env.DATABASE_URL,
            ssl:true
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