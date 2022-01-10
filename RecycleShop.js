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

        // const addGoods = async () => {
        //     const data = await promise();
        //     console.log(data);
        // };
        // addGoods();
    }

    buyGoods (goods) {
        let purchase;

        this.#goods.findIndex( good => {
            good === goods;
            purchase = goods;
            this.#goods.splice(this.#goods.indexOf(good), 1);
        });

        if (purchase) {
            return purchase;
        } else {
            return null;
        }
    }
}