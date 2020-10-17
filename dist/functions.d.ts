declare const shuffleArrayInPlace: (array: Array<any>) => void;
declare const shuffleArray: (array: Array<any>) => Array<any>;
declare const generateRandomSequence: (min: number, max: number, step?: number) => Array<number>;
declare const generateSequence: (min: number, max: number, step?: number) => Array<number>;
declare const shuffleCustom: (swapFunction: (i: number, j: number) => void, length: number) => void;
export { shuffleArrayInPlace, shuffleArray, generateRandomSequence, generateSequence, shuffleCustom };
