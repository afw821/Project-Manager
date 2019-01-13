$(document).ready(function () {
    //Array of tasks to generate buttons
    const projectArray = [
        "Code",
        "Clean House",
        "Workout",
        "Take Shower",
        "Buy Groceries",
        "Respond to emails",
        "Walk the Dog",
        "Pay the Bills"
    ];

    //render function to render buttons on page when it loads
    const render = function () {
        //loop through array of tasks
        for (let i = 0; i < projectArray.length; i++) {
            //button tag set to a variable
            const projBtn = $('<button>');
            //add class of proj btn (to set up click event later on)
            projBtn.addClass('proj-button');
            //set attribute to buttons and a value to access them later
            projBtn.attr('data-proj', projectArray[i]);
            //set text of each button
            projBtn.text(projectArray[i]);
            //Append buttons when page loads
            $('#buttons').append(projBtn);
        }
    }
    //invoke function
    render();

    //appendTask function to append buttons to board whrn they are clicked
    const appendTask = function () {
        //create div inside of board for each button
        const task = $('<div>').addClass('proj task-color');
        //set text of each button to match button clicked by using data attr
        task.text($(this).attr('data-proj'));
        //append buttons to board
        $('#display').append(task);
    }
    //on click event to append buttons to board using proj-button class
    $('#buttons').on('click', '.proj-button', appendTask);

    //clear all buttons when clear button is clicked
    const clearTask = function () {
        $('#display').empty();
    }
    $('#clear').on('click', clearTask);


});