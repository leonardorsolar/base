// Função para salvar os dados no banco de dados SQLite
function saveData() {
    var name = document.getElementById("name").value
    console.log(db)
    // Cria uma conexão com o banco de dados SQLite
    var db = new SQL.Database()
    console.log(db)
    // Cria uma tabela para armazenar os dados, se não existir
    db.run("CREATE TABLE IF NOT EXISTS users (name TEXT)")

    // Insere os dados na tabela
    db.run("INSERT INTO users (name) VALUES (?)", [name])

    // Fecha a conexão com o banco de dados
    db.close()

    alert("Dados salvos no banco de dados SQLite!")

    // Limpa o formulário após salvar os dados
    document.getElementById("name").value = ""
}
