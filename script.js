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

// const firstPromise = new Promise((resolve, reject) => {
//     for (let i = 0; i <= 33; i++) {
//         setTimeout(() => {
//             count.innerHTML = i;
//         }, i * 1000);
//     }
//     resolve();
// });

// const secondPromise = new Promise((resolve, reject) => {
//     for (let i = 0; i < 33; i++) {
//         setTimeout(() => {
//             count2.innerHTML = i;
//         }, i * 1000);
//     }
//     resolve();
// });

// //run first promise

// firstPromise.then((response) => {
//     //run second promise after first promise succeed

//     secondPromise.then((response) => {});
// });

// =======================================

// `timer` accepts a count, and the element
// to apply the count to
function timer(count, el) {
    // Return a promise that basically says:
    // once I'm done doing this work, resolve,
    // and then the event queue can
    // get on with the next thing
    return new Promise((resolve) => {
        // So we create a loop that logs the numbers
        // in our element up to the count we specified.
        // and when that number is reached, resolve the promise
        function loop(n = 0) {
            // If our current `n` value is <= count
            if (n <= count) {
                // Set the content of the element
                el.textContent = n;

                // Call `loop` again after a second
                // with an incremented `n` value
                setTimeout(loop, 1000, ++n);

                // Otherwise resolve the promise
            } else {
                resolve();
            }
        }

        loop();
    });
}

// And now we just await each resolved promise
async function main() {
    await timer(33, count);
    await timer(33, count2);
    await timer(34, count3);
    showPopup();
}

main();