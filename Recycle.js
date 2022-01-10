'use strict';

class Recycle {
    constructor (name, recyclingCount) {
        this._name = name;
        this._recyclingCount = recyclingCount;
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
}