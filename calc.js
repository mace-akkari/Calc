//Selcting elements 

const input = document.querySelector(".input");
const result = document.querySelector(".result .value")
const operation = document.querySelector(".operation .value")

let calc_buttons = [
    {
        name: "delete",
        symbol: "⟲",
        formula: false,
        type: "key"
    },
    {
        name: "clear",
        symbol: "C",
        formula: false,
        type: "key"
    },
    {
        name: "percent",
        symbol: "%",
        formula: "/100",
        type: "number"
    },
    {
        name: "divide",
        symbol: "÷",
        formula: "/",
        type: "operator"
    },
    {
        name: "7",
        symbol: 7,
        formula: 7,
        type: "number"
    },
    {
        name: "8",
        symbol: 8,
        formula: 8,
        type: "number"
    },
    {
        name: "9",
        symbol: 9,
        formula: 9,
        type: "number"
    },
    {
        name: "multiply",
        symbol: "×",
        formula: "*",
        type: "operator"
    },
    {
        name: "4",
        symbol: 4,
        formula: 4,
        type: "number"
    },
    {
        name: "5",
        symbol: 5,
        formula: 5,
        type: "number"
    },
    {
        name: "6",
        symbol: 6,
        formula: 6,
        type: "number"
    },
    {
        name: "add",
        symbol: "+",
        formula: "+",
        type: "operator"
    },
    {
        name: "1",
        symbol: 1,
        formula: 1,
        type: "number"
    },
    {
        name: "2",
        symbol: 2,
        formula: 2,
        type: "number"
    },
    {
        name: "3",
        symbol: 3,
        formula: 3,
        type: "number"
    },
    {
        name: "subtract",
        symbol: "-",
        formula: "-",
        type: "operator"
    },
    {
        name: "zero",
        symbol: 0,
        formula: 0,
        type: "number"
    },
    {
        name: "empty",
        symbol: "",
        type: "null"
    },
    {
        name: "point",
        symbol: ".",
        formula: ".",
        type: "number"
    },
    {
        name: "calculate",
        symbol: "=",
        formula: "=",
        type: "calculate"
    }
];

// Creating buttons 

function createButtons() {
    const buttons_per_row = 4;
    let buttons_added = 0;

    calc_buttons.forEach(button => {
        if (buttons_added % buttons_per_row == 0) {
            input.innerHTML += `<div class="row"></div>`;
        }

        const row = document.querySelector(".row:last-child");
        row.innerHTML += `<button id="${button.name}">${button.symbol}</button>`;

        buttons_added++;
    });
}

createButtons();

// Click event

input.addEventListener("click", event => {
    const targeted_button = event.target;

    calc_buttons.forEach(button => {
        if (button.name == targeted_button.id) calculator(button);
    })
})

