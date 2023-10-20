function validateForm(event) {
    var task = document.getElementById("task_name").value;
    var startdate = document.getElementById("start_date").value;
    var enddate = document.getElementById("end_date").value;
    var isComplete = document.getElementById("is_complete");
    var errors = document.getElementById("error");

    if (task === "") {
        errors.textContent = "Please fill the task name";
        event.preventDefault();
        return false;
    }
    if (startdate === "") {
        errors.textContent = "Please fill the start date";
        event.preventDefault();
        return false;
    }
    if (enddate === "") {
        errors.textContent = "Please fill the end date";
        event.preventDefault();
        return false;
    }
    errors.textContent = "";

    // Add the task to the task list
    addTaskToList(task, startdate, enddate, isComplete.checked);

    // Clear input fields
    document.getElementById("task_name").value = "";
    document.getElementById("start_date").value = "";
    document.getElementById("end_date").value = "";
    isComplete.checked = false;

    event.preventDefault();
    return true;
}

function addTaskToList(taskName, startDate, endDate, isComplete) {
    var taskList = document.getElementById("task-list");
    var taskItem = document.createElement("li");
    taskItem.className = "task-item" + (isComplete ? " completed" : "");
    taskItem.innerHTML = `
        <span>Task: ${taskName}</span><br>
        <span>Start Date: ${startDate}</span><br>
        <span>End Date: ${endDate}</span><br>
        <span>${isComplete ? "Is Complete" : "Not Complete"}</span>
        <button class="complete-button" onclick="markComplete(this)">Mark as Complete</button>
        <button class="complete-button" onclick="markNotComplete(this)">Not Complete</button>
    `;

    // Append the task item to the task list
    taskList.appendChild(taskItem);
}

function markComplete(button) {
    var taskItem = button.parentNode;
    taskItem.classList.add("completed");
    taskItem.querySelector("span:last-child").textContent = "Is Complete";
}

function markNotComplete(button) {
    var taskItem = button.parentNode;
    taskItem.classList.remove("completed");
    taskItem.querySelector("span:last-child").textContent = "Not Complete";
}