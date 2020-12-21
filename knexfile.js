// Update with your config settings.

module.exports = {

  development: {
    client: "sqlite3", // tell knex that we are using sqlite3,
    useNullAsDefault: true, //this create a default nul fir the missing value.
    connection: {
      filename: './data/car-dealer.db3'
    }
  },
};
