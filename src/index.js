module.exports = function reverse (n) {
    if(n < 0) n = n * (-1);

    var a = n.toString().split("").reverse().join("");

    return Number(a);
}
