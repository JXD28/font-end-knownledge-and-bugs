//题目
// function Foo() {
//     getName = function () {
//         console.log(1);
//     };
//     return this;
// }
// Foo.getName = function () {
//     console.log(2);
// };
// Foo.prototype.getName = function () {
//     console.log(3);
// };
// var getName = function () {
//     console.log(4);
// };
// function getName() {
//     console.log(5);
// }

// //请写出以下输出结果：
// Foo.getName(); //2
// getName(); //4
// Foo().getName(); //报错
// getName();
// new Foo.getName(); // new (Foo.getName)(); .成员访问(18)->new有参数列表(18)
// new Foo().getName(); // (new Foo()).getName(); new有参数列表(18)->.成员访问(18)->()函数调用(17)
// new new Foo().getName(); // new (new Foo().getName)(); new有参数列表(18)->new有参数列表(18)

//---------------函数声明与函数表达式---------------
getName(); //5
var getName = function () {
    console.log(4);
};
getName(); //4
function getName() {
    console.log(5);
}
getName(); //4 表达式覆盖了函数声明
//-------------------------------------------------
//---------------new有参数优先级大于无参数---------------

// new Foo //无参数
// new Foo() //有参数
