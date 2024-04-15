function hasDuplicates(arr) {
    'use strict';
    let seen = {};
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            return true;
        } else {
            seen[arr[i]] = true;
        }
    }
    return false;
}

// Пример использования
let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 1];

console.log(hasDuplicates(array1)); // false
console.log(hasDuplicates(array2)); // true
