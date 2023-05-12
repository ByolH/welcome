const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; // let으로 설정함으로써 예전에 기록된(삭제되지 않은, 누적된) Todos들을 새로고침해도 localStorage에 남아있도록.

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  //   console.log(event.target.parentElement);
  // deleteing todos from 'application'
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; // .text 붙이는 과정 이해안됨. text라는 오브젝트? 메소드가 있는건가?
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  //   toDos.push(newTodo);
  // Deleteing todos - 무엇을 지우는지 알기위해 id 먼저 설정하기
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

// 1)
// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // getting todos array
  toDos = parsedToDos; // restoring - updating Todos to accumulate old Todos and log new Todos.
  // 1)
  //   parsedToDos.forEach(sayHello);

  // 2)
  //   parsedToDos.forEach((item) => console.log("this is the turn of", item));

  // 3)
  parsedToDos.forEach(paintToDo);
}
