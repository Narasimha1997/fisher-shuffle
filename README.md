### random-shuffle
A set of utility functions to shuffle and generate random array sequences based on **Fisher–Yates Algorithm**. The package is written in typescript and does not depend on any other packages. The package is published as an npm module.

#### 1. To install :
```
npm install fisher-shuffle
```

#### 2. Functions 
a. `shuffleArray` :
Creates a new array which is the shuffled version of the old one, (note : this creates another array in memory)

```javascript
const randomUtils = require('random-shuffle')

//It can shuffle arrays of any type. (including custom object arrays)
const originalArray = [1,2,3,4,5,6,7]
const shuffledArray = randomUtils.shuffleArray(originalArray)

console.log(shuffledArray)

//output : [10, 9, 5, 7, 1, 2, 6, 4, 8, 3]
```

b. `shuffleArrayInPlace` :
This function shuffles the array in-place without creating another array in O(n) time. This is the best method to use to shuffle large arrays, which are memory-costly.

```javascript
const randomUtils = require('random-shuffle')

//It can shuffle arrays of any type. (including custom object arrays)
const originalArray = [1,2,3,4,5,6,7]
randomUtils.shuffleArrayInPlace(originalArray)

console.log(originalArray)

//output : [4, 5,  9, 2, 7, 3, 6, 10, 8, 1 ]
```

c. `generateSequence` :
Generates a linear sequence from `min` to `max` by incrementing `step` every time, this is just like python's range, except the returns the array at once.

```javascript
const randomUtils = require('random-shuffle')

//It can generate integer and floating point sequences
const result = randomUtils.generateSequence(min = 0, max = 100, step = 10)
console.log(result)

//output : [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
```

d. `generateRandomSequence` :
Generates a random sequence between the range `min` and `max`, with `step` difference. The result is a unique sequence, which means there are no repetitions.

```javascript
const randomUtils = require('random-shuffle')

//It can generate integer and floating point sequences
const result = randomUtils.generateRandomSequence(min = 0, max = 100, step = 10)
console.log(result)

//output : [40, 50,  0, 60, 10,90, 30, 80, 70, 20]
```

#### 3. Development :
As a developer, if you want to develop modules on top of `random-shuffle` or modify the codebase, you have to setup the development environment. The project is written using `typescript`, version `4.0.3`. You can simply run `npm install` to install `typescript`.

##### a. Compiling :
To compile the module, run :
```
npm run build
```
or you can use `tsc` if typescript is installed globally.

##### b. Running unit-tests (still under implementation):
We are using `mocha` and `chai` to write unit-tests. Run `npm install` and `npm run test` to run the unit-tests.

#### 4. Contributing
Contributions are welcome. You can add new functionalities or write tests. We are using `mocha` and `chai` for unit-testing.

#### Acknowledements 
1. Fisher–Yates algorithm