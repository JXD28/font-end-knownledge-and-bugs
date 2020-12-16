// class Example {
//     constructor() {
//         this.x = 1;
//         this.string = 'string';
//     }
//     getName() {
//         return 'Example';
//     }
// }

// const classArray = [Example];

// classArray.forEach((item) => {
//     const example = new Example();
//     // const example1 = JSON.stringify(example)  //原型链不会出现在json中
//     for (let key in example) {
//         console.log('key', key); //原型上的方法是不可枚举的   Object.getOwnPropertyDescriptors(obj)查看是否可枚举
//     }
//     const result = Object.getPrototypeOf(example);
//     console.log('result', result); //浏览器中会打印原型上的方法
// });

//ES6新的实例属性写法，但是报错，可能缺少babel
// class Example {
//     x = 1;
//     string = 'string';
//     constructor() {}
//     getName() {
//         return 'Example';
//     }
// }
// const example = new Example();
// console.log('example', example);

//测试class不绑定this会怎么样

class Bind {
    constructor() {
        this.str = 'hello';
    }
    sayHello() {
        console.log('打印', this);
    }
}

const bindInst = new Bind();
const { sayHello } = bindInst;
sayHello();
