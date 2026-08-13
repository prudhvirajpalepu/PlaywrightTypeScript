let Inventory = {
    samsung:10,
    Apple:10
}

function promise(
    resolve:(value: string) => void,
    reject: (reason?:string) => void)
    {
    if(Inventory.samsung){
         resolve('Available')
    }
    else{
         reject('out of stock')
    }
}

const stock = new Promise(promise)

stock.then((result) => console.log(result))
stock.catch((error) => console.log(error));