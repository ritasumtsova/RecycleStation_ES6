'use strict';

class RecycleStation {
    constructor (phone, adress) {
        this.__phone = phone;
        this.__adress = adress;
        this.__isOpen = false;
        this.__recycles = null;
        this.__recycleShop = null;
    }

    get phone () {
        return this.__phone;
    }

    set phone (phone) {
        this.__phone = phone;
    }

    get adress () {
        return this.__adress;
    }

    set adress (adress) {
        this.__adress = adress;
    }

    get isOpen () {
        return this.__isOpen;
    }

    changeIsOpen () {
        this.__isOpen = !this.__isOpen;
    }

    get recycles () {
        return this.__recycles;
    }

    addRecycle (recycle) {
        if (this.__isOpen) {
            this.__recycles.push(recycle);
            return true;
        } else {
            return false;
        }
    }

    set recycleShop (recycleShop) {
        this.__recycleShop = recycleShop;
    }

    makeGoods () {
        for (let recycle of this.__recycles) {
            switch (recycle.getName().toLowerCase()) {
                case 'plastic':
                    if (recycle.getRecyclingCount() < 4) {
                        this.__recycleShop.addGoods(`clothes${this.__recycles.indexOf(recycle)}`);
                    };
                    break;
                case 'glass':
                    this.__recycleShop.addGoods(`tableware${this.__recycles.indexOf(recycle)}`);
                    break;
                case 'paper':
                    if (recycle.getRecyclingCount() < 7) {
                        this.__recycleShop.addGoods(`notebook${this.__recycles.indexOf(recycle)}`);
                    };
                break;
                default: 
                    return `${recycle.getColor()} ${recycle.getName()} cannot be recycle. Burn it.`;
            }
        };

        this.__recycles = [];
    }
};