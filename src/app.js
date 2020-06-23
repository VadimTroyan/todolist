import 'bootstrap';
import './style.scss';

function addTask(text) {
    const ul = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = '<button class="btn btn-success">done</button>\n' +
        '<button class="btn btn-danger">delete</button>' + " " + text;
    ul.append(li);
    const delButton = li.getElementsByClassName('btn btn-danger')[0]
    addDeleteTaskEventHandler(delButton)
    const doButton = li.getElementsByClassName('btn btn-success')[0]
    addDoneTaskEventHandler(doButton)
    tasks.push(text)
    localStorage.setItem('text', JSON.stringify(tasks))
    
    
}

const inputText = document.getElementById('task');
inputText.addEventListener('keypress', (keyboardEvent) => {
    const keyEnter = 13;
    const taskText = document.getElementById('task').value;
    if (keyboardEvent.keyCode == keyEnter) {
        addTask(taskText)
    document.getElementById('task').value = ''  
    }
    })
    

function addDeleteTaskEventHandler(el) {
    el.addEventListener('click', (event) => {
        el.parentNode.parentNode.removeChild(el.parentNode)
        })
}

const deleteButton = document.getElementsByClassName('btn btn-danger')[0]
addDeleteTaskEventHandler(deleteButton)

function addDoneTaskEventHandler(element) {
    element.addEventListener('click', (event) => {
        element.parentNode.classList.toggle('active')
    })
}

const doneButton = document.getElementsByClassName('btn btn-success')[0]
addDoneTaskEventHandler(doneButton)

let tasks = []
const data = JSON.parse(localStorage.getItem('text'))
data.forEach (text => {
    addTask(text)
})

