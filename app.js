
let tasks=[];
function addTask(event) {
    event.preventDefault();
    const name = document.getElementById("taskName").value
    const category = document.getElementById("taskCategory").value
    const deadline = document.getElementById("taskDeadline").value
    const status = document.getElementById("taskStatus").value

    if (name.trim()=== "") {
    alert ("Please enter a task name.");
    return;
}
const task = {
    name: name,
    category: category,
    deadline: deadline,
    status: status,
};
tasks.push(task);
console.log("Task added:", task);
console.log("All tasks:", tasks);
document.getElementById("taskName").value = "";
document.getElementById("taskDeadline").value = "";
displayTask();

}

function displayTask() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";
for (let i = 0; i < tasks.length; i++) {
    const item = document.createElement("li");
    item.textContent = `${tasks[i].name} | ${tasks[i].category} | ${tasks[i].deadline} | ${tasks[i].status}`;
    list.appendChild(item);
}
}
