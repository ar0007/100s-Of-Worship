const count = document.getElementById(`counter1`);
const count2 = document.getElementById(`counter2`);
const count3 = document.getElementById(`counter3`);
const popupButton = document.getElementsByClassName(`popup-colse-button`);

// pop up function
function showPopup() {
    popup.style.transform = "scale(1)";
}
// pop up close
function closePopup() {
    popup.style.transform = "scale(0)";
}

// function myFunction1() {
//     for (let i = 1; i <= 33; i++) {
//         setTimeout(() => {
//             count.innerHTML = i;
//             if (i === 34) {
//                 myFunction2();
//             }
//         }, i * 1000);
//     }
// }
// myFunction1();

// // second one

// function myFunction2() {
//     for (let i = 1; i <= 33; i++) {
//         setTimeout(() => {
//             count2.innerHTML = i;
//             if (i === 34) {
//                 myFunction3();
//             }
//         }, i * 1000);
//     }
// }
// // setTimeout(function() {
// //     myFunction2();
// // }, 33000);

// function myFunction3() {
//     for (let i = 1; i <= 34; i++) {
//         setTimeout(() => {
//             count3.innerHTML = i;
//             if (i === 35) {
//                 showPopup();
//             }
//         }, i * 1000);
//     }
// }
// setTimeout(function() {
//     myFunction3();
// }, 66000);

const firstPromise = new Promise((resolve, reject) => {
    for (let i = 0; i <= 33; i++) {
        setTimeout(() => {
            count.innerHTML = i;
        }, i * 1000);
    }
    resolve();
});

const secondPromise = new Promise((resolve, reject) => {
    for (let i = 0; i < 33; i++) {
        setTimeout(() => {
            count2.innerHTML = i;
        }, i * 1000);
    }
    resolve();
});

//run first promise

firstPromise.then((response) => {
    //run second promise after first promise succeed

    secondPromise.then((response) => {});
});