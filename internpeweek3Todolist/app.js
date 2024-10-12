
const addTaskButton = document.getElementById("add-task-btn");
const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");


addTaskButton.addEventListener("click", function () {
    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        newTaskInput.value = ""; 
    }
});
function addTask(taskText) {
    const listItem = document.createElement("li");

    const taskContentDiv = document.createElement("div");
    taskContentDiv.classList.add("task-content");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        listItem.classList.toggle("completed");
    });

    const taskTextNode = document.createElement("span");
    taskTextNode.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(listItem);
    });

    
    const dateElement = document.createElement("div");
    dateElement.classList.add("task-date");
    dateElement.textContent = `Added on: ${new Date().toLocaleString()}`;

    taskContentDiv.appendChild(checkbox);
    taskContentDiv.appendChild(taskTextNode);
    taskContentDiv.appendChild(deleteButton);

    listItem.appendChild(taskContentDiv);
    listItem.appendChild(dateElement);

    taskList.appendChild(listItem);
}
