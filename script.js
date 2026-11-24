
let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

const formulario = document.getElementById("formFuncionario");

const lista = document.getElementById("listaFuncionarios");

const quantidade = document.getElementById("quantidade");


function cadastrarFuncionario(event) {

    event.preventDefault();

    const funcionario = {

        id: Date.now(),

        nome: document.getElementById("nome").value,

        email: document.getElementById("email").value,

        cargo: document.getElementById("cargo").value,

        departamento: document.getElementById("departamento").value,

        senha: document.getElementById("senha").value

    };

    funcionarios.push(funcionario);

    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));

    formulario.reset();

    listarFuncionarios();

}


function listarFuncionarios() {

    lista.innerHTML = "";

    funcionarios.forEach(function(funcionario) {


        const card = document.createElement("div");

        card.className = "card";

        const nome = document.createElement("h3");
        nome.textContent = funcionario.nome;

        const email = document.createElement("p");
        email.textContent = "E-mail: " + funcionario.email;

        const cargo = document.createElement("p");
        cargo.textContent = "Cargo: " + funcionario.cargo;

        const departamento = document.createElement("p");
        departamento.textContent = "Departamento: " + funcionario.departamento;

        card.appendChild(nome);
        card.appendChild(email);
        card.appendChild(cargo);
        card.appendChild(departamento);

        lista.appendChild(card);

    });

    quantidade.textContent = funcionarios.length;

}


formulario.addEventListener("submit", cadastrarFuncionario);



listarFuncionarios();
