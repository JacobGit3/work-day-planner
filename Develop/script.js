// Global Variables
var hours = 9;
var schedule = $("container");


var calendarTimeText = ["9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM"];
var calendarTime = ["09","10","11","12","13","14","15","16","17"];


// Create time blocks sections
for (var i = 0; i < hours; i++){
    console.log("for loop ran");
    var rowId = `row${i}`;
    var row = $('#container').append(`<div class="row time-block" id="${rowId}"></div>`); 
    var time = $(`#${rowId}`).append(`<div class='hour'>${calendarTimeText[i]}<div>`);
    var text = $(`#${rowId}`).append(`<div class='description id=${calendarTime[i]}'> Test <div>`);
    var save = $(`#${rowId}`).append("<div class='saveBtn'><i class='fa fa-save'></i></div>");
};

// Check time and colour blocks based on time
function checktime(){
    console.log("checktime")
    var time = moment().format('HH');
    for (var i=0; i<hours; i++){
        var rowId = `row${i}`;
        if (parseInt.rowId < time){
            $('#rowID').addClass("past");
            console.log("if ran")
        }
    }
}




// Event listeners 