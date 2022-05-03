import express from "express";
import { response } from "express";

const PORT = 2000

const app = express()

app.get("/hello", (request, response) => {
    response.send("Good mooooooorning!")
})

app.get("/", (request, response) => {
    response.send("It's a good day to learn about apps")
})


app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`))