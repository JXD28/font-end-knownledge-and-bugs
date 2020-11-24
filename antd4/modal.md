# Modal 嵌套表单

## 1. 表单重置，清空

放在 componentDidUpdate 中

原因：

-   如果放在取消的函数中，则点击之后会出现值立马消失，不美观。
-   放在 componentDidUpdate 中，不用将确定和取消函数中分别添加重置功能，因为每次更新都会走 componentDidUpdate 这个钩子函数，避免代码冗杂
