function addTask(text) {
   var ul = document.getElementById('task-list');
   var li = document.createElement('li');
   li.innerHTML = text + '<button>done</button>\n' +
       '<button>delete</button>';
   ul.append(li);
}
var inputText = document.getElementById('task');
console.log(inputText);
inputText.addEventListener('keypress', (keyboardEvent) => {
   const keyEnter = 13;
   if (onkeypress == keyEnter) {
      addTask()
   }
})
// function f() {
//    document.querySelector('input', addTask(text)).addEventListener('keydown', function (e) {
//       if (e.key === 13) {
//          addTask("");
//       }
//
//    })

// }
