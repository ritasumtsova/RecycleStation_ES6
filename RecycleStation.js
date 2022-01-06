'use strict';

class RecycleStation {
    #phone;
    #adress;
    #isOpen;
    #recycles;
    #recycleShop;
    constructor (phone, adress) {
        this.#phone = phone;
        this.#adress = adress;
        this.#isOpen = false;
        this.#recycles = [];
        this.#recycleShop = null;
    }

    get phone () {
        return this.#phone;
    }

    set phone (phone) {
        this.#phone = phone;
    }

    get adress () {
        return this.#adress;
    }

    set adress (adress) {
        this.#adress = adress;
    }

    get isOpen () {
        return this.#isOpen;
    }

    changeIsOpen () {
        this.#isOpen = !this.#isOpen;
    }

    get recycles () {
        return this.#recycles;
    }

    addRecycle (recycle) {
        if (this.#isOpen) {
            this.#recycles.push(recycle);
            return true;
        } else {
            return false;
        }
    }

    set recycleShop (recycleShop) {
        this.#recycleShop = recycleShop;
    }

    makeGoods () {
        if(this.#recycles.length > 0) {
            for (let recycle of this.#recycles) {
                switch (recycle.name.toLowerCase()) {
                    case 'plastic':
                        if (recycle.recyclingCount < 4) {
                            this.#recycleShop.addGoods(`clothes${this.#recycles.indexOf(recycle)}`);
                        };
                        break;
                    case 'glass':
                        this.#recycleShop.addGoods(`tableware${this.#recycles.indexOf(recycle)}`);
                        break;
                    case 'paper':
                        if (recycle.recyclingCount < 7) {
                            this.#recycleShop.addGoods(`notebook${this.#recycles.indexOf(recycle)}`);
                        };
                    break;
                    default: 
                        return `${recycle.color} ${recycle.name} cannot be recycle. Burn it.`;
                }
            };
    
            this.__recycles = [];
        } else {
            return 'Recycle station has no recycles to make the goods.'
        }
    }
};