//let row = 3;
//let col = 5;
/*for(let j=0;j<row;j++){
    for(let i=0;i<col;i++){
        text += "-";
    }
    text += "\n"
}
console.log(text)
*/
debugger;
function printLine(row,col){
    text = "";
    for(let j=0;j<row;j++){
        text += draw(col);
        text += "\n"
    }
    console.log(text);
}
function draw(col){
    text = "";
    for(let i=0;i<col;i++){
        text += "-";
    }
    return text;
}
printLine(5,3);