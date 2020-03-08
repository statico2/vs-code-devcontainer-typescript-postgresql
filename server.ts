import * as express from "express"

const PORT = 3000
const HOST = "0.0.0.0"

const app = express()
app.get("/", (req: any, res: any) => {
  res.send("Hello remote world! 2\n")
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
