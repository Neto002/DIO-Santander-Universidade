function criaTarefa() {
    var li = document.createElement("li")
    var inputTarefa = document.getElementById("inputTarefa").value
    var tarefa = document.createTextNode(inputTarefa)
    li.appendChild(tarefa)

    if (inputTarefa === '') {
        alert("Por favor, preencha o campo.")
    } else {
        document.getElementById("listaTarefas").appendChild(li)
    }
    document.getElementById("inputTarefa").value = ""
}

var listaTarefas = document.getElementById("listaTarefas")
listaTarefas.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked')
    }
}, false)