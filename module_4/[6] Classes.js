class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    displayInfo() {
        console.log(Название: ${this.title});
        console.log(Автор: ${this.author});
        console.log(Год публикации: ${this.publicationYear});
    }
}

class Ebook extends Book {
    constructor(title, author, publicationYear, price) {
        super(title, author, publicationYear);
        this.price = price;
    }

    displayInfo() {
        super.displayInfo();
        console.log(Цена: ${this.price} руб.);
    }
}

// Создание экземпляра класса Ebook
const myEbook = new Ebook('JavaScript: The Good Parts', 'Douglas Crockford', 2008, 25);

// Отображение информации о электронной книге
myEbook.displayInfo();