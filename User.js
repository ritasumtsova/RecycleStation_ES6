'use strict';

class User {
    constructor (phone) {
        this.__name = 'User';
        this.__phone = phone;
        this.__goods = [];
        this.__recycles = [];
        this.__recycleStation = null;
        this.__recycleShop = null;
    }

    get name () {
        return this.__name;
    }

    set name (name) {
        this.__name = name;
    }

    get phone () {
        return this.__phone;
    }

    set phone (phone) {
        this.__phone = phone;
    }

    get goods () {
        return this.__goods;
    }

    buyGoods (goods) {
        let good = this.__recycleShop.buyGoods(goods);

        if (good) {
            this.__goods.push(good);
        }

        return good;
    }

    get recycles () {
        return this.__recycles;
    }

    addRecycle (recycle) {
        this.__recycles.push(recycle);
    }

    giveRecycles () {
        if (this.__recycles.length > 0) {
            let success;

            for (let recycle of this.__recycles) {
                success = this.__recycleStation.addRecycle(recycle);
            }

            if (success) {
                this.__recycles = [];
                return 'Great! Your recycles were taken.';
            } else {
                return 'Error. The station is closed. Try again later.';
            }

        } else {
            return 'You have no recycles to give.'
        }
    }

    set recycleStation (recycleStation) {
        this.__recycleStation = recycleStation;
    }

    set recycleShop (recycleShop) {
        this.__recycleShop = recycleShop;
    }
};