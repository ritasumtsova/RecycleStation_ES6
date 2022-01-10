'use strict';

const recycle = new Recycle('plastic', 5);
const greenPlastic = new Plastic('plastic', 2, 10, 'green');
const bluePlastic = new Plastic('plastic', 1, 8, 'blue');
const blackPlastic = new Plastic('plastic', 9, 34, 'black');
const yellowPlastic = new Plastic('plastic', 1, 46, 'yellow');
const recycleShop = new RecycleShop('+380939009393');
const recycleStation = new RecycleStation('+380505005050', 'Kharkiv');
const user = new User('+380939009090');

//recycleShop.addGoods('t-shirt');

// CALLBACK INVOKE
// recycleShop.addGoodsCallback('async table 1', (error, data) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(data);
//         recycleShop.addGoodsCallback('async table 2', (error, data) => {
//             if (error) {
//                 console.error(error);
//             } else {
//                 console.log(data);
//                 recycleShop.addGoodsCallback('async table 3', (error, data) => {
//                     if (error) {
//                         console.error(error);
//                     } else {
//                         console.log(data);
//                     }
//                 });
//             }
//         });
//     }
// });

// THEN CATCH INVOKE
// recycleShop.addGoodsPromise('async glasses 1')
//         .then(data => {
//             console.log(data);
//             return recycleShop.addGoodsPromise('async glasses 2');
//         })
//         .then(data => {
//             console.log(data);
//             return recycleShop.addGoodsPromise('async glasses 3');
//         })
//         .then(data => console.log(data))
//         .catch(error => console.error(error))

// ASYNC AWAIT INVOKE
const addGoodsAsyncAwait = async (goods1, goods2, goods3) => {
    try {
        const data1 = await recycleShop.addGoodsPromise('async soap 1');
        console.log(data1);
        const data2 = await recycleShop.addGoodsPromise('async soap 2');
        console.log(data2);
        const data3 = await recycleShop.addGoodsPromise('async soap 3');
        console.log(data3);
    } catch (error) {
        console.error(error);
    }
};
addGoodsAsyncAwait();
