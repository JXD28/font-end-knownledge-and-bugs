# G6 总结以及 Bug

## 1.自定义边

-   自定义一个边有两个 label

    ![two-label](img/two-label.png)

-   边的两端有圆圈

    ![two-circle](img/two-circle.png)

    代码实现

    ![code-two-circle](img/code-two-circle.png)

-   过长的 label 怎么换行
    ![long-label-function](img/long-label-function.png)
    ![](img/long-label-in-edge.png)
-   出现划痕
    ![custom-edge-bug01](img/custom-edge-bug01.gif)

    -   可能原因：超出画布的边界，或者其他
    -   解决办法：添加属性 `fitCenter:true` 将元素都放在画布中间或者增加高度和宽度

-   shape 会减少

    ![debug-two-label](img/debug-two-label.png)

    -   原因：只画了一个边，另一个边画导致更新顺序错乱

        ![debug-two-label01](img/debug-two-label01.png)

    -   解决办法：将第二条边也画上，即使不需要任何文字

        ![debug-two-label02](img/debug-two-label02.png)

-   afterUpdate()

    ![afterUpfate-order](img/afterUpfate-order.png)

    group.get('children')的顺序是 draw()和 afterDraw()画的顺序。

-   lineAppendWidth 的位置要写在定义的边内，写在 defaultEdge 内无效
    ![lineAppendWidth](img/lineAppendWidth.png)
    ![lineAppendWidth-position](img/lineAppendWidth-position.png)

-   **自定义节点的注册，渲染数据函数在 componentDidmount 中实现，并且注册节点函数在数据渲染函数之前**

## 2.Bug

-   can't read property '0' of null

    ![property0_of_null](img/property0_of_null.png)

    解决办法：定义节点时候要有 x,y 属性，即使都为负数，在全局中设置了布局之后，会忽视之前定义的 x，y

    但是：依然有错误

-   加 rect 加不上

    ![](img/rect%E5%8A%A0%E4%B8%8D%E4%B8%8A.png)

原因：没设置宽度和高度

## 3.自定义节点

-   graph.data(data) 与 注册节点 afterDraw()的顺序
    graph.data(data)在 afterDraw()之前
    ![](img/%E6%B7%BB%E5%8A%A0%E8%BF%9E%E6%8E%A5%E5%99%A8%E4%B8%8D%E8%A1%8C.png)

## 4.现存问题

-   拖拽报错(一直未解决)使用内置边与节点都报错
-   label 重叠(middle)
-   多个连接器在同侧需要后端配合(后续提供数据结构)

## 5.changeData()报错，改为 graph.paint()

![](img/destroy%20of%20undefined.png)
![](img/graph-paint.png)

但是 paint 只能更新当前 id 相同的节点边等，更新数据源不会重绘
报错原因是数据源出现的问题，线的 target 指向了不存在节点

## 6.在给连接器添加点击事件的时候，出现不能相应的情况，但是 demo 中却可以实现

```js
group.addShape('circle', {
    attrs: {
        x: 0,
        y: -30,
        r: 10,
        fill: '#096dd9',
        cursor: 'pointer',
    },
    name: 'circle-shape',
});

graph.on('circle-shape:click', (evt) => {
    const { item } = evt;
    graph.updateItem(item, {
        label: '点击了圆',
        labelCfg: {
            style: {
                fill: '#003a8c',
                fontSize: 16,
            },
        },
    });
});
```

可能与版本有关？使用版本：3.5.8 ，当前文档版本：3.8.0

解决办法：

手动添加判断：拿到点击对象 e.getTarget()

## 7.右键出现菜单问题

条件：G6 目前使用的版本：3.5.10，官网 G6 版本：4.0.0

-   1.使用最新的方法 new Menu({...})点击 canvas 会打印报错信息，getmodel 找不到
    ![](img/g6%20contextMenu.png)
-   2.使用旧版的方法，手动创建 dom
    ![](img/g6%20contextMenuOldV.png)
    使用监听来改变
    ![](img/g6contextMenuListener.png)
    但是这种方法没有新方法的回调函数，拿不到右击的当前节点
-   3.使用旧版方法，dom 添加监听函数，g6 context 监听调用回调函数，将 edge 的信息传出去
-   4.menu 的滚轮事件的放大缩小-> 出现的问题 useRef 会赋值两次 null，原因可能是定义的时候使用 let 而没有使用 const
-   5.涉及到 useRef 的使用，使用 current 来对数据进行改写

## 8.状态管理

设置了多次 setItemStates 之后，会把之前设置过的状态都存储起来，只显示最后一次设置的样式

这样当再次设置之前的样式就不会生效

因此要在设置之前清除上一次设置的样式

这样也避免了 hasState()判断的错误

## 9.引入 toolBar 之后，自定义 shape 的动作不会入栈

可能原因： 没有将 graph.updateItem(item, model, stack) ，参数 stack 设置成 true

![](img/updateItem.png)

## 10.开启布局之后节点配置 x，y 不生效
