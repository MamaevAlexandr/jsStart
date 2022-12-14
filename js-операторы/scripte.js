//Термины: <<унарный>>, <<бинарный>>, <<операнд>>

/*
Операнд - это то к чему применяется оператор,
их еще называют аргументами.
*/

//Примеры:
/*let userAge = 30 - 6; //Число 30 и 6 - это операнды*/
//либо
/*let userHeight = h - y; //Переменные h и y - это операнды*/

/*
Бинарными называют операторы
которые применяются к двум операндам.
В нашем примере вычитание -, это бинарный оператор.
*/
/*let userAge = 30 - 6;*/
/*
Унарным считается оператор, который
применен только к одному операнду, например:
*/
/*let userCash = -800;*/

/*=================================================================*/

/*let x;
//Сложение +
x = 5 + 8;
console.log(`Результат сложения: ${x}`);

//Вычитание -
x = 9 - 5;
console.log(`Результат вычитания: ${x}`);

//Умножение *
x = 2 * 3;
console.log(`Результат умножения: ${x}`);

//Деление /
x = 10 / 2;
console.log(`Результат деления: ${x}`);

//Взятие остатка от деления %
x = 11 % 3;
console.log(`Результат взятия остатка от деления: ${x}`);
//Проверка: 11=3*3(неполное частное от деления) +2(остаток)

//Возведение в степень **.
x = 5 ** 3;
console.log(`Результат возведения в степень: ${x}`);*/
//Число 5 умноженное на себя 3 раза. 5*5*5 = 125


/*=====================================================================*/

//Специальные возможности операторов

//Применение оператора сложения к строкам
/*let resultOne = "Фрилансер" + " " + "по" + " " + "жизни";
console.log(resultOne);

//Если в выражении есть строка, то есть если хотя бы
//один операнд будет строкой, то конечный результат
//тоже будет строкой
let resultTwo = "Фрилансер " + 58;
console.log(resultTwo);
console.log(typeof resultTwo);

//Порядок значения не имеет
let resultThree = 58 + " Фрилансер";
console.log(resultThree);

//казусы
let resultFour = 2 + "2";
console.log(resultFour);

//Операции до сложения со строкой
//выполняются как обычно
let resultFive = 58 - 20 + " Фрилансер";
console.log(resultFive);*/

/*=============================================================*/

//Работа других операторов
/*let resultOne = "25" - 5;
console.log(resultOne);
console.log(typeof resultOne);

//или 

let resultTwo = 10 * "80";
console.log(resultTwo);
console.log(typeof resultOne);

//Недопустимая операция
let resultThree = 3 * "Фрилансер";
console.log(resultThree);//Вернет NaN
console.log(typeof resultOne);*/


/*===========================================================*/

//Унарный оператор сложения +


//Со строками
/*let resultOne = +"25";
console.log(resultOne);
console.log(typeof resultOne);

//С числами
let resultTwo = +10;
console.log(resultTwo);
console.log(typeof resultTwo);

//Пример
let users = "25";
let admins = "10";
console.log(users + admins);

console.log(+users + +admins);

//Более длинная запись
console.log(Number(users) + Number(admins));*/

/*=============================================================*/

//Приоритет операторов

//Разный приоритет
/*let resultOne = 2 - 1 * 5;
console.log(resultOne);

//Скобки
let resultTwo = (2 - 1) * 5;
console.log(resultTwo);

//Одинаковый приоритет
let resultThree = 2 -1 +5;
console.log(resultThree);*/


/*==========================================================*/

//Оператор присваивания

/*let a = 1 + 2;
let b = 2;

let result = 8 - (a = b + 3);
console.log("Результат в скобках: " + a);
console.log("Общий результат: " + result);//Не рекомендуется такая запись из-за низкой читабельности кода
*/


//Присваивание по цепочке
/*
let resultOne = resultTwo = resultThree = 1 + 2;
console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
*/

//Более понятная запись
/*let resultOne = 1 + 2;

resultTwo = resultOne;
resultThree = resultOne;

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);*/

//Сокращённая запись вычеслений с присвоением

/*
let users = 5;
users = users + 3;
users = users * 2;
*/

//Можно записать так:

/*let users = 5;
console.log(users);
users += 3;
console.log(users);
users *= 2;
console.log(users);*/

