

// Global Variables
var hours = 9;
var schedule = $("container");


var calendarTimeText = ["9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM"];
var calendarTime = ["09","10","11","12","13","14","15","16","17"];


//Add Current time to top of page
$('#currentDay').append(moment().format('LLLL'))

// Create time blocks sections
for (var i = 0; i < hours; i++){
    var rowId = `${i}`;
    var row = $('#container').append(`<div class="row time-block" id="${rowId}"></div>`); 
    var time = $(`#${rowId}`).append(`<div class='hour'>${calendarTimeText[i]}<div>`);
    var text = $(`#${rowId}`).append(`<input type='text' class='description id=${i}}'></input>`);
    var save = $(`#${rowId}`).append(`<button class='saveBtn' id='saveBtn${i}'><i class='fa fa-save'></i></button>`);
};

// Check time and colour blocks based on time
function checktime(){
    // Update time at top of web page
    var currentTime = moment().format('LLLL');
    $('#currentDay').innerHTML = currentTime;

    // Check time and change color
    var time = moment().format('HH');
    var timeBlock = 9;
    for (var i=0; i<hours; i++){
        var rowId = `${i}`;
        if (timeBlock < time){
            $(`#${rowId}`).addClass("past");
        }
        if (timeBlock == time){
            $(`#${rowId}`).addClass("present");
        }
        if (timeBlock > time){
            $(`#${rowId}`).addClass("future");
        }
        timeBlock++
    }
}


// Function to run checktime on load of page then once every hour
function hourly() {
    // set interval variables and call checktime on load
    var minsInterval = (60 - moment().format('m')) * 1000 * 60;
    var hour = 1000 * 60 * 60;
    checktime();

    // If time isnt exactly at an hour, set interval to mins to next hour
    if (moment().format('m') != 0) {
        setInterval(hourly, minsInterval);
    }
    // Set interval to be one hour
    else{
        setInterval(hourly, hour);
    }
}


function saveThis() {
    for (var i=0; i<hours; i++) {
        console.log('saved');
    }
};

// Event listeners and handler for save button
var btns = document.getElementsByClassName('saveBtn${i}');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", saveThis)
};

hourly()