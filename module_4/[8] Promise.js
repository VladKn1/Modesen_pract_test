function convertToPromise(func) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            func(...args, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    };
}

// Пример функции на колбэках
function asyncFunctionWithCallback(input, callback) {
    setTimeout(() => {
        if (input) {
            callback(null, Результат: ${input});
        } else {
            callback('Ошибка: пустой ввод', null);
        }
    }, 1000);
}

// Пример использования конвертированной функции на промисах
const asyncFunctionWithPromise = convertToPromise(asyncFunctionWithCallback);

asyncFunctionWithPromise('Пример ввода')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });