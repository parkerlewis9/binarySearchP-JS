module.exports = function search(list, num) {
    let minIndex = 0;
    let maxIndex = list.length - 1
    let middleIndice = Math.floor((list.length - 1) / 2)

    while (minIndex <= maxIndex) {
        if(num < list[middleIndice]) {
            maxIndex = middleIndice - 1
            middleIndice = Math.floor((maxIndex - minIndex) / 2) + minIndex
        } else if (num > list[middleIndice]) {
            minIndex = middleIndice + 1
            middleIndice = Math.floor((maxIndex - minIndex) / 2) + minIndex
        } else {
            return middleIndice
        }
    }


}
