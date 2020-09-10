# Table 组件

## 1.前端分页序号问题

问题： 在初始化 columns 的时候设置的 render 函数，只能保存当时的 pagination，但是当分页的时候，pagination 还是之前的值，导致序号不更新

解决： 在 onChange 回调函数中，将 columns 的 render 重新定义，传入当时的 pagination。由于下边的 setPagination 会触发表格更新，而直接改变 hooks 的值就会生效
![](img/%E5%89%8D%E7%AB%AF%E5%88%86%E9%A1%B5.png)

## 2.shouldCellUpdate 与可编辑表格

![](img/%E5%8F%AF%E7%BC%96%E8%BE%91%E8%A1%A8%E6%A0%BC%E4%B8%8D%E7%94%9F%E6%95%88.png)
