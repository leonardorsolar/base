document
    .getElementById("user-form")
    .addEventListener("submit", function (event) {
        event.preventDefault() // Previne o comportamento padrão de enviar o formulário

        // Obtém os valores dos campos do formulário
        var name = document.getElementById("name").value
        var email = document.getElementById("email").value

        // Atualiza o conteúdo dos elementos com os IDs 'user-name' e 'user-email'
        document.getElementById("user-name").textContent = "Nome: " + name
        document.getElementById("user-email").textContent = "Email: " + email
    })
