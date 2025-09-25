const newTask = document.querySelector("input");
const btn = document.querySelector("button")
const taskList = document.querySelector(".taskList ul");
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
    arrTask.forEach(item => {
     const li = document.createElement("li");
     li.textContent = item;
     taskList.appendChild(li);
    })
}