//Selcting elements 

const inputElm = document.querySelector(".input");
const resultElm = document.querySelector(".result .value")
const operationElm = document.querySelector(".operation .value")

let calc_buttons = [
    {
        name: "delete",
        symbol: "DEL",
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
    calc_buttons.forEach(button => {
        inputElm.innerHTML += `<button id="${button.name}">${button.symbol}</button>`;
    });
}

createButtons();

// Click event

inputElm.addEventListener("click", event => {
    const targeted_button = event.target;

    calc_buttons.forEach(button => {
        if (button.name === targeted_button.id) calculator(button);
    })
})

// Calcualtor data

let data = {
    operation: [],
    result: []
}

//Calculator 

function calculator(button) {
    let result;
    switch (true) {
        case button.type === "number" || button.type === "operator":
            data.operation.push(button.symbol);
            data.result.push(button.formula);
            break;
        case button.name === "clear":
            data.operation = [];
            data.result = [];
            updateResult(0);
            break;
        case button.name === "delete":
            data.result.pop();
            data.operation.pop();
            break;
        case button.type === "calculate":
            let join_result = data.result.join('');
            data.operation = [];
            data.result = [];

            try {
                result = eval(join_result);
                updateOperation(0)
                data.operation = [];
            } catch (error) {
                if (error instanceof SyntaxError) {
                    result = "Error!"
                    data.operation = [];
                    data.result = [];
                    updateResult(result);
                    return;

                }
            }
            updateResult(result)


            data.operation.push(result);
            data.result.push(result)

            return;
    }
    updateOperation(data.operation.join(''));
}


function updateOperation(operation) {
    operationElm.innerHTML = operation;
}

function updateResult(result) {
    resultElm.innerHTML = result;
}