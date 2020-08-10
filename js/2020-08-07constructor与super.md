# constructor 与 super

## constructor

constructor 方法是类的默认方法，通过 new 命令生成对象实例时，自动调用该方法。一个类必须有 constructor 方法，如果没有显式定义，一个空的 constructor 方法会被默认添加。

constructor 方法默认返回实例对象（即 this），完全可以指定返回另外一个对象。

```js
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
```

class 写法

```js
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
```

constructor()的参数是实例传入的参数

## super():代表调用父类的构造函数

ES5 的继承，实质是先创造子类的实例对象 this，然后再将父类的方法添加到 this 上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到 this 上面（所以必须先调用 super 方法），然后再用子类的构造函数修改 this

super 是实现继承的函数，用于继承父组件的属性与方法，返回子组件实例的 this

子类的构造函数中，只有调用 super 之后，才可以使用 this 关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有 super 方法才能调用父类实例。

-   作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。

-   super 作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
