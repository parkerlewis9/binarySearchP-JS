const mocha = require("mocha")
const expect = require("chai").expect
const binarySearch = require("../search.js")

describe("Binary Search", () =>{
    it("should return the index of the the matched number", () => {
        const myList = [6,12,15,17,26,30]
        expect(binarySearch(myList, 26)).to.equal(4)

        const mySecondList = [6,12,15,17,26]
        expect(binarySearch(mySecondList, 6)).to.equal(0)
    })
})
