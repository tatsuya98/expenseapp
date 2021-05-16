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
        connection: process.env.DATABASE_URL,
        migrations: {
            tableName: 'migrations'
        },
        pool: {
            min: 2,
            max: 10
        },
        ssl: true
    }
}