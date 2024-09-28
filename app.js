const lista = document.getElementById('todoList');
const valor = document.getElementById('inpot');

function adicionarTarefa(){
    if(valor.value == ''){
        return alert('Nada');
    }
    const li =  document.createElement('li');
    const texto = `<li>${valor.value}</li>`;
    
    
    li.appendChild(valor.value);
    lista.appendChild(texto);
}