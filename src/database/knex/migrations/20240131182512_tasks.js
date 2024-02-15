
exports.up = function(knex) {
    return knex.schema.createTable("tasks", (table) => {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.string("description").notNullable();
        table.boolean("status").default("false");
        table.timestamp("created_at").default(knex.fn.now());
        table.integer("user_id").references('id').inTable('users');
       
    })
};


exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
};
