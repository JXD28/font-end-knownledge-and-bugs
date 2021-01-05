# hover 与 visibility

## 1.发现：当 visibility：hidden 的时候不能够响应 hover

不知道为什么
![](img/visible-hover.png)
但是在设置样式中可以看见样式，并且点击 hover 生效
![](img/visible-hover.png)

解决办法：使用 opacity:0 实现隐藏
