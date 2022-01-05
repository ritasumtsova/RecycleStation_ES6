'use strict';

class RecycleShop {
    constructor (phone, goods = []) {
        this.__phone = phone;
        this.__goods = goods;
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

    addGoods (goods) {
        this.__goods.push(goods);
    }

    // async addGoodsAsync (goods) {
    //     setTimeout( () => {
    //         let error;
    //         let data;

    //         if (this.__goods.length < 3) {
    //             this.__goods.push(goods);
    //             data = this.getGoods();
    //         } else {
    //             error = new Error('The storage is full')
    //         }
                
    //         callback(error, data);            
    //     })
    // }

    buyGoods (goods) {
        let purchase;

        this.__goods.find( good => {
            if (good === goods) {
                purchase = goods;
                this.__goods.splice(this.__goods.indexOf(good), 1);
           }
       });

        if (purchase) {
            return purchase;
        } else {
            return null;
        }
    }
};