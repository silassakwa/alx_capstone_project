// This is a function that will be called when a form is submitted
function validateForm(event) {
    // Get the value of the "task_name" input field
    var taskname = document.getElementById("task_name").value;
    // Get the value of the "start_date" input field
    var startdate = document.getElementById("start_date").value;
    // Get the value of the "end_date" input field
    var enddate = document.getElementById("end_date").value;
    // Get the element where error messages will be displayed
    var errors = document.getElementById("error");

    // Check if the "task_name" field is empty
    if (taskname === "") {
        // If it's empty, set an error message and prevent the form from submitting
        errors.textContent = "Task name cannot be blank";
        event.preventDefault(); // Prevent the default form submission
        return false; // Indicate that the form is not valid
    }

    // Check if the "start_date" field is empty
    if (startdate === "") {
        // If it's empty, set an error message and prevent the form from submitting
        errors.textContent = "Start date cannot be blank";
        event.preventDefault(); // Prevent the default form submission
        return false; // Indicate that the form is not valid
    }

    // Check if the "end_date" field is empty
    if (enddate === "") {
        // If it's empty, set an error message and prevent the form from submitting
        errors.textContent = "End date cannot be blank";
        event.preventDefault(); // Prevent the default form submission
        return false; // Indicate that the form is not valid
    } else {
        // If all fields are filled, clear any previous error message
        errors.textContent = "";

        // Create a new list item and populate it with task information
        var taskList = document.getElementById("task-list");
        var listItem = document.createElement("li");
        listItem.textContent = `Task: ${taskname}, Start Date: ${startdate}, End Date: ${enddate}`;

        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Reset form fields after adding the task
        document.getElementById("task_name").value = "";
        document.getElementById("start_date").value = "";
        document.getElementById("end_date").value = "";

        event.preventDefault(); // Prevent the default form submission
        return false; // Indicate that the form is not valid



    }
    
      } 