/*let users = 5;
console.log(users);
users += 1 + 2;
console.log(users);*/

/*=======================================================================*/

//Инкремент/декремент

//Инкремент ++
/*let addUser = 2;
addUser++;
console.log(addUser);*/

/*
//Работает так же как и
addUser = addUser + 1;
//или
addUser += 1;
*/

//Декремент --
/*let removeUser = 2;
removeUser--;
console.log(removeUser);*/

/*
Инкремент / декремент можно применить только к переменной.
Попытка использовать его на значении, типа 5++, приведёт к ошибке.
*/
/*console.log(5++);*/

/*
Операторы++ и-- могут быть расположены
не только после, но и до переменной.
*/

//Постфиксная форма
/*
usersCounter++;
usersCounter--;
*/
//Пример:
/*let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);*/

//Префиксная форма
/*
++usersCounter;
--usersCounter;
*/
//Пример:
/*let usersCounter = 0;
let newUsers = ++usersCounter;
console.log(newUsers);*/

/*
Итого, если результат оператора не используется, а нужно только 
увеличить / уменьшить переменную, тогда без разницы,
какую форму использовать:
*/
/*let usersCounter = 0;
usersCounter++;
console.log(usersCounter);*/

/*
Если хочется тут же использовать
результат, то нужна префиксная форма:
*/
/*let usersCounter = 0;
console.log(++usersCounter);*/

/*
Если нужно увеличить и при этом
получать значение переменной
до увеличения - нужна постфиксная форма:
*/
/*let usersCounter = 0;
console.log(usersCounter++);
console.log(usersCounter);*/

/*
инкремент / декремент можно
использовать в любых выражениях
При этом их приоритет будет выше,
чем у большинства других арифмитических операций:
*/
/*
let usersCounter = 0;
let newUsers = 2 * ++ usersCounter;
console.log(newUsers);
*/

//отдельная запись более читабельная:
/*let usersCounter = 0;
++usersCounter;
let newUsers = 2 * usersCounter;
console.log(newUsers);*/

/*==================================================================*/

//Оператор запятая

/*
Представляет нам возможность вычислять несколько выражений,
разделяя их запятой ,. Каждое выражение выполняется,
но возвращается результат только последнего.
*/

/*let usersCounter = (8 + 2, 19 + 1);
console.log(usersCounter);*/

/*======================================================================*/

//Побитовые операторы

/*
AND(и) ( & )
OR(или) ( | )
XOR(побитовое исключающее или) ( ^ )
NOT(не) ( ~ )
LEFT SHIFT(левый сдвиг) ( << )
RIGHT SHIFT(правый сдвиг) ( >> )
ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )
*/

/*====================================================================*/

//Операторы сравнения
/*
Больше: a > b
Меньше: a < b
Больше или ровно: a >= b
Меньше или ровно: a <= b
Равно: a == b
Не равно: a != b
Строгое равно: a === b
Строгое не равно: a !== b
*/

/*
Операторы сравненя возвращают логический
тип данных со значением true или false:
*/

/*console.log(2 > 1);
console.log(4 < 2);
console.log(58 == 36);
console.log(8 != 9);*/

//Присваиваем результат переменной

/*let result = 11 > 10;
console.log(result);*/

//Сравнение строк

//Алфавитный порядок
/*console.log('Б' > 'А');*/

//Алфавитный порядок
/*console.log('Скрипт' > 'Скрипка');*/

//Кол-во символов
/*console.log('Слайдер' > 'Слайд');*/

//Регистр
/*console.log('Фрилансер' > 'фрилансер');*/

/*
Алгоритм сравнения строк довольно прост:
1. Сначала сравниваются первые символы строк.
2. Если первый символ первой строки больше(меньше),
   чем первый символ второй, то первая строка
   больше(меньше) второй.Сраывнение завершено.
3. Если первые символы равны, то таким же образом
   сравниваются уже вторые символы строк.
4. Сравнение продолжается, пока не закончится одна из строк
5. Если обе строки заканчиваются одновременно,
   то они равны.Иначе, большей считается более длинная строка
*/

//Сравнение разных типов

//Преобразование в число
/*console.log('58' > 10);
console.log('007' == 7);*/

