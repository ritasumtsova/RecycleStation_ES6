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
        if (this.#goods.length < 3) {
            this.#goods.push(goods);
        } else {
            new Error('The storage is full');
        }
    }

    addGoodsCallback (goods, callback) {
        setTimeout(
            function () {
              let error;
              let data;
      
              if (this.#goods.length < 3) {
                  this.#goods.push(goods);
                  data = this.#goods;
              } else {
                  error = new Error('The storage is full')
              }
      
              callback(error, data);
            }.bind(this), 3000
          );
    }

    addGoodsPromise (goods) {
        return new Promise((resolve, reject) => { 
            setTimeout(() => {
                if(this.#goods.length < 3) {
                    this.#goods.push(goods);
                    resolve(this.#goods);
                } else {
                    reject(new Error('The storage is full'));
                }
            }, 3000);
        });
    }

    buyGoods (goods) {
        const purchase = this.#goods.find(good => good === goods);

        if (purchase) {
            this.#goods.splice(this.#goods.indexOf(purchase), 1);
            return purchase;
        } else {
            return null;
        }
    }
}