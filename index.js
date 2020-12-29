// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// is at least one person 19 or older
// 최소 1명이라도 19세보다 나이가 많은 사람이 있나?
people.some(element =>{
    //console.log(2020 - element.year >= 19);
});

// is everyone 19 or older?
// 모두 19세보다 많은가?
people.every(element =>{
    console.log(2020 - element.year >= 19);
});

// find the comment with the ID of 823423

// Find the comment with this ID
// delete the comment with the ID of 823423