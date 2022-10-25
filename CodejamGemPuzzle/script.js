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


function shuffleTiles() {
    for(var i = 0; i < 1000; i++) {
        
        handleClick({ srcElement: {index: Math.floor(Math.random() * boardTiles)}})
        counter = 0;
        element_counter.textContent = counter;
    }   
}


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
}

function handleClick(e) {
    var boardTiles = size * size;
    var i = e.srcElement.index;


    if(i - size >= 0 && tiles[i - size].value == 0) {
        swap(i, i - size);

    } else if(i + size < size * size && tiles[i + size].value == 0) {
        swap(i, i + size);
    } else if(i % size != 0 && tiles[i - 1].value == 0) {
        swap(i, i - 1);
    } else if(i % size != size - 1 && tiles[i + 1].value == 0) {
        swap(i, i + 1);
    }
}

function mute(){
    var mute_button = document.getElementById('mute');
}





