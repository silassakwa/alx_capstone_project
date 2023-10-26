function validateForm(event) {
    var taskname = document.getElementById("task_name").value;
    var startdate = document.getElementById("start_date").value;
    var enddate = document.getElementById("end_date").value;
    var errors = document.getElementById("error");

    if (taskname === "") {
        errors.textContent = "Task name cannot be blank";
        event.preventDefault();
        return false;
    }

    if (startdate === "") {
        errors.textContent = "Start date cannot be blank";
        event.preventDefault();
        return false;
    }

    if (enddate === "") {
        errors.textContent = "End date cannot be blank";
        event.preventDefault();
        return false;
    } else {
        errors.textContent = "";

        var taskList = document.getElementById("task-list");
        var listItem = document.createElement("li");

        // Create a checkbox for task completion status
        var completionCheckbox = document.createElement("input");
        completionCheckbox.type = "checkbox";
        completionCheckbox.addEventListener("change", function () {
            // Check the completion status and apply styling
            if (completionCheckbox.checked) {
                listItem.classList.add("completed");
            } else {
                listItem.classList.remove("completed");
            }
        });

        // Add the checkbox to the list item
        listItem.appendChild(completionCheckbox);

        listItem.appendChild(document.createTextNode(`Task: ${taskname}, Start Date: ${startdate}, End Date: ${enddate}`));

        taskList.appendChild(listItem);

        document.getElementById("task_name").value = "";
        document.getElementById("start_date").value = "";
        document.getElementById("end_date").value = "";

        event.preventDefault();
        return false;
    }
}