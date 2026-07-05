"use strict";
//bydefault typescript will assign numeric values
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 0] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 1] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 2] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 3] = "Thursday";
    Weekdays[Weekdays["Friday"] = 4] = "Friday";
    Weekdays[Weekdays["Saturday"] = 5] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 6] = "Sunday";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays.Monday);
var statusCodes;
(function (statusCodes) {
    statusCodes[statusCodes["Success"] = 200] = "Success";
    statusCodes[statusCodes["Notfound"] = 404] = "Notfound";
    statusCodes[statusCodes["InternalServerError"] = 500] = "InternalServerError";
})(statusCodes || (statusCodes = {}));
console.log(statusCodes.Notfound);
