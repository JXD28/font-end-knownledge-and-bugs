# localStorage

## 1.测试 localStorage 大小

```js
(function () {
    if (!window.localStorage) {
        console.log('当前浏览器不支持localStorage!');
    }
    var test = '0123456789';
    var add = function (num) {
        num += num;
        if (num.length == 10240) {
            test = num;
            return;
        }
        add(num);
    };
    add(test);
    var sum = test;
    var show = setInterval(function () {
        sum += test;
        try {
            window.localStorage.removeItem('test');
            window.localStorage.setItem('test', sum);
            console.log(sum.length / 1024 + 'KB');
        } catch (e) {
            alert(sum.length / 1024 + 'KB超出最大限制');
            clearInterval(show);
        }
    }, 0.1);
})();
```