//Логические значение true
//становится 1, а false - 0.
/*console.log(true == 1);
console.log(false == 0);*/

//Интересные ситуации
/*let itemA = 0;
let itemB = "0";

console.log(Boolean(itemA));
console.log(Boolean(itemB));

console.log(itemA == itemB);*/

//Строгое сравнение

/*
оператор строгого равенства или не равенства
проверяет равенство без приведения типов.
*/

/*console.log(0 === false);
console.log('007' === 7);
console.log('58' !== 58);*/

//Сравнение с null и undefined

//Строгое равенство
/*console.log(null === undefined);*/

//Не строгое равенство
/*console.log(null == undefined);*/

//Сравнение null и 0
/*console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);*/

//Сравнение undefined и 0
/*console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);*/

/*
Что бы избежать проблем при сравнении нужно очень
осторожно к любому сравнению с undefined / null,
кроме случаев строгого равенства ===.
Не использовать сравнения >= > < <= с переменными,
которые могут принимать значения null / undefined,
разве что ты точно знаешь что делаешь.В любом случае,
если переменная может принимать эти значения,
то стоит добавить для них отдельные проверки.
*/

/*=========================================================*/

//Логические операторы

//Оператор || (или)

/*
Оператор ИЛИ, записывается как две вертикальные черты
Процесс его работы следующий:
1. Вычисляет операнды слева направо.
2. Каждый операнд конвертирует в логическое значение.
   Если результат true, останавливается и возвращает
   исходное значение этого операнда.
3. Если все операнды являются ложными(false), возвращает
   значение последнего из них.
*/

//Булевые значения
/*console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);*/

//Разные типы

//Первый true это 1
/*console.log(1 || 0);
//Первый true это true
console.log(true || 'фрилансер');
//Первый true это 58
console.log(null || 58);
//Первый true это фрилансер
console.log(null || 'фрилансер' || 0);
//true нет совсем, вернет последнее значение - 0
console.log(undefined || '' || null || 0);*/

//Присвоение значения в переменную

/*let userName = '';
let userNickName = 'Фрилансер';//- если сделать пустсую строку то будет "Без имени"

let user = userName || userNickName || "Без имени";
console.log(user);*/

//Сокращённое вычисление. Условие.
/*let admins = 10;//- если увеличить до 10 то получим 5
let users = 5;
admins > users || users++;
console.log(users);*/

//Оператор && (И)
/*
Следующий логический оператор это И. Пишется как два
амперсанда && выполняет следующие действия:
1. Вычисляет операнды слева направо.
2. Каждый операнд преобразует в логическое значение,
   Если результат false, останавливается и возвращает исходное
   значение этого операнда.
3. Если все операнды были истинными, возвращает значение
   последнего.
*/

//Булевые значения
/*console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);*/

//Разные типы

//Пример 1. 0 - false
/*console.log('Фрилансер' && 0 && 2 && 3);
//Пример 2. null - false
console.log(1 && 2 && null && 3);
//Пример 3. Все true
console.log('15' && '42');*/

//Приоритет && больше чем ||
/*console.log(1 && 0 || 2 && 1);*/

//Подобие условия
/*let users = 1;//- если изменить на 0 то будет false и нечего не ыведется в консоль
(users > 0) && console.log(`Пользователей ${users}`);*/

//Оператор ! (НЕ)
/*
Выполняет следующие действия:
1.Сначала приводит аргумент к логическому типу true / false.
2. Затем возвращает противоположное значение.
*/

//Булевые значения
/*console.log(!true);*/

//Разные типы
/*console.log(!null);
console.log(!1);
console.log(!'');
console.log(!'фрилансер');*/

/*
Приоритет НЕ ! является наивысшим из всех логических операторов,
поэтому он всегда выполняется первым, перед && или ||
*/
/*console.log(!true && 58 || 18 && !1);*/

//Используется для преобразования типа в boolean
/*console.log(!!'фрилансер');
//или
console.log(Boolean('фрилансер'));*/

/*
Оператор ?? возвращает первый аргумент,
если он не null / undefined, иначе второй.
*/

/*let name ;//- если добавить переменную = 'Фрилансер' то в консоль выведет фрилансер
console.log(name ?? "Без имени");*/

