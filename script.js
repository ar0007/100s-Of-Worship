const count = document.getElementById(`counter1`);
const count2 = document.getElementById(`counter2`);
const count3 = document.getElementById(`counter3`);

function myFunction1() {
    for (let i = 1; i <= 33; i++) {
        setTimeout(() => {
            count.innerHTML = i;
        }, i * 1000);
    }
}
myFunction1();

// second one

function myFunction2() {
    for (let i = 1; i <= 33; i++) {
        setTimeout(() => {
            count2.innerHTML = i;
        }, i * 1000);
    }
}
setTimeout(function() {
    myFunction2();
}, 33000);

function myFunction3() {
    for (let i = 1; i <= 34; i++) {
        setTimeout(() => {
            count3.innerHTML = i;
        }, i * 1000);
    }
}
setTimeout(function() {
    myFunction3();
}, 66000);