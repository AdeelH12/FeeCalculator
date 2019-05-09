
const sellingElement = document.getElementById('selling-price');

const buyingElement = document.getElementById('buying-price');

const result = document.getElementsByClassName('display-result');

var displayResult; 

function calculate() {

    //Get the contents from the input field
    const sellingPriceUserInput = sellingElement.value;

    //Get the user input and perform a calculation
    const sellingFormula =  sellingPriceUserInput - (sellingPriceUserInput * .14);

    //Take the selling formula and minus it by the value the user entered into the buying-price input field
    //This will then be stored in the constant finalResult
    const finalResult = sellingFormula - buyingElement.value;


    //Creating a h1 element to display the result
    displayResult = document.createElement('h1');
    displayResult.setAttribute('id', 'display-result');
    displayResult.innerHTML = finalResult.toFixed(2);

    profit(displayResult.innerHTML);

    const div = document.createElement('div');
    div.appendChild(displayResult);
    document.body.appendChild(div);



}

function reset(){

    displayResult.innerHTML = "";

    sellingElement.value = "";
    buyingElement.value = "";
}


function profit(profit){

    if(profit > 0){


        //Change the color of the text to green when the profit is greater than 0
        displayResult.innerHTML = `<span style='color:#00FF00; font-weight: bold'>&pound${profit}</span>`;

        
    }else{

        //Change the color of the text to red when the profit is less than 0
        displayResult.innerHTML = `<span style='color:#F2003C; font-weight: bold'>&pound${profit}</span>`;
    }

}

