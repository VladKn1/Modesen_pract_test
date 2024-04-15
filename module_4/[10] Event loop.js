function printNumbersRecursively(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(num);
            resolve(num);
        }, 1000);
    }).then((resolvedNum) => {
        if (resolvedNum < 10) {
            return printNumbersRecursively(resolvedNum + 1);
        }
    });
}

printNumbersRecursively(1);