//匹配两个数组，id相同，将其他内容合并
const arr1 = [
    {
        id:1,
        name:'属性1'
    },
    {
        id:2,
        name:'属性2'
    },
    {
        id:3,
        name:'属性3'
    },
]

const arr2 = [
    {
        id:1,
        is_visible:true,
        is_other_visible:true,
    },
    {
        id:2,
        is_visible:true,
        is_other_visible:true,
    },
    {
        id:3,
        is_visible:true,
        is_other_visible:true,
    }
]

const temp = []

arr1.forEach(item=>temp[item.id] = item)
console.log(temp)

arr2.forEach(item =>temp[item.id]&&Object.assign(temp[item.id],item))

console.log(temp)

const valideTemp = temp.filter(item=>item!==undefined)

//去除空值
console.log(valideTemp)

