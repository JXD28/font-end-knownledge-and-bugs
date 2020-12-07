//源文件为Buffer-----------------------------
// const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);
// console.log(buf1, buf1.toString());
// const buf2 = JSON.stringify(buf1);
// console.log('buf2', buf2);
// const copy = JSON.parse(buf2);
// console.log(copy);
//源文件为json--------------------------------
const buf1 = Buffer.from(JSON.stringify({ abc: 12333 }));
console.log(buf1, buf1.toString());
const copy = JSON.parse(buf1);
console.log(copy);
