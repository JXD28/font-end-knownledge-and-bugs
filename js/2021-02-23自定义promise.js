class Promise1 {
    state = 'pending';
    succeed = () => {};
    fail = null;
    constructor(fn) {
        fn(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(result) {
        setTimeout(() => {
            this.state = 'fulfilled';
            this.succeed(result);
        }, 0);
    }
    reject(reason) {
        setTimeout(() => {
            this.state = 'rejected';
            this.fail(reason);
        }, 0);
    }
    then(succeed, fail) {
        // console.log(succeed);
        this.succed = succeed;
        this.fail = fail;
    }
}

const promise = new Promise1((resolve, reject) => {
    resolve('2222');
}).then((res) => {
    console.log(res);
});
