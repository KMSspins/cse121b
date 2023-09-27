const arr1s = ['one', 'two', 'three'];

const arrHtml = arr1s.map(function (arr1) {return `<li>${arr1}</li>`;
});
document.getElementById("myList").innerHTML = arrHtml.join();


const grades = ['A', 'B', 'A']

function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    } else if(grade==='B') {
        points = 3;
    }
    return points;
    }

 const gpaPoints = grades.map(convertGradeToPoints);
 const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
 });
 const gpa = pointsTotal/gpaPoints.length;

 const pointsTotal = gpaPoints.reduce((total, item) => total + item);
 const gpa = pointsTotal / gpaPoints.length;

 const spa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;





 const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

 const fruitsSix = fruits.filter(function (word) {
    return word.length > 6;
    
 });

const fruitsSix = fruits.filter((fruit) => word.length > 6);


const numbers = [12, 34, 21, 54];

const luckNumber = 21;

let luckIndex = numbers.indexOf(luckNumber);


