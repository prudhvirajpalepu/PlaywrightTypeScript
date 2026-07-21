//bydefault typescript will assign numeric values
enum Weekdays{

    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(Weekdays.Monday);

enum statusCodes {

    Success = 200,
    Notfound = 404,
    InternalServerError =500,
}

console.log(statusCodes.Notfound);