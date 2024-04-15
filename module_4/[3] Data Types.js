function printLastChar(str) {
    if (str.length > 0) {
        const lastChar = str.charAt(str.length - 1);
        console.log(lastChar);
    } else {
        console.log("Строка пуста");
    }
}

const inputString = "Пример строки";
printLastChar(inputString);
