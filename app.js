console.log("javascript is connected and running!")
let tasks = [];
function addTask(event) {
    event.preventDefault();
    const name = document.getElementById("taskName").value.trim();
    const category = document.getElementById("taskCategory").value;
    const deadline = document.getElementById("taskDeadline").value;
    const status = document.getElementById("taskStatus").value;

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
displayTasks();

}


// function displayTask() {
//     const list = document.getElementById("taskList");
//     list.innerHTML = "";
// for (let i = 0; i < tasks.length; i++) {
//     const item = document.createElement("li");
//     item.textContent = `${tasks[i].name} | ${tasks[i].category} | ${tasks[i].deadline} | ${tasks[i].status}`;
//     list.appendChild(item);
// }
// }

function displayTasks() {
    const tableBody = document.getElementById("taskTableBody");
    tableBody.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.textContent = tasks[i].name;
        const categoryCell = document.createElement("td");
        categoryCell.textContent = tasks[i].category;
        const deadlineCell = document.createElement("td")
        deadlineCell.textContent = tasks[i].deadline;
        const statusCell = document.createElement("td");
        statusCell.textContent = tasks[i].status;

        row.appendChild(nameCell);
        row.appendChild(categoryCell);
        row.appendChild(deadlineCell);
        row.appendChild(statusCell);
        tableBody.appendChild(row);
    };
}