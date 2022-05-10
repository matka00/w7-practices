console.log(varVariable);

let globalVariable1 = 12;

let globalVariable2 = function (){
    console.log("inside the function", globalVariable1);

    let functionVariable1 = "hello";

    let functionVariable2 = function (){
        console.log("functionVariable2 belseje");

        console.log(globalVariable1);
        console.log(functionVariable1);

        let funInFunctionVariable1 = true;
        console.log(funInFunctionVariable1);

        let funInFunctionVariable2 = function (){
            console.log(funInFunctionVariable1);
        };

        funInFunctionVariable2();
    };

    functionVariable2();
    console.log(functionVariable1);

    if (functionVariable1 === "hello") {
        var blockvariable1 = "bye"
    } else {
        //console.log(blockvariable1); <-- itt nem működik, másik scope-ban van (másik {} zárójelben)
        
    }

    console.log(blockvariable1);
}

globalVariable2()
//így hívtuk meg a globalVariable2 függvényt


//console.log(functionVariable1); <-- függvényen kívül vagyunk, így nem látjuk már


var varVariable = 1;

let letVariable1;
console.log(letVariable1);

let letVariable2 = "variable 2";
console.log(letVariable2);

const constVariable1 = "ciao";
//constVariable1 = "hello"
console.log(constVariable1);


const obj1 = {};
//obj1.key = "value"; <--ez működik, mert csak új értékeket ad hozzá az objektumhoz
//obj1 = {key: "value"} <-- ez nem működik, mert az egész objektumot akarná lecserélni
console.log(obj1);



const globalVariable3 = function (parameter1, parameter2, parameter3){
    console.log(parameter1);
    console.log(parameter2);
    console.log(parameter3);
    console.log(parameter3());
}

const globalVariable4 = "apple";

const globalVariable5 = function (){
    return "pear";
}

const globalVariable6 = function (){
    return "peach";
}

globalVariable3(globalVariable5(), globalVariable4, globalVariable6);



const loadEvent = function (parameter1){
    const rootElement = document.getElementById("root");
    console.log(globalVariable1)
    console.log(parameter1)

    rootElement.addEventListener("click", function (event){
        console.log(event.currentTarget);
        event.currentTarget.insertAdjacentHTML("beforeend", `<span>Clicked </span>`);
        event.currentTarget.classList.toggle("clicked")
    })
    
    //rootElement.insertAdjacentHTML()
}

window.addEventListener("load", loadEvent)