import * as Knex from "knex"

exports.up = (knex: Knex) =>
  knex.schema.createTable("things", table => {
    table.increments("id")
    table.string("name")
  })

exports.down = (knex: Knex) => knex.schema
