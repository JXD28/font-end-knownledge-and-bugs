//高阶函数:一个函数作为参数

//像map ,filter,reduce等都是高阶函数

//返回一个函数的时候,传参的方式
const hoc = (props) => (ddd) => {
console.log("🚀 ~ file: 2020-12-27高阶函数.js ~ line 4 ~ hoc ~ ddd", ddd)
    console.log('props',props)
}

hoc(123)(345)