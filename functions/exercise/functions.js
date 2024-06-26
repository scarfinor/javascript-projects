function makeLine(size){
    let line = "";
    for (let i = 0; i < size; i ++) {
        line += "#";
     }
     return line;
}
console.log(makeLine(5));
console.log("=====================");
function makeSquare(size, size) {
    let square = "";
    for (let i = 0; i < size; i ++) {
        square += (makeLine(size) + "\n");
    }
    return square.slice(0,-1) + makeRectangle(5);
}
console.log(makeSquare(5,5));
console.log("=====================");
function makeRectangle(width, height) {
    let rectangle = "";
    for (let i = 0; i < height; i ++) {
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
