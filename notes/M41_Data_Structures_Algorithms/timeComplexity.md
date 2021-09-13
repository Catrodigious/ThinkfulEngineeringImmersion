## Time Complexity
How the number of operations required scales with the size of htei nput data

## Space Complexity
How the memory requirements scale with the side of the input data

Commonly represented using Big O Notation

Worst case
Base case
Average Case

# O(1) Constant Time
An algorithm with an O(1) or constant order of growth has a fixed number of operations
Running time doesn't depend on the size of input
Examples: arithmetic operations, array indexing, object property access

O (log n) - Loagarithmic Time

    function logPowerOfTwoValues(array){
        for ( let i=0; i < array.length; i*=2 ){
            console.log(array[i]);
        }
    }

    logPowerOfTwoValues([2, 3, 5, 7, 10, 14, 19])

# log(n) Logarithmic Time
Some fraction of the remaining input is processed in each iteration of a log algorithm
If you had an array of 32 elements, an algorithm may process the first 16 (half the remaining elements), then 8, 4, 2, then 1.

# Linear Time
An algorithm whose complexity is proportional to its input size and has a linear order of growth or O(n)
    function includes(items, itemToMatch){
        for (let i=0; i < items.length; i++){
            if (items[i] === itemToMatch) {
                return true;
            }
        }
        return false;
    }

    includes([1, 2, 3, 5, 7], 5);


# O(n^2) - Polynomial Time
Nested for loops.

    function timesTable(arr){
        const result = [];
        for (let i=0; i < arr.length; i++){
            result.push([]);
            for (let j=0; j < arr.length; j++){
                result[i].push(arr[i] * arr[j]);
            })
        }
        return result;
    }
    console.log(timesTables([2, 4, 6, 8]))

