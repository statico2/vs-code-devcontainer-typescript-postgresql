import * as express from "express"
import * as knex from "knex"

const PORT = 3000
const HOST = "0.0.0.0"

const pg = knex({
  client: "pg",
  connection: "postgresql://user:pass@db/data"
})

const app = express()
app.get("/", async (req: any, res: any) => {
  const data = await pg.select("*").from("pg_config")
  res.send(`Hello ${JSON.stringify(data, null, "  ")}`)
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
