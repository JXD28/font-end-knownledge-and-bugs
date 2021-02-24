//手写Promise

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise1(executor) {
    var _this = this;
    this.state = PENDING; //状态
    this.value = undefined; //成功结果
    this.reason = undefined; //失败原因
    this.onFulfilled = []; //成功的回调
    this.onRejected = []; //失败的回调

    function resolve(value) {
        if (_this.state === PENDING) {
            _this.state = FULFILLED;
            _this.value = value;
            _this.onFulfilled.forEach((fn) => fn(value));
        }
    }
    function reject(reason) {
        if (_this.state === PENDING) {
            _this.state = REJECTED;
            _this.reason = reason;
            _this.onRejected.forEach((fn) => fn(reason));
        }
    }
    try {
        executor(resolve, reject);
    } catch (err) {
        console.log(err);
    }
}

Promise1.prototype.then = function (onFulfilled, onRejected) {
    if (this.state === FULFILLED) {
        typeof onFulfilled === 'function' && onFulfilled(this.value);
    }
    if (this.state === REJECTED) {
        typeof onRejected === 'function' && onRejected(this.reason);
    }
    if (this.state === PENDING) {
        typeof onFulfilled === 'function' && this.onFulfilled.push(onFulfilled);
        typeof onRejected === 'function' && this.onRejected.push(onRejected);
    }
};

var p = new Promise1((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 0);
});
p.then((res) => {
    //4 res
    console.log(res, 'res');
});
p.then((res1) => {
    //4 res1
    console.log(res1, 'res1');
});

//链式调用比较难

//Promise.all()
Promise1.all = function (arr) {
    let list = [];
    let len = 0;
    let hasErr = false;
    let errorValue;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i]
                .then((data) => {
                    if (hasErr) {
                        reject(errorValue);
                    }
                    list[i] = data;
                    len++;
                    len === arr.length && resolve(list);
                })
                .catch((err) => {
                    !hasErr && reject(err);
                    hasErr = true;
                    errorValue = err;
                });
        }
    });
};

//Promise.race()
Promise1.race = function (arr) {
    let hasValue = false;
    let hasErr = false;

    return Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i]
                .then((res) => {
                    !hasValue && !hasValue && resolve(res);
                    hasValue = true;
                })
                .catch((err) => {
                    !hasValue && reject(err);
                    hasErr = true;
                });
        }
    });
};
