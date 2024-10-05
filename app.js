const lista = document.getElementById("todoList");
const valor = document.getElementById("inpot");

function adicionarTarefa() {
    if (valor.value === "") {
        alert("Não foi adicionado nada devido estar vazio o campo digitado!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = valor.value; 
    lista.appendChild(li); 
    valor.value = ""; 
}

function removerUltimaTarefa() {
    const tarefas = lista.getElementsByTagName("li");
    if (tarefas.length > 0) {
        lista.removeChild(tarefas[tarefas.length - 1]);
    } else {
        alert("Não há tarefas para remover!");
    }
}


valor.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

