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
    showTask(tasks);

    document.getElementById("taskName").value = "";
    document.getElementById("taskDeadline").value = "";
    

}

function showTask(taskList) {
    const tableBody = document.getElementById("taskTableBody");
    tableBody.innerHTML = "";

    const today = new Date().toISOString().split("T")[0];

    taskList.forEach((task, index) => {
        if (task.status !== "Completed" && task.deadline < today) {
            task.status = "Overdue";
        }

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = task.name;

        const categoryCell = document.createElement("td");
        categoryCell.textContent = task.category;

        const deadlineCell = document.createElement("td");
        deadlineCell.textContent = task.deadline;

        const statusCell = document.createElement("td");
        const statusSelect = document.createElement("select");

        const statuses = ["In progress", "Completed", "Overdue"];
        statuses.forEach((status) => {
            const option = document.createElement("option");
            option.value = status; 
            option.textContent = status;
            if (task.status === status) {
                option.selected = true;
            }
            statusSelect.appendChild(option);
        });

        statusSelect.addEventListener("change", function () {
            taskList[index].status = this.value;
            showTask(taskList);
        });

        statusCell.appendChild(statusSelect);

        row.appendChild(nameCell);
        row.appendChild(categoryCell);
        row.appendChild(deadlineCell);
        row.appendChild(statusCell);

        tableBody.appendChild(row);
    });
}

function filterTasks() {
    const categoryValue = document.getElementById("categoryFilter").value;
    const statusValue = document.getElementById("statusFilter").value;
    const today = new Date().toISOString().split("T")[0];

    const filtered = tasks.filter(task => {
        if (task.status !== "Completed" && task.deadline < today) {
            task.status = "Overdue";
        }
        const categoryMatch = categoryValue === "" || task.category === categoryValue;
        const statusMatch = statusValue === "" || task.status === statusValue;
        return categoryMatch && statusMatch;
    });

    showTask(filtered);
}
showTask(tasks);
