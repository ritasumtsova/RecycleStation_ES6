'use strict';

class Recycle {
    constructor (recyclingCount, name) {
        this._recyclingCount = recyclingCount;
        this._name = name;
    }

    get name () {
        return this._name;
    }

    set name (name) {
        this._name = name;
    } 

    get recyclingCount () {
        return this._recyclingCount;
    }

    set recyclingCount (recyclingCount) {
        this._recyclingCount = recyclingCount;
    }
};