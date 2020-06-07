// interface LabelledValue {
//     label: string;
// }
// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label)
// }
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);


// 可选属性
// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any;
// }
// function createSquare(config: SquareConfig): {color: string; area: number} {
//     let newSquare = { color: "white", area: 100 };
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
// let mySquare = createSquare({ colour: "Block", width: 100 });
// console.log(mySquare)

// 只读属性
// interface Point {
//     readonly x: number;
//     readonly y: number;
// }
// let p1: Point = { x: 10, y: 20 };
// p1.x = 5;

// 可索引的类型
// interface StringArray {
//     [index: number]: string;
// }
// let myArray: StringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];
// console.log(myStr)
