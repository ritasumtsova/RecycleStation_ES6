'use strict';

class Plastic extends Recycle {
    #weight;
    #color;

    constructor (name, recyclingCount, color) {
        super (name, recyclingCount);
        this.#weight = 0;
        this.#color = color;
    }

    get weight () {
        return this.#weight;
    }

    set weight (weight) {
        this.#weight = weight;
    }

    get color () {
        return this.#color;
    }

    set color (color) {
        this.#color = color;
    }
}