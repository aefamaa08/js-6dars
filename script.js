// Создаем массив с 4 элементами
let myArray = ['element1', 'element2', 'element3', 'element4'];

// Выводим длину массива в консоль и через alert
console.log(myArray.length);
alert(`Длина массива: ${myArray.length}`);

// Запрашиваем у пользователя, хочет ли он удалить один элемент
let confirmDelete = confirm("Хотите удалить один элемент массива?");

if (confirmDelete) {
    // Удаляем один элемент массива (последний элемент)
    myArray.pop();
    console.log("Элемент удален. Новый массив:", myArray);
    alert("Один элемент удален из массива.");
} else {
    console.log("Массив не изменен:", myArray);
    alert("Массив остался без изменений.");
}
