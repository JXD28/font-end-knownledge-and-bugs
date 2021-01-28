let data = [];

function add(num) {
    if (data.length === 0) {
        data.push(num);
        return;
    }
    let left = 0;
    let right = data.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (data[mid] === num) {
            data.splice(mid, 0, num);
            return;
        } else if (num > data[mid]) {
            ++left;
        } else {
            --right;
        }
    }
    data.splice(right, 0, num);
}

add(3);
add(7);
add(2);
add(1);
add(5);
add(-1);
add(4);
add(3);
console.log(data);
