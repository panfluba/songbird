
// var h3 = document.getElementsByTagName('p')[0];
// var stop_b = document.getElementById('stop_button');
// var restart = document.getElementById('restart_button');
// var sec = 0;
// var min = 0;
// var i = 0;
// var t;



// function tick() {
//     sec++;
//     if (sec >= 60) {
//         sec = 0;
//         min++;
//         if (min >= 60) {
//             min = '##';
//             sec = '##'
//         }
//     }
// }

// function add() {
//     tick();
//     h3.textContent = (min > 9 ? min : "0" + min) + " : " + (sec > 9 ? sec : "0" + sec);
//     // span_minute.textContent = (min > 9 ? min : "0" + min);
//     // span_second.textContent =  (sec > 9 ? sec : "0" + sec);
//     timer();
// }
// function timer() {
//     t = setTimeout(add, 1000);
// }

// timer();
// window.DOMContentLoaded = timer;
// stop_b.onclick = function () {
//     stop_b.style.backgroundColor = 'grey'
//     clearTimeout(t);
//     i++;
//     if (i == 2) {
//         i = 0;
//         stop_b.style.backgroundColor = '';
//         timer();
//     }

//     // this.addEventListener('click', function{
//     //     stop_b.style.backgroundColor = ''
//     //     timer();
//     // })
// }
// restart.addEventListener('click', function () {
//     stop_b.style.backgroundColor = ''
//     h3.textContent = "00 : 00";
//     seconds = 0; minutes = 0;
//     sec = 0;
//     min = 0;
//     i = 0;
//     clearTimeout(t);
//     timer();
// })

