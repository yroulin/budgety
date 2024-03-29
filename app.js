// BUDGET CONTROLLER
var budgetController = (function() {
    
    //Some code

})();




//UI CONTROLLER
var UIController = (function() {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    // Some code
    
    //Exporting function make them public
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or expense
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            }
        },
        getDOMStrings: function() {
            return DOMStrings;
        }
    }

})();



//GLOBAL APP CONTROLLER
//controller connect with the other 2 modules with the parameters (budgetCtrl, UICtrl)
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMStrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
    //which is for older browser who don't support keyCode
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
    }

    var ctrlAddItem = function() {
        // 1. Get the field input data

        var input = UICtrl.getInput();

        console.log(input);

        // 2. Add the item to the budget controller
        
        // 3. Add a new item to the user interface

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    };

    return {
        init: function() {
            console.log('App has started.');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();