
exports.seed = async function (knex) {
// clear out the table before adding new value
  await knex("cars").truncate() 
  await knex("cars").insert([
    {VIN:45345345, make:"Honda", model:"Accord", milage:13443, transmission:"Auto", title: "Clean"},
    {VIN:45069856, make:"Nissan", model:"sentra", milage:19345, transmission:"Manual", title: "Salvage"},
    {VIN:98786767, make:"Toyota", model:"Celio", milage:15674, transmission:"Semi-Automatic", title: "bonded"}
  ])
};
