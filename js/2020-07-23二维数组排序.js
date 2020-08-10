const aaa = [
    [1, 0.3],
    [1, 0.2],
    [1, 0.6],
];
aaa.sort(function (a, b) {
    return a[1] - b[1];
});

console.log(aaa);
