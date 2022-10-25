// ---------------init cell--------------------
"use strict";
var element_counter = document.getElementById('counter');
var counter = 0;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var size = urlParams.get('size') || 4;
if(size < 3) { size = 3; }
if(size > 6) { size = 6 }
var boardTiles = size * size;
var tiles = [];

// ---------------init mute--------------------
var mute_counter = 0;
var mute_button = document.getElementById('mute');
var mute_img = document.getElementById('img_mute');

// ---------------init timer--------------------
var h3 = document.getElementsByTagName('p')[0];
var stop_b = document.getElementById('stop_button');
var restart = document.getElementById('restart_button');
var sec = 0;
var min = 0;
var n = 0;
var t;

// ---------------cell--------------------
function shuffleTiles() {
    for(var i = 0; i < 1000; i++) {
        
        handleClick({ srcElement: {index: Math.floor(Math.random() * boardTiles)}})
        counter = 0;
        element_counter.textContent = counter;
    }   
}

var audio = new Audio();
audio.preload = 'auto';
audio.src = '/audio/click.mp3';


function createCell() {
    var table = document.getElementById("table");

    for(var i = 0; i < size; i++) {
        var tr = document.createElement("tr");

        for(var j = 0; j < size; j++) {
            var td = document.createElement("td");
            var index = i * size + j;
            td.className = "tile";
            td.index = index;
            td.value = index;
            td.textContent = index == 0 ? "" : index;
            td.onclick = handleClick;
            tr.appendChild(td);
            tiles.push(td);
        }
        table.appendChild(tr);

    }
    shuffleTiles();
}

function swap(i, j) {
    // var counter = 0;
    var temp = tiles[i].value;
    tiles[i].textContent = tiles[j].textContent;
    tiles[i].value = tiles[j].value;
    tiles[j].textContent = temp;
    tiles[j].value = temp;
    counter++;
    element_counter.textContent = counter;

    // if(counter = 0){
    // }
}

function handleClick(e) {
    var boardTiles = size * size;
    var i = e.srcElement.index;
    

    if(i - size >= 0 && tiles[i - size].value == 0) {
        if(n == 0){
            swap(i, i - size);
            // mute_counter++;
        }
        if(mute_counter == 0 && n != 1){
            audio.play();
        }

    } else if(i + size < size * size && tiles[i + size].value == 0) {
        if(mute_counter == 0  && n != 1){
            audio.play();
        }
        if(n == 0){
            swap(i, i + size);
        }
    } else if(i % size != 0 && tiles[i - 1].value == 0) {
        if(mute_counter == 0  && n != 1){
            audio.play();
        }
        if(n == 0){
            swap(i, i - 1);
        }
    } else if(i % size != size - 1 && tiles[i + 1].value == 0) {
        if(mute_counter == 0 && n != 1){
            audio.play();
        }
        if(n == 0){
            swap(i, i + 1);
        }
    }
}

// ---------------------mute----------------------------

function mute(){
    mute_img.classList.add('muted');
    mute_button.style.backgroundColor = 'grey';
    mute_counter++;
    if(mute_counter >= 2){
        // audio.play();
        mute_img.classList.remove('muted');
        mute_button.style.backgroundColor = '';
        mute_counter = 0;
    }
}

// ------------------------timer------------------------------------


function tick() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = '##';
            sec = '##'
        }
    }
}

function add() {
    tick();
    h3.textContent = (min > 9 ? min : "0" + min) + " : " + (sec > 9 ? sec : "0" + sec);
    // span_minute.textContent = (min > 9 ? min : "0" + min);
    // span_second.textContent =  (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

timer();
window.DOMContentLoaded = timer;
stop_b.onclick = function () {
    stop_b.style.backgroundColor = 'grey';
    clearTimeout(t);
    n++;
    if (n == 2) {
        n = 0;
        stop_b.style.backgroundColor = '';
        timer();
    }

    // this.addEventListener('click', function{
    //     stop_b.style.backgroundColor = ''
    //     timer();
    // })
}
restart.addEventListener('click', function () {
    stop_b.style.backgroundColor = ''
    h3.textContent = "00 : 00";
    seconds = 0; minutes = 0;
    sec = 0;
    min = 0;
    i = 0;
    clearTimeout(t);
    timer();
})





