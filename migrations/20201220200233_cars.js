
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        // table.integer("id").notNull().unique().primary()
        table.increments("id")
        table.integer("VIN").notNull().unique()
        table.text("make").notNull()
        table.text("model").notNull()
        table.integer("milage").notNull()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};

