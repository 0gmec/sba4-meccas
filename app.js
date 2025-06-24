console.log("javascript is connected and running!")
let tasks = [];
function addTask(event) {
    event.preventDefault();
    const name = document.getElementById("taskName").value.trim();
    const category = document.getElementById("taskCategory").value;
    const deadline = document.getElementById("taskDeadline").value;
    const status = document.getElementById("taskStatus").value;

    if (name.trim() === "") {
        alert("Please enter a task name.");
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
    showTasks();

}


function showTasks(taskList = tasks) {
    const tableBody = document.getElementById("taskTableBody");
    tableBody.innerHTML = "";
    
    const today = new Date().toISOString().split("T")[0];
    
    taskList.forEach(task, index); {
    
 if (tasks[i].status !== "Completed" && tasks[i].deadline < today) {
        tasks[i].status = "Overdue";
}}
}


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

    const statusSelect = document.createElement("select");
    const statuses = ["In progress", "Completed", "Overdue"];




    for (let j = 0; j < statuses.length; j++) {
        const option = document.createElement("option");
        option.vaule = statuses[j];
        option.textContent = statuses[j];

        if (statuses[j] === tasks[i].status) {
            option.selected = true;
        }

        statusSelect.appendChild(option);
    }


    statusSelect.addEventListener("change", function () {
        tasks[i].status = this.vaule;
        displayTasks();
    });

    statusCell.appendChild(statusSelect)



        row.appendChild(nameCell);
        row.appendChild(categoryCell);
        row.appendChild(deadlineCell);
        row.appendChild(statusCell);
        tableBody.appendChild(row);
    };


function filterTasks() {
    const categoryValue = documnet.getElementById("categoryFilter").value
    const statusValue = document.getElementById("statusFilter").value
    const today = new Date().toISOString().split("T")[0];
    const filtered = tasks.filter(task => {
        if (task.status !== "Completed" && task.deadline < today) {
            task.status = "Overdue";
        }
        const categoryMatch = categoryValue === "" || task.category === categoryValue;
        const statusMatch = statusValue === "" || task.status === statusValue;
        return categoryMatch && statusMatch;
    });
    showTasks(filtered);
}