const todoList = [
    "Tidur",
    "Makan"
]

document.forms['inputTodo'].onsubmit = (event) => {
    event.preventDefault()
    
    const todo = document.forms['inputTodo']['todo'].value
    todoList.push(todo)

    document.forms['inputTodo'].reset()
    tampilTodo()
}

const deleteTodo = (index) => {
    todoList.splice(index, 1)
    tampilTodo()
}

const searchTodo = (item, n) => {
    const tr = document.createElement('tr')

    const deleteBtn = document.createElement('td')
    const btn = document.createElement('input')
    btn.type = 'button'
    btn.value = 'Delete'
    deleteBtn.appendChild(btn)
    btn.onclick = () => {
        deleteTodo(n)
    }

    const td = document.createElement('td')
    td.innerText = item

    document.getElementById('hasil').appendChild(tr)
    tr.appendChild(deleteBtn)
    tr.appendChild(td)
}

const clearTodo = () => {
    while (document.getElementById('hasil').firstChild) {
        document.getElementById('hasil').removeChild(document.getElementById('hasil').firstChild)
    }
}

const tampilTodo = () => {

    clearTodo()

    todoList.forEach((item, n) => {
        const searchItem = document.getElementById('search').value.toLowerCase()

        if (item.toLowerCase().includes(searchItem)) {
            searchTodo(item, n)            
        }

    });

}

document.getElementById('search').onkeyup = (event) => {
    // console.log(document.getElementById('search').value)
    tampilTodo()
}

tampilTodo()