//1
// Promise.resolve(1)
//     .then((res) => {
//         console.log(res);
//         return 2;
//     })
//     .catch((err) => {
//         return 3;
//     })
//     .then((res) => {
//         console.log(res);
//     });
//打印 1 2

//2
// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve();
//     console.log(2);
// });
// promise.then(() => {
//     console.log(3);
// });
//打印1 2 3

//3
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('success'), 1000);
// });
// const promise2 = promise1.then(() => {
//     throw new Error('error !!!');
// });

// console.log('promise1', promise1);
// console.log('promise2', promise2);

// setTimeout(() => {
//     console.log('promise1', promise1);
//     console.log('promise2', promise2);
// }, 2000);
// 打印
//promise1 Promise { <pending> }
//promise2 Promise { <pending> }
//error !!!
//promise1 Promise { 'success' }
//promise2 Promise {
//     <rejected> Error: error !!!
//         at D:\font-end-knownledge-and-bugs\js\2021-02-24Promise题目.js:31:11
//   }

//4
// Promise.resolve()
//     .then(() => {
//         return new Error('error ！！');
//     })
//     .then((res) => {
//         console.log('then', res);
//     })
//     .catch((err) => {
//         console.log('catch', err);
//     });
//打印  then Error: error ！！

//5
// const promise = Promise.resolve().then(() => {
//     return promise;
// });
// promise.catch(console.error);
// 打印 [TypeError: Chaining cycle detected for promise #<Promise>]

//6
// Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console);
// 啥都不打印

//7
// Promise.resolve()
//     .then(
//         function success(res) {
//             throw new Error('error');
//         },
//         function fail(e) {
//             console.error('fail:', e);
//         }
//     )
//     .catch(function fail2(e) {
//         console.error('fail2:', e);
//     });
//打印 fail2: Error: error

//8 nextTick也是微任务，优先级大于then
// process.nextTick(() => {
//     console.log('nextTick');
// });
// Promise.resolve().then(() => {
//     console.log('then');
// });
// setImmediate(() => {
//     console.log('setImmediate');
// });
// console.log('111');
//打印
// 111
// nextTick
// then
// setImmediate

//9 错误没被捕获
// var p = new Promise((resolve, reject) => {
//     console.log(x); //会被外部的catch捕获
//     return Promise.reject('the Fails!');
// });

// // console.log(p);
// p.catch((err) => {
//     console.log('111', err);
// });
// p.catch((err) => {
//     console.log(err);
// });

//10

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('once', Date.now() - start);
        resolve('success');
    }, 1000);
});

const start = Date.now();
promise.then((res) => {
    console.log(res, Date.now() - start);
});

promise.then((res) => {
    console.log(res, Date.now() - start);
});
