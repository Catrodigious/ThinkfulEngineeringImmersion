const Stack = require("./lib/stack");

const binary = (max) => {
    const binStack = new Stack();
    const displayStack = new Stack();

    let binArr = [];

    while (max > 1){
        const modded = Math.floor(max % 2);
        binStack.push(modded);
        max /= 2;
    }

    while (binStack.top != null){
        value = binStack.pop();

        
    }
    
};


console.log(binary(15));

module.exports = binary;
