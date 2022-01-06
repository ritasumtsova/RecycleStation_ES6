'use strict';

const recycle = new Recycle('plastic', 5);
const greenPlastic = new Plastic('plastic', 2, 10, 'green');
const bluePlastic = new Plastic('plastic', 1, 8, 'blue');
const blackPlastic = new Plastic('plastic', 9, 34, 'black');
const yellowPlastic = new Plastic('plastic', 1, 46, 'yellow');
const recycleShop = new RecycleShop('+380939009393');
const recycleStation = new RecycleStation('+380505005050', 'Kharkiv');
const user = new User('+380939009090');

//console.log(recycle);
recycleShop.addGoods('table');
recycleShop.addGoods('glasses');
console.log(recycleShop.goods);

recycleStation.recycleShop = recycleShop;
recycleStation.changeIsOpen();
recycleStation.addRecycle(greenPlastic);
recycleStation.addRecycle(yellowPlastic);

console.log(recycleStation.makeGoods());
console.log(recycleShop.goods);

console.log(recycleShop.addGoodsAsync('async glasses'));
