"use strict";
let Inventory = {
    samsung: 10,
    Apple: 10
};
function promise(resolve, reject) {
    if (Inventory.samsung) {
        resolve('Available');
    }
    else {
        reject('out of stock');
    }
}
const stock = new Promise(promise);
stock.then((result) => console.log(result));
stock.catch((error) => console.log(error));
