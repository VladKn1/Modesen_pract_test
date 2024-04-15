function checkArrayNotEmpty(arr) {
    if (arr.length === 0) {
        throw new Error('Массив пуст! Пожалуйста, передайте непустой массив.');
    }
}

// Пример использования функции
const emptyArray = [];
try {
    checkArrayNotEmpty(emptyArray);
    console.log('Массив не пуст.');
} catch (error) {
    console.error(error.message);
}