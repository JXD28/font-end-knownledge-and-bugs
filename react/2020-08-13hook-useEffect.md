# useEffect 不明之处

## 1.有时监控父组件传来的 props，useEffect 一直在执行：因为子组件函数中的函数是调用父组件的函数，因此一直改变 props

-   解决办法
    ![](img/useEffect-bug.png)
    这里是因为拖拽之后改变了 data 的地址(immutablility-helper)，
