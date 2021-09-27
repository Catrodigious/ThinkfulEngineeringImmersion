function power(base, exponent, total=0) {
    // set total as the base number
    if (total === 0) total = base;

    if (exponent === 1)
        return total;
    else if (exponent === 0)
        return 1
    else if (exponent < 0)
        throw "exponent should be >= 0";

    total *= base;
    return power(base, exponent-1, total);
}

function fillMap(binaryCountObj, remaining, index=0){
    const keys = Array.from(binaryCountObj.keys());
    if (index >= keys.length) return binaryCountObj;

    const remainder = remaining - keys[index];
    if (remainder > 0){
        binaryCountObj.set(keys[index], 1);
        fillMap(binaryCountObj, remainder, index + 1);
    }else if (remainder < 0){
        fillMap(binaryCountObj, remaining, index + 1);
    }else if (remainder === 0){
        binaryCountObj.set(keys[index], 1);
    }
    return binaryCountObj;
}

// x represents the decimal num to be turned into binary
// n represents the power of 2^n
function toBinary(x, n=0){
    // while 2^n < x -- increment n
    const intermediateNum = power(2, n);
    let binaryStr = "";

    if (intermediateNum < x)
        return toBinary(x, n+1);
    else if (intermediateNum > x){
        const binaryCountObj = new Map();
        
        for (let i=n-1; i >= 0; i--){
            const val = power(2, i);
            binaryCountObj.set(val, 0);
        }

        const binaryMap = fillMap(binaryCountObj, x);
        const mapValues = Array.from(binaryMap.values());
        binaryStr = mapValues.join("");
        return binaryStr;
    };
}

let binaryNum = toBinary(172);
console.log("binaryNum: ", binaryNum);
