# 子组件有 defaultProps 属性

如果父组件在调用子组件时，没有给子组件传值，子组件使用的就是 defaultProps 里定义的默认值。

用法：

在定义组件 Children 之后，在 export 之前
组件名.defaultProps = 对象
对象里键为对应的要指定初始值的属性名，值就为要定义的默认值。

```js
import React, { Component } from 'react';

class Children extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '我是子组件',
            msg: '子组件传值给父组件',
        };
    }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <h3>子组件的msg为：{this.state.msg}</h3>
                <h3>父组件传来的msg为：{this.props.msg}</h3>
            </div>
        );
    }
}

// defaultProps
Children.defaultProps = {
    msg: '默认父组件传来的值',
};

export default Children;
```
