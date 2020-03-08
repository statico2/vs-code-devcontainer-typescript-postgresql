import * as Knex from "knex"

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex("things")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("things").insert([
        { id: 1, name: "foo" },
        { id: 2, name: "bar" },
        { id: 3, name: "baz" }
      ])
    })
}
