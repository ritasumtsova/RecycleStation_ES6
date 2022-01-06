'use strict';

class User {
    #name;
    #phone;
    #goods;
    #recycles;
    #recycleStation;
    #recycleShop;

    constructor (phone) {
        this.#name = 'User';
        this.#phone = phone;
        this.#goods = [];
        this.#recycles = [];
        this.#recycleStation = null;
        this.#recycleShop = null;
    }

    get name () {
        return this.#name;
    }

    set name (name) {
        this.#name = name;
    }

    get phone () {
        return this.#phone;
    }

    set phone (phone) {
        this.#phone = phone;
    }

    get goods () {
        return this.#goods;
    }

    buyGoods (goods) {
        let good = this.#recycleShop.buyGoods(goods);

        if (good) {
            this.#goods.push(good);
        }

        return good;
    }

    get recycles () {
        return this.#recycles;
    }

    addRecycle (recycle) {
        this.#recycles.push(recycle);
    }

    giveRecycles () {
        if (this.#recycles.length > 0) {
            let success;

            for (let recycle of this.#recycles) {
                success = this.#recycleStation.addRecycle(recycle);
            }

            if (success) {
                this.#recycles = [];
                return 'Great! Your recycles were taken.';
            } else {
                return 'Error. The station is closed. Try again later.';
            }

        } else {
            return 'You have no recycles to give.'
        }
    }

    set recycleStation (recycleStation) {
        this.#recycleStation = recycleStation;
    }

    set recycleShop (recycleShop) {
        this.#recycleShop = recycleShop;
    }
};