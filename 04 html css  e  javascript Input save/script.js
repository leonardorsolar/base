function saveData() {
    // Obtém os valores dos campos do formulário
    var name = document.getElementById("name").value
    //var email = document.getElementById("email").value
    //var value = document.getElementById("value").value
    // Cria um objeto com os dados do usuário
    var user = {
        name: name,
        // email: email,
        //value: value,
    }
    console.log(user)
    // Exemplo de salvamento local usando localStorage
    localStorage.setItem("userData", JSON.stringify(user))
}
