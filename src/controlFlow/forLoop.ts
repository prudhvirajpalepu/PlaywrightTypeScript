//print 1 to 10
/* 
for(let i=1;i<=10;i++){
    console.log(i);
}
**/

let Num= 5;
for(let i=1;i<=10;i++){

   // console.log(Num+'*'+i+"="+(Num*i));
}

let arr:Number[] = [10,20,30,40,50];

//approach 1
for(let i=0;i<arr.length;i++){

   // console.log(arr[i]);
}

//approach 2 the no.of elements that are there inside this array that many times for loop will iterate
for(let i in arr) //incase of array we need to use in keyword
{
  // console.log(arr[i]);
}

let day:string = 'Monday'

//approach1
for(let i=0;i<day.length;i++){
   // console.log(day[i]);
}

//approach2
for(let i of day)
{
    console.log(i);
}