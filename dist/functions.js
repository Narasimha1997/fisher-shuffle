"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleCustom = exports.generateSequence = exports.generateRandomSequence = exports.shuffleArray = exports.shuffleArrayInPlace = void 0;
//random number generator
var randomIntFromInterval = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
//shuffle the given array :
var shuffleArrayInPlace = function (array) {
    for (var i = array.length - 1; i >= 1; i--) {
        var j = randomIntFromInterval(0, i);
        //swap i and j
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};
exports.shuffleArrayInPlace = shuffleArrayInPlace;
var shuffleArray = function (array) {
    var arrayCopy = __spreadArrays(array);
    shuffleArrayInPlace(arrayCopy);
    return arrayCopy;
};
exports.shuffleArray = shuffleArray;
//generate random unique array between min to (max - 1)
var generateRandomSequence = function (min, max, step) {
    if (step === void 0) { step = 1; }
    if (step == 0) {
        return [];
    }
    var array = generateSequence(min, max, step);
    shuffleArrayInPlace(array);
    return array;
};
exports.generateRandomSequence = generateRandomSequence;
//generate linear sequence between min to (max - 1):
var generateSequence = function (min, max, step) {
    if (step === void 0) { step = 1; }
    if (step == 0) {
        return [];
    }
    var length = Math.ceil((max - min) / step);
    var array = new Array(length);
    for (var i = 0; i < length; i++) {
        array[i] = min + (i * step);
    }
    return array;
};
exports.generateSequence = generateSequence;
var shuffleCustom = function (swapFunction, length) {
    for (var i = length - 1; i >= 1; i--) {
        var j = randomIntFromInterval(0, i);
        swapFunction(i, j);
    }
};
exports.shuffleCustom = shuffleCustom;
