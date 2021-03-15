module.exports = function reverse (n) {
    let str = n.toString();
    let numbString = Array.from(str);
    if (numbString[0] == "-") {
        numbString.splice(0,1);
    }
    let reversedArr = numbString.reverse();
    let reversedStr = reversedArr.join('');
    return reversedStr;
}
