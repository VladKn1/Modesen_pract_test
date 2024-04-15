function testVariables() {
    var varVariable = 'This is a var variable';
    let letVariable = 'This is a let variable';
    const constVariable = 'This is a const variable';

    console.log(varVariable); // Видно внутри функции
    console.log(letVariable); // Видно внутри функции
    console.log(constVariable); // Видно внутри функции
}

testVariables();

// Попытка обратиться к переменным за пределами функции
console.log(varVariable); // Ошибка: varVariable is not defined
console.log(letVariable); // Ошибка: letVariable is not defined
console.log(constVariable); // Ошибка: constVariable is not defined
