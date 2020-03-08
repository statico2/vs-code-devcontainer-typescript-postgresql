import * as express from "express"

import { db } from "./db"

const PORT = 3000
const HOST = "0.0.0.0"

const app = express()
app.get("/", async (req: any, res: any) => {
  const data = await db()
    .select("*")
    .from("things")
  res.send(
    `<pre>
      Hello, world! Here are some things from the database:
      ${JSON.stringify(data, null, "  ")}
    </pre>`
  )
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
