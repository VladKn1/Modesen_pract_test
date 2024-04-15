async function fetchUserData(userId) {
    try {
        const response = await fetch(https://api.example.com/users/${userId});
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных пользователя');
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error(error);
        return null; // Возвращаем null в случае ошибки
    }
}

// Пример использования функции fetchUserData
const userId = 123;
fetchUserData(userId)
    .then(userData => {
        if (userData) {
            console.log(userData);
        } else {
            console.log('Не удалось загрузить данные пользователя');
        }
    });