//Страница 69
var randomBodyParts = ["нога", "рука", "глаз"];
var RandomAdjectives = ["итальянский", "убитый", "региональный"];
var randomWords = ["набор", "возраст", "собака", "техника", "рис"];
var randomAnimalBodyParts = ["хвост", "лапа", "когти"];
var randomAnimals = ["Обезьяна","Осёл","Попугай"];


var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var RandomAdjective = RandomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 5)];
var randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * 3)];
var randomAnimal = randomAnimals[Math.floor(Math.random() * 3)];


var randomInsult = "У тебя " + randomBodyPart + " словно " + RandomAdjective + " " + randomWord + "!!!";//Оператор +
var randomInsultAnimal = "У тебя " + randomBodyPart + " ещё более " + RandomAdjective + " чем " + randomAnimalBodyPart + " у " + randomAnimal;//Оператор +

var randomInsultUpdated = ["У тебя", randomBodyPart, "словно", RandomAdjective, randomWord + "!!!"].join(" ");//Метод Join
var randomInsultAnimalUpdated = ["У тебя", randomBodyPart, "ещё более", RandomAdjective, "чем", randomAnimalBodyPart, "у", randomAnimal].join(" ")//Метод Join

var join = [3, 2, 1].join(" больше, чем ")

//alert(join);
//alert(randomInsult);
//alert(randomInsultAnimal);
//alert(randomInsultUpdated);
//alert(randomInsultAnimalUpdated);

//Страница 82
var Dima = {score: 5};
var Sasha = {score: 9};
var Danya = {score: 3};
var Zhora = {score: 8};
var scores = {Dima, Sasha, Danya, Zhora};
//console.log(scores);
Dima.score += 7;
Sasha.score += 3;
Danya.score += 9;
Zhora.score += 4;

var myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, {purpose: "путаница", number: 123}, 3.3],
    "random animal": "Банановая акула"
};
//console.log(myCrazyObject["some array"][2].number)

//Страница 108
var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"]
for (var i = 0; i < 4; i++){
    animals[i] += " - прекрасное животное!"
    console.log(animals[i])
}

var alphabet = "абвгдеёжзийклмнопрстуфчцчшщъыьэюя";
var randomString = "";
while (randomString.length <= 6) {
    var index = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[index];
}
console.log(randomString);

var input = "javascript is awesome";
var output = "";
for (i = 0; i != input.length; i++){
    if (input[i] == ""){
        output += input[i];
    }

}
console.log(output);

