
exports.up = async function(knex) {
    await knex.schema.alterTable("cars", (table) => {
      table.text("transmission")
  })
};

exports.down = async function(knex) {
    await knex.schema.alterTable("cars", (table) => {
      table.dropColumn("transmission")
  })
};
