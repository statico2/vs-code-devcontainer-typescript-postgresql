require("ts-node/register")

module.exports = {
  client: "pg",
  connection: {
    host: "db",
    user: "user",
    password: "pass",
    database: "data"
  },
  migrations: {
    // This is missing from the TypeScript types currently.
    stub: "migration.stub"
  }
}
