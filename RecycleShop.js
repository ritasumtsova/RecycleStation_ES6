'use strict';

class RecycleShop {
    #phone;
    #goods;
    constructor (phone) {
        this.#phone = phone;
        this.#goods = [];
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

    addGoods (goods) {
        this.#goods.push(goods);
    }

    addGoodsAsync (goods) {
        const promise = () => new Promise(resolve => { 
            setTimeout(
                () => {
                    if(this.#goods.length < 3) {
                        this.#goods.push(goods);
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

        this.#goods.find( good => {
            if (good === goods) {
                purchase = goods;
                this.#goods.splice(this.#goods.indexOf(good), 1);
           }
       });

        if (purchase) {
            return purchase;
        } else {
            return null;
        }
    }
};