'use strict';

class Plastic {
    constructor (name, recyclingCount, weight, color) {
        super (name, recyclingCount);
        this.__weight = weight;
        this.__color = color;
    }

    get weight () {
        return this.__weight;
    }

    set weight (weight) {
        this.__weight = weight;
    }

    get color () {
        return this.__color;
    }

    set color (color) {
        this.__color = color;
    }
};