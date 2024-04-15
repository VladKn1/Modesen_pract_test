function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}

// Пример использования функции для генерации идентификатора длиной 10 символов
const idLength = 10;
const randomId = generateRandomString(idLength);
console.log(Сгенерированный идентификатор длиной ${idLength} символов: ${randomId});