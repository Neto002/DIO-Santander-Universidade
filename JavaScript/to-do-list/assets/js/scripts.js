var inputTarefa = document.getElementById('inputTarefa')

function criaTarefa() {
    var tarefa = inputTarefa.value
    if (tarefa == '') {
        alert('Digite uma tarefa')
    } else if (tarefa.length > 0) {
        var lista = document.getElementById('lista')
        var item = document.createElement('li')
        item.innerHTML = tarefa
        lista.appendChild(item)
        inputTarefa.value = ''
    }
}