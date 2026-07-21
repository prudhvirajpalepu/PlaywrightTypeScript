//create a function which will add 2 params

function add()
{
    let a:number = 10;
    let b:number = 20;
    console.log(a+b);
}

function addTwoVal(a:number,b:number)
{
    let result = a+b;
    console.log(result)
}

function printName(firstName:string, lastName:string){

    console.log('firstName: ',firstName, 'lastName ', lastName)
}

add();
addTwoVal(10,12);
printName('prudhvi','palepu');
