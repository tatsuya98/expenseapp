
exports.up = function(knex) {
  return knex.schema.createTable('login',table=>{
      table.string('email').notNullable().unique()
      table.string('hash').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('login')
};
