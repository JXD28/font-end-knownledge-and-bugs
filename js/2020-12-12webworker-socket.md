# 使用socketio-shared-webworker

## 1.看了源码就两个文件

当在react中使用这个依赖
由于文件中引用了ES7 的新的实例属性的写法,即使添加了如下依赖也不好使
```json
 "plugins": ["@babel/plugin-proposal-class-properties","@babel/plugin-syntax-class-properties"]
 ```

- 解决办法
  将以来中的index.js引用的文件改为dist中的

另一个问题

在前端js文件中引入依赖,如果不加window,wio会报错,即使依赖中已经将wio添加到了global中,但是依然不能单独使用wio

原因:
能省略window的方法必须是系统定义好方法: 比如alert, cofirm, location等;
如果是用户自定义的window对象的方法,则必须写成 window.自定义方法(参数列表);