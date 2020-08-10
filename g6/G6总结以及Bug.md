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
-
