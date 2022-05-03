var first_floor = document.getElementsByClassName('floor');
var second_floor = document.getElementsByClassName('sfloor');
var third_floor = document.getElementsByClassName('tfloor');

var secoundCount = 0;
var firstCount = 5;

var maxNum = 11;
for(var j = 0; j < maxNum; j++) first_floor[0].innerHTML += "<div class='squares'style='background-color:red'></div>";
for(var j = 0; j < maxNum - 2; j++) first_floor[1].innerHTML += "<div class='squares' style='background-color:yellow'></div>";
for(var j = 0; j < maxNum - 4; j++) first_floor[2].innerHTML += "<div class='squares' style='background-color:green'></div>";
for(var j = 0; j < maxNum - 6; j++) first_floor[3].innerHTML += "<div class='squares' style='background-color:blue'></div>";
for(var j = 0; j < maxNum - 8; j++) first_floor[4].innerHTML += "<div class='squares' style='background-color:rebeccapurple'></div>";
for(var j = 0; j < maxNum - 10; j++) first_floor[5].innerHTML += "<div class='squares' style='background-color:black'></div>";

function firstClick() {
    if(second_floor[0] != null) {
        first_floor[secoundCount].innerHTML = second_floor[firstCount].innerHTML;
        second_floor[firstCount].remove();
    } else if (third_floor[0] != null) {
        first_floor[secoundCount].innerHTML = third_floor[firstCount].innerHTML;
        third_floor[firstCount].remove(); 
    }
    
    if(secoundCount <= 5) secoundCount++;
    if(firstCount >= 0)firstCount--;
}

function secondClick() {
    if(first_floor[0] != null) {
        second_floor[secoundCount].innerHTML = first_floor[firstCount].innerHTML;
        first_floor[firstCount].remove();
    } else if (third_floor[0] != null) {
        second_floor[secoundCount].innerHTML = third_floor[firstCount].innerHTML;
        third_floor[firstCount].remove(); 
    }

    if(secoundCount <= 5) secoundCount++;
    if(firstCount >= 0)firstCount--;
}

function thirdClick() {
    if(first_floor[0] != null) {
        third_floor[secoundCount].innerHTML = first_floor[firstCount].innerHTML;
        first_floor[firstCount].remove();
    } else if (second_floor[0] != null) {
        third_floor[secoundCount].innerHTML = second_floor[firstCount].innerHTML;
        second_floor[firstCount].remove();
    }

    if(secoundCount <= 5) secoundCount++;
    if(firstCount >= 0)firstCount--;
}

function Reset() {
    
}

