//scrpting...

let Todos = [];

const AddButton = document.getElementById("AddButton");

function checkisExist(str) {
  return Todos.find((element) => element.todo === str);
} //checking duplicate for Element in list.....

AddButton.addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue.length > 0) {
    if (!checkisExist(taskValue)) {
      Todos.push({ todo: taskValue, id: Date.now(), status: false });
    }
  }
  //Rendering Todos....
  renderTodos();
  taskInput.value = "";
});

function deleteTodo(id) {
  const checkbox = document.getElementById(`check-${id}`);

  if (checkbox.checked) {
    const filteredTodos = Todos.filter((eachTodos) => eachTodos.id !== id);
    Todos.length = 0;
    Todos = filteredTodos;
    renderTodos();
  } else {
    alert("is checkbox tick ?");
  }
} //Deleting Todos....

function editTodo(id) {
  const input = document.getElementById(`input-${id}`);
  const button = document.getElementById(`button-${id}`);

  if (input.readOnly) {
    input.readOnly = false;
    button.innerHTML = "Save";
  } else {
    input.readOnly = true;
    button.innerHTML = "Edit";

    Todos = Todos.map((eachTodo) => {
      return eachTodo.id === id ? { ...eachTodo, todo: input.value } : eachTodo;
    });
  }
} 
//Edit Todos Functionlity.....

const taskdone = (id) => {
  const checkbox = document.getElementById(`check-${id}`);
  const input = document.getElementById(`input-${id}`);

  if (checkbox.checked) {
    input.classList.add("line-through", "text-gray-400");
  } else {
    input.classList.remove("line-through", "text-gray-400");
  }
}; 
//Taksdone Functionlity....

//Rendering Todos.....
function renderTodos() {
  const showTask = document.getElementById("showTask");
  showTask.innerHTML = "";

  Todos.forEach((eachTodos) => {
    showTask.innerHTML += `
      <div class="flex items-center px-3 py-3 shadow-lg bg-[#f2f2f2] rounded justify-between">  
        
        <div class="flex items-center gap-3"> 
          <input
  type="checkbox"
  id="check-${eachTodos.id}"
  onchange="taskdone(${eachTodos.id})"
  class="scale-120 cursor-pointer"
/>

<input 
  id="input-${eachTodos.id}"  
  class="text-lg border-none outline-none bg-transparent"
  value="${eachTodos.todo}"
  readonly
/>
        </div>  

        <div class="flex gap-3">
          <button 
            id="button-${eachTodos.id}" 
            onclick="editTodo(${eachTodos.id})" 
            class="bg-[#5c4cf3] cursor-pointer px-3 rounded py-1 text-white">
            Edit
          </button>  

          <button 
            onclick="deleteTodo(${eachTodos.id})" 
            class="bg-[#FF2C2C] cursor-pointer px-3 py-1 rounded text-white">
            Delete
          </button>  
        </div> 
      
      </div>`;
  });
}
