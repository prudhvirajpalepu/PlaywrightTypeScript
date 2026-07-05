"use strict";
//
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        //    console.log('i--> '+i+' j--> '+j);
    }
}
//Using break, 
for (let i = 1; i <= 3; i++) {
    if (i == 2) {
        break; //break will break inner for loop
    }
    // console.log('i-->' +i);
}
//using continue,
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j == 2) {
            continue;
        }
        console.log('i--> ' + i + ' j--> ' + j);
    }
}
