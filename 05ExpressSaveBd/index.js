express = require("express")
const db = require("./database") // Importa o módulo de conexão com o banco de dados
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
    const { name } = req.body

    // Insere os dados recebidos no banco de dados
    db.run(`INSERT INTO users (name) VALUES (?)`, [name], function (err) {
        if (err) {
            return console.error(err.message)
        }
        console.log(`Row inserted with id: ${this.lastID}`)
    })

    // Responde ao cliente com uma mensagem de confirmação
    res.send("Dados recebidos e salvos com sucesso!")
})

// Servidor escutando na porta especificada
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`)
})
