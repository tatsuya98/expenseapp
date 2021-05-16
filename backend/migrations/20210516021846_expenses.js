
exports.up = function(knex) {
  return knex.schema.createTable('expenses',table=>{
      table.increments('id')
      table.bigInteger('amount').notNullable()
      table.string('expense_type').notNullable()
      table.timestamp('spend_date').notNullable()
  })
};

exports.down = function(knex) {
  
};
