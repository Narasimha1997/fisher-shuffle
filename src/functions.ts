//random number generator
const randomIntFromInterval = (min : number, max : number) : number =>  { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//shuffle the given array :
const shuffleArrayInPlace = (array : Array<any>) : void => {

    for (var i = array.length - 1; i >= 1; i --) {
        const j : number = randomIntFromInterval(0, i)

        //swap i and j
        const temp : any = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const shuffleArray = (array : Array<any>) : Array<any> => {
    const arrayCopy : Array<any> = [...array];
    shuffleArrayInPlace(arrayCopy);
    return arrayCopy
}

//generate random unique array between min to (max - 1)
const generateRandomSequence = (min : number, max : number, step : number = 1) : Array<number> => {

    if (step == 0) {
        return []
    }

    const array : Array<number> = generateSequence(min, max, step);
    shuffleArrayInPlace(array);
    return array; 
}

//generate linear sequence between min to (max - 1):
const generateSequence = (min : number, max : number, step : number = 1) : Array<number> => {

    if (step == 0) { 
        return [] 
    }

    const length = Math.ceil((max - min) / step)
    const array : Array<number> = new Array(length)

    for(var i = 0; i < length; i ++) {
        array[i] = min + (i * step);
    }

    return array;
}

const shuffleCustom = (swapFunction : (i : number, j : number) => void, length : number) : void => {
    for (var i = length - 1; i >= 1 ; i --) {
        const j : number = randomIntFromInterval(0, i);
        swapFunction(i, j);
    }
} 

export {shuffleArrayInPlace, shuffleArray, generateRandomSequence, generateSequence, shuffleCustom}