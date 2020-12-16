const array = [
    [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
        { a: 7, b: 8, c: 9 },
    ],
    [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
        { a: 7, b: 8, c: 9 },
    ],
    [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
        { a: 7, b: 8, c: 9 },
    ],
];
array.forEach((d, i) => {
    //省略reduce第二个参数，curValue是第二个元素
    //sum 就是上一次return的值
    const result = d.reduce((sum, curValue) => {
        console.log(sum.a, curValue.a);
        return {
            a: sum.a + curValue.a,
            b: sum.b + curValue.b,
            c: sum.c + curValue.c,
        };
    });
    console.log('result', result);
});
