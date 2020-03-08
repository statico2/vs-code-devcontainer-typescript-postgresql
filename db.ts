import * as Knex from "knex"

const config = require("./knexfile")

const instance: Knex = Knex(config as Knex.Config)

console.log(
  `Will connect to postgres://${config.connection.user}@${config.connection.host}/${config.connection.database}`
)
instance
  .raw("select 1")
  .then(() => {
    console.log(`Connected to database - OK`)
  })
  .catch(err => {
    console.error(`Failed to connect to database: ${err}`)
    process.exit(1)
  })

export const db = () => instance

// Returns a timestamp suitable for inserting into Postgres
export const timestamp = (): string => new Date().toUTCString()
