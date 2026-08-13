"use strict";
function Trail(raiseError) {
    try {
        if (raiseError) {
            throw new Error("An Error occured");
        }
    }
    catch (ex) {
        console.log('Error caught', ex);
    }
}
Trail(true);
