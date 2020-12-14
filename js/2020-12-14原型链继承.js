//验证原型链上的this是谁,是通过new决定的,ES6 的 extends不是这种继承方式

//-------------原型链 继承------------------
function Grandpa() {
    this.grandpa = 'yeye';
    console.log('eeeeee', this); //这里打印出来的this是Grandpa new 之后,得到的一个对象
}

Grandpa.prototype.sayGrandpa = function () {
    this.grandpa = 'YEYE';
};

function Father() {
    this.father = 'baba';
    console.log('cccc', this); //Father   new的时候执行
    console.log('wwwww'.this.grandpa); //正常打印,继承
}

Father.prototype = new Grandpa();

console.log('wwwww', Father.grandpa); //undefined,原因是还没有实例化,还是一个函数
console.log('wwwww', new Father().grandpa); //正常打印 yeye
console.log(Grandpa.prototype);

Father.prototype.sayFather = function () {
    return (this.father = 'BABA');
};

const inst = new Father();
console.log(
    '🚀 ~ file: 2020-12-14原型链继承.js ~ line 16 ~ inst',
    inst.grandpa
); //打印 yeye ,因为继承

//--------------extends 继承 --------------------

class Grandma {
    constructor(props) {
        this.grandma = 'nainai';
        console.log(this);
    }

    sayGrandma() {
        this.grandma = 'NAINAI';
    }
}

class Mother extends Grandma {
    constructor(props) {
        super(props);
        this.mother = 'mama';
    }

    sayMother() {
        this.mother = 'MAMA';
    }
}

const inst1 = new Mother();
console.log('🚀 ~ file: 2020-12-14原型链继承.js ~ line 55 ~ inst1', inst1);
