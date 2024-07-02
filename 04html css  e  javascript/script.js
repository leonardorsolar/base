// script.js

// Define o objeto de usuário
var user = {
    name: "leonardo",
    password: 123456,
    value: true,
    email: "leo@gmail.com",
}

// Seleciona os elementos no DOM onde as informações do usuário serão exibidas
var userNameElement = document.getElementById("user-name")
var userEmailElement = document.getElementById("user-email")
var userValueElement = document.getElementById("user-value")

// Atualiza o conteúdo dos elementos com as informações do usuário
userNameElement.textContent = "Nome: " + user.name
userEmailElement.textContent = "Email: " + user.email
userValueElement.textContent = "Valor: " + user.value
