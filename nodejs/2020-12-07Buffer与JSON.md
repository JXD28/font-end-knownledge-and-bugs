# BUffer 与 JSON

当 fs.readFile 的 options 参数没有指定编码方式的时候，会返回 buffer

nodejs 读取文档的之后，将数据通过 http 传给前端，将 Buffer 转换成 JSON

使用的方法：

（1）JSON.stringify 方法将数据对象转换成一个字符串

（2）JSON.parse 方法将字符串转换成对象

---

## 结论

1. 源数据不是 JSON 格式的，转换成 Buffer 之后，必须通过 JSON.stringify()转成 JSON,再使用 JSON.parse()转成对象

```js
const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);
console.log(buf1, buf1.toString()); //<Buffer 01 02 03 04 05 06 07 08> '\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b'
const buf2 = JSON.stringify(buf1);
console.log('buf2', buf2); //{"type":"Buffer","data":[1,2,3,4,5,6,7,8]}
const copy = JSON.parse(buf12);
console.log(copy); //{ type: 'Buffer', data: [ 1, 2, 3, 4, 5, 6, 7, 8 ] }
```

2. 源数据是 JSON 格式的，转换成 Buffer 之后，可以不调用 JSON.stringify()，就可以使用 JSON.parse()转成对象

```js
const buf1 = Buffer.from(JSON.stringify({ abc: 12333 }));
console.log(buf1, buf1.toString()); //<Buffer 7b 22 61 62 63 22 3a 31 32 33 33 33 7d> '{"abc":12333}'
const copy = JSON.parse(buf1);
console.log(copy); //{ abc: 12333 }
```

可能原因： JSON.parse() 内部将不是 json 格式的数据，隐式调用 toString()

## json

首先，要搞清楚 JSON 和 Object 对象是什么关系；主要有以下的区别：
1、JSON 是对象，但对象不一定是 JSON
2、这一点是区别对象和 JSON 的重要关键点，对象的组成是由属性和属性值，也就是 KEY->VALUE 对组成
然而，还有一点是 value 可是是任意的数据类型，当 value 为一个函数的时候，这个时候叫做方法。而你通过
通过 JSON.parse()传入的字符串并里面有 VALUE 为 function 的吗？得问一下。我想你不可能像下面的例子一样写这个被转换的字符串吧：
var a = '{name:"",say:function(){}}';
JSON.parse(a);
以上代码，是没有办法执行的。即使是服务器转换的 JSON 字符串，也没有把方法转换进这个字符串的。
3、在 JSON 对象中出现的 value 始终都不可能是一个函数，如果转换后添加进去方法，那就变成一个真正的 JS 对象了。
4、JSON 是一种数据结构，并不是对象。因此没有方法。这个要仔细体会

json 不能通过点方法获取属性,属性值不能为 function
js 对象的属性也可以使用双引号包裹

## body.json()与 JSON.parse()的区别

### body.json() 返回的是一个 Promise(获取到的值为 js 对象?)

response 是 Response 对象，包含 Header、status、statusText 等属性。要获得具体数据需要使用.json（用于 JSON）、.text（用于文本）、.formData（用于 FormData 对象）等方法。至于为什么需要 return，因为 Response.json 返回的是一个 Promise，所以只能先 return，再在下一层处理。

```js
fetch(url).
then(function(response){
//打印响应头
console.log(response.headers);
//打印状态码
console.log(response.status);
//打印状态信息
console.log(response.statusText);
//使用.json 方法获得具体返回数据，再下一层 Promise 里处理
returnresponse.json();
})
.then(function(data){console.log(data);})
.catch(function(e){console.log("Oops,eror");
```
