//  task_4
// Дан массив с объектами, где каждый объект описывает книгу: артикул, автор, название, описание.
// Сформировать функцию, которой передаётся массив книг,
// и которая создаст и внесёт все необходимые html элементы, стили, и содержание для отображения всей информации о книгах в виду таблицы.

let books = [
    {
        art: 1,
        author: 'Замятин Евгений Иванович',
        name: 'Мы',
        desc: 'Знаковый роман, с которого официально отсчитывают само существование жанра "антиутопия" Запрещенный в советский период, теперь он считается одним из классических произведений не только русской, но и мировой литературы ХХ века. Роман об "обществе равных", в котором человеческая личность сведена к "нумеру". В нем унифицировано все — одежда и квартиры, мысли и чувства. Нет ни семьи, ни прочных привязанностей... Но можно ли вытравить из человека жажду свободы, пока он остается человеком?'
    },
    {
        art: 2,
        author: 'Хаксли Олдос Леонард',
        name: 'О дивный новый мир',
        desc: '«О дивный новый мир» – изысканная и остроумная антиутопия о генетически программируемом «обществе потребления», в котором разворачивается трагическая история Дикаря – «Гамлета» этого мира.'
    }
];


function getTable(e) {
    books.forEach(element => {
        let booksTable = document.getElementById("books");
        booksTable.style = `background: #555252; color: #000000;`;
        booksTable.insertAdjacentHTML("beforeend", `
        <tr><td align=center>${element.art}</td><td align=center>${element.author}</td><td align=center>${element.name}</td><td>${element.desc}</td></tr>
        `);
    });
}

getTable(books);