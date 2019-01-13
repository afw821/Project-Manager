$(document).ready(function(){

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
const render = function (){
    for(let i = 0; i < projectArray.length; i ++){
        const projBtn = $('<button>');
        projBtn.addClass('proj-button proj');
        projBtn.attr('data-proj', projectArray[i]);
        projBtn.text(projectArray[i]);
        $('#buttons').append(projBtn);
    }
}
render();

const appendTask = function (){
    const task = $('<div>').addClass('proj task-color');
    task.text($(this).attr('data-proj'));
    $('#display').append(task);
}
$('#buttons').on('click', '.proj-button', appendTask);

const clearTask = function (){
    $('#display').empty();
}
$('#clear').on('click', clearTask);


});