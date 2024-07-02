// database.js

const sqlite3 = require("sqlite3").verbose()

// Abre a conexão com o banco de dados SQLite
const db = new sqlite3.Database("users.db")

// Cria a tabela se ainda não existir
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  )`)
})

module.exports = db
