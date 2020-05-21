function addTask(text) {
    const ul = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = text + '<button>done</button>\n' +
        '<button>delete</button>';
    ul.append(li);
}

const inputText = document.getElementById('task');
inputText.addEventListener('keypress', (keyboardEvent) => {
    const keyEnter = 13;
    const taskText = document.getElementById('task').value;
    console.log(inputText);
    if (keyboardEvent.keyCode == keyEnter) {
        addTask(taskText)
    }
    console.log(keyboardEvent)
})

function onPageLoaded() {
    const doneButton = document.getElementById('done');
    const deleteButton = document.getElementById('delete');
    doneButton.addEventListener('click', () => {
        localStorage.setItem("todos", ul.innerHTML)
    })
    deleteButton.addEventListener('click', () => {
        localStorage.removeItem("todos", ul.innerHTML)
    })
   
}

