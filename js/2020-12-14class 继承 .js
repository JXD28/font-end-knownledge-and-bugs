class Parent {
    constructor(props) {
        this.socket = props.url;
        this.options = props.options;
    }
}

class Child extends Parent {
    constructor(props) {
        super({ url: '321', ...props });
    }
}

const inst = new Child({ options: '123' });
console.log('inst', inst);
