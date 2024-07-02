const express = require("express")
const app = express()
const port = 3000

// Rota principal
app.get("/", (req, res) => {
    res.send("Olá, mundo!")
})

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`)
})
