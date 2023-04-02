const marks=[24,34,67,89,67,68];
let highestmarks=0;
marks.forEach(mark=>{
 highestmarks=mark>highestmarks?mark:highestmarks;
})

console.log(`The highest marks scored by any student in the class is ${highestmarks}`);




