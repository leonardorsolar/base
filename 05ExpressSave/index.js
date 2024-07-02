const express = require("express")
const app = express()
const port = 3000

// Configuração para receber dados do formulário
app.use(express.urlencoded({ extended: true }))

// Rota principal
app.get("/", (req, res) => {
    res.send("Olá, mundo!")
})

// Rota para lidar com o salvamento dos dados
app.post("/save-data", (req, res) => {
    console.log("save")
    const { name } = req.body

    // Aqui você pode salvar os dados como preferir
    console.log(`Nome recebido: ${name}`)

    // Responde ao cliente com uma mensagem de confirmação
    res.send("Dados recebidos e salvos com sucesso!")
})

// Servidor escutando na porta especificada
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`)
})
