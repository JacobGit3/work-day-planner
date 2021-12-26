// Global variables
const hours = 9;
const calendarTimeText = ["9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM"];
const TEXT_SAVE_DATA_KEY = "textData";

// Create time blocks sections
for (let i = 0; i < hours; i++){
    let rowId = `${i}`;
    let row = $('#container').append(`<div class="row time-block" id="${rowId}"></div>`); 
    let time = $(`#${rowId}`).append(`<div class='hour'>${calendarTimeText[i]}<div>`);
    let text = $(`#${rowId}`).append(`<input type='text' class='description' id='textInput${i}'></input>`);
    let save = $(`#${rowId}`).append(`<button class='saveBtn' id='saveBtn${i}'><i class='fa fa-save'></i></button>`);
};

// Check time and colour blocks based on time
function checktime(){
    // Update time at top of web page
    let currentTime = moment().format('LLLL');
    $('#currentDay').innerHTML = currentTime;

    // Check time and change color
    let time = moment().format('HH');
    let timeBlock = 9;
    for (let i=0; i<hours; i++){
        let rowId = `${i}`;
        if (timeBlock < time){
            $(`#${rowId}`).addClass("past");
        }
        if (timeBlock == time){
            $(`#${rowId}`).addClass("present");
        }
        if (timeBlock > time){
            $(`#${rowId}`).addClass("future");
        }
        timeBlock++;
    }
}

// Function to run checktime on load of page then once every hour
function hourly() {
    // set interval letiables and call checktime on load
    const minsInterval = (60 - moment().format('m')) * 1000 * 60;
    const hour = 1000 * 60 * 60;
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

// Save text data of the respective input when save button pressed
function saveTextDataBasedOnIndex(index) {
    let saveTextElement = document.getElementById(`textInput${index}`).value;
    // getElementById find which text box we need, get data, save data
    localStorage.setItem(TEXT_SAVE_DATA_KEY + index, saveTextElement);
};

// Function to load text from local storgae on page reload
function loadTextOnPageReload() {
    for (let i=0; i<hours; i++) {
        let textBox = document.getElementById(`textInput${i}`);
        let textContent = localStorage.getItem(TEXT_SAVE_DATA_KEY + i);
        textBox.value = textContent;
    }
}

// Event listeners and handler for save button
for (let i = 0; i < hours; i++) {
    const saveButton = document.getElementById(`saveBtn${i}`);
    saveButton.addEventListener("click", function(){ saveTextDataBasedOnIndex(i); });
};

//Run these functions on load
hourly();
loadTextOnPageReload();
//Add Current time to top of page
$('#currentDay').append(moment().format('LLLL'));