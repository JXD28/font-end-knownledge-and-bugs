1. table 组件批量删除或者其他操作时,操作之后应该清空一下 rowSelection 的选中项信息，未清空的情况时再次点击选中项会报错，原因是当前选中项的 key 值是之前已经删除的 key 值（190014 批量审批遇到的问题）
2. e.preventDefault()慎用，会影响到一些标签的默认功能（190014 表单 textArea 标签遇到的问题）
3. antd 的组件有时候会显示英文，需要全局配置 LocalProvider
4. 刚刚 git 拉下来的项目在 install 成功之后运行出现了 cannot resolve ‘fs’ ，npm install fs 无效 ，可以在 webpack 的 devServer 同级添加 node：{fs：‘empty’}
