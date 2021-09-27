/**
 * Return base raised to the power exponent.
 * @throws Error if exponent is negative
 * @param {integer} base an integer
 * @param {integer} exponent a non-negative integer
 */

// given two integers a and b where b is not negative
// then 'a' raised to the power 'b' is a multiplied by itself b times
// we call 'a' the base and the 'b' the exponent

// takes two parameters, an intger as a base and a non-negative integer as an exponent

// base 2
function power(base, exponent, total = 0) {
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

power(2,3);

module.exports = power;
