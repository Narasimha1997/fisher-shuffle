var expect = require('chai').expect

var randomUtils = require('../dist')

//test array shuffling 
describe("#1 Array shuffling", () => {
    describe("Assert array length", () => {
        it("the length of original array should be equal to the shuffled array", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            //original length
            const originalLength = array.length;

            //call shuffle
            randomUtils.shuffleArrayInPlace(array);
            expect(array.length).to.be.equal(originalLength);
        })

        it("Shuffle 100 times and check the same condition satisfies all the time", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            //original length
            const originalLength = array.length;

            var conditional = true;

            for(var i = 0; i < 100; i++) {
                randomUtils.shuffleArrayInPlace(array)
                conditional =  conditional && (array.length === originalLength)
            }

            expect(conditional).to.be.true
        })
    }),
    describe("Assert uniqueness", () => {
        it ("The objects in the array should be uniquely found in shuffled array.", () => {
            const array = [1,2,3,4,5,6,7,8,9,10];

            var conditional = true;

            var shuffledArray = randomUtils.shuffleArray(array)
            shuffledArray = randomUtils.shuffleArray(array)
            shuffledArray = randomUtils.shuffleArray(array)

            shuffledArray.forEach((element) => {

                //check for empties
                if(!element) {
                    conditional = conditional && false;
                } else {
                     conditional =  conditional &&  array.includes(element, 0)
                }
            })

            expect(conditional).to.be.true;
        })
    })
})

describe("#2 Sequence generation test", () => {
    describe("Assert array length", () => {
        it("The length of the array must be same as pre-computed length", () => {
            const min = 0;
            const max = 100;

            const step = 2;
            const length = Math.ceil((max - min)/step);

            const shuffledSequence = randomUtils.generateRandomSequence(min, max, step);

            expect(shuffledSequence.length).to.be.equals(length);
        }),
        it("The lenght of array must be same as pre-computed lenght, in case floating point numbers", () => {
            const min = 0.0
            const max = 1.0

            const step = 0.001;

            const length = Math.ceil((max - min) / step);

            const shuffledSequence = randomUtils.generateRandomSequence(min, max, step);

            expect(shuffledSequence.length).to.be.equals(length);
        })
    }),
    describe("Assert uniqueness", () => {
        it("Every element in the array should be present in the generated shuffled sequence", () => {
            const min = 0;
            const max = 100;

            const step = 2;

            const linearSequence = randomUtils.generateSequence(min, max, step);

            const shuffledSequence = randomUtils.generateRandomSequence(min, max, step);

            var condition = true;
            linearSequence.forEach((element) => {
                condition = condition && shuffledSequence.includes(element, 0);
            })

            expect(condition).to.be.true;
        }),
        it("Every element in the array should be present in the generated shuffled sequence for non-zero min.", () => {
            const min = 50;
            const max = 100;

            const step = 2;

            const linearSequence = randomUtils.generateSequence(min, max, step);

            const shuffledSequence = randomUtils.generateRandomSequence(min, max, step);

            var condition = true;
            linearSequence.forEach((element) => {
                condition = condition && shuffledSequence.includes(element, 0);
            })

            expect(condition).to.be.true;
        }),
        it("Every element in the array should be present in the generated shuffled sequence for non-zero,negative min.", () => {
            const min = -100;
            const max = 100;

            const step = 2;

            const linearSequence = randomUtils.generateSequence(min, max, step);

            const shuffledSequence = randomUtils.generateRandomSequence(min, max, step);

            var condition = true;
            linearSequence.forEach((element) => {
                condition = condition && shuffledSequence.includes(element, 0);
            })

            expect(condition).to.be.true;
        }),
        it("Every element in the array should be present in the shuffled sequence, for floating point numbers", () => {
            const min = -1.0;
            const max = 1.0;

            const step = 0.001;

            const linearSequence = randomUtils.generateSequence(min, max, step);

            const shuffledSequence = randomUtils.generateRandomSequence(min, max, step);


            var condition = true;
            linearSequence.forEach((element) => {
                condition = condition && shuffledSequence.includes(element, 0);
            })

            expect(condition).to.be.true;
        }),
        it("Every element in the array should be present in the shuffled sequence, for floating point numbers with non-zero min", () => {
            const min = 2.0;
            const max = 3.0;

            const step = 0.001;

            const linearSequence = randomUtils.generateSequence(min, max, step);

            const shuffledSequence = randomUtils.generateRandomSequence(min, max, step);

            var condition = true;
            linearSequence.forEach((element) => {
                condition = condition && shuffledSequence.includes(element, 0);
            })

            expect(condition).to.be.true;
        })
    })
})