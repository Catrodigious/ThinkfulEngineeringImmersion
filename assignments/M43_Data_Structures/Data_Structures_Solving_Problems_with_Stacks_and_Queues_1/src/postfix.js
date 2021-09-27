const Node = require("./lib/node");
const Queue = require("./lib/queue");
const Stack = require("./lib/stack");


// initialize an empty stack
// remove all spaces from the expression
// for each character in the expression
// if the character is an operand push it unto the stack
// if the character is an operator
// pop two operands a and b from the stack
// evaluate a op b where op is whichever operation is being considered
// push the results back unto the stack
// return the value on the stack


const evaluate = (expression) => {
    console.log("expression: ", expression);
    const stack = new Stack();
    const exArr = expression.split(" ");

    for (let n=0; n < exArr.length; n++){
        if (!isNaN(exArr[n])){
            stack.push(exArr[n]);
        }else{
            const a = Number(stack.pop());
            const b = Number(stack.pop());

            let evaluated = 0;

            switch(exArr[n]){
                case '/':
                    evaluated = b / a;
                    break;
                case "*":
                    evaluated = a * b;
                    break;
                case "+":
                    evaluated = a + b;
                    break;
                case "-":
                    evaluated = b - a;
                    break;
                default:
                    console.log("...wtf?");
                    break;
            }

            stack.push(evaluated);
        }
    }
    return stack.pop();
};

module.exports = evaluate;
