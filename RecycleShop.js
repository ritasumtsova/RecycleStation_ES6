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

    addGoodsAsync (goods) {
        const promise = () => new Promise(resolve => { 
            setTimeout(
                () => {
                    if(this.__goods.length < 3) {
                        this.__goods.push(goods);
                        resolve(this.goods);
                    } else {
                        resolve(new Error('The storage is full'));
                    }
                }, 3000
            );
        });

        const addGoods = async () => {
            const data = await promise();
            console.log(data);
        };
        addGoods();
    }

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