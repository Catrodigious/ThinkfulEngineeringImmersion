/**
 * Returns the string with the characters in reverse order
 * @param {string} text the string to be reversed
 */
function reverse(text, solution="", index=-1) {
    if (index === -1) index = text.length - 1;

    
    if (index > 0){
        solution += text.slice(index-1, index);
        reverse(text, solution, index-1);
    }else if (index === 0){
        solution += text.slice(0, 1);
        return solution;
    }

    
}

const revStr = reverse("bloop");
console.log("revStr: ", revStr);
//module.exports = reverse;
