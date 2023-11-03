function validateForm(event) {
  // Get the value of the "task_name" input field
    var taskname = document.getElementById("task_name").value;
    // Get the value of the "start_date" input field
    var startdate = document.getElementById("start_date").value;
    // Get the value of the "end_date" input field
    var enddate = document.getElementById("end_date").value;
    // Get the elements where error messages will be displayed
    var errors = document.getElementById("error");
    var taskNameField = document.getElementById("task_name");
    var startDateField = document.getElementById("start_date");
    var endDateField = document.getElementById("end_date");

    // Function to add a red border to the input field
    function addErrorBorder(inputField) {
        inputField.style.border = "2px solid red";
    }

    // Function to remove the red border from the input field
    function removeErrorBorder(inputField) {
        inputField.style.border = "";
    }

    // Function to clear error messages and remove error borders
    function clearErrors() {
        errors.textContent = "";
        removeErrorBorder(taskNameField);
        removeErrorBorder(startDateField);
        removeErrorBorder(endDateField);
    }

    // Check if the "task_name" field is empty
    if (taskname === "") {
        // If it's empty, set an error message, prevent the form from submitting, and add a red border
        errors.textContent = "Task name cannot be blank";
        addErrorBorder(taskNameField);
        event.preventDefault(); // Prevent the default form submission
        return false; // Indicate that the form is not valid
    }

    // Check if the "start_date" field is empty
    if (startdate === "") {
        // If it's empty, set an error message, prevent the form from submitting, and add a red border
        errors.textContent = "Start date cannot be blank";
        addErrorBorder(startDateField);
        event.preventDefault(); // Prevent the default form submission
        return false; // Indicate that the form is not valid
    }

    // Check if the "end_date" field is empty
    if (enddate === "") {
        // If it's empty, set an error message, prevent the form from submitting, and add a red border
        errors.textContent = "End date cannot be blank";
        addErrorBorder(endDateField);
        event.preventDefault(); // Prevent the default form submission
        return false; // Indicate that the form is not valid
    } else {
        // If all fields are filled, clear any previous error message and remove error borders
        clearErrors();
    }

        var taskList = document.getElementById("task-list");
        var listItem = document.createElement("li");

 
        
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
