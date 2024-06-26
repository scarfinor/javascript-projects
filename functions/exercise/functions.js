function makeLine(size){
    let line = "";
    for (let i = 0; i < size; i++) {
        line += "#";
     }
     return line;
}
console.log(makeLine(5));
console.log("=====================");
function makeSquare(size, size) {
    let square = "";
    for (let i = 0; i < size; i++) {
        square += (makeLine(size) + "\n");
    }
    return square.slice(0,-1) + makeRectangle(5);
}
console.log(makeSquare(5,5));
console.log("=====================");
function makeRectangle(width, height) {
    let rectangle = "";
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + "\n");
    }
    return rectangle.slice(0, -1);
}
console.log(makeRectangle(5,3));
console.log("=====================");
function makeDownwardStairs(height) {
    let stairs = "";
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i+1) + "\n");
    }
    return stairs.slice(0, -1);
}
console.log(makeDownwardStairs(5));
console.log("=====================");
function makeSpaceLine(numSpaces, numChars) {
    let spaces = "";
    let Chars = "";
    for (let i = 0; i < numSpaces; i++) {
        spaces += " ";
     }
     for(let i = 0; i < numChars; i++) {
        Chars += "#";
     }
     return spaces + Chars + spaces; 
}
console.log(makeSpaceLine(3, 5));
console.log("=====================");
function maketIsoscelesTriangle(height) {
    let triangle = "";
    for (let i =0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + "\n");
    }
    return triangle.slice(0, -1);
}
console.log(maketIsoscelesTriangle(5));
console.log("=====================");
function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}
console.log( `${maketIsoscelesTriangle(5)}\n${reverse(maketIsoscelesTriangle(5))}`);
console.log("======================");