const newTask = document.querySelector("input");
const btn = document.querySelector("button")
const taskList = document.querySelector(".taskList ol");
const arrTask = [];

btn.addEventListener('click', function addTask (){
    const value = newTask.value.trim();
    if (value === "" || typeof(value) === "number" ){
        console.log("Ведіть вірне значення! Помилка");
    } else {
        arrTask.push(value);
        console.log(arrTask);
        newTask.value = "";
        renderTasks();
    }
})
function renderTasks () {
    taskList.innerHTML = "";
    arrTask.forEach((item, index) => {
     const li = document.createElement("li");
     const newBtn = document.createElement("button");

     li.id = "task-" + index;
     newBtn.id = "btn-" + index;

     newBtn.textContent = "Видалити";
     newBtn.addEventListener ('click',() => deleteTask(index));

     li.append(item, newBtn);
     taskList.append(li);
    })
}
function deleteTask (index) {
    arrTask.splice(index, 1)
    renderTasks();
}