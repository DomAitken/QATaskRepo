"use strict";

const counter = document.querySelector("input#");

const output = document.querySelector("section#history");

const addhistory = (current, change, newValue) => {
    const newhistory = document.createElement("p");
    if (change === 0) {
        newHistiory.innerText = 0;
    } else {
        newHistiory.innerText = '${current} ${change} = ${newValue}';
    }
    output.appendChild(newHistory);
}

const counter = document.querySelector("input#");

const operation = (change) => {
    if (change === "R") {
        counter.value = 0;
        addhistory(null, 0, null);
        return;
    } else {
        const current = counter.value;
        const newValue = Number.parseInt(current) + change;
        counter.value = newvalue;
        addhistory(current, change, newValue)
    }
};

document.querySelectorAll("button.counterButton");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        const button = event.target;
        console.log(button);
        const change = button.innerText;
        console.log(change);
        operation(counter);

    })

});