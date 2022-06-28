var doSomething = function () {
    console.log("do something"); //void is a set of undefine or null
};
//any is the worst type in typescript
var foo = undefined; //it is highly recommended to user any type
//any is not solution, is a start big problem in the project
//as the project grows
//if you check project and see any of about 10 or 20. this is a red flag
//that is you are doing something bad
console.log(foo.name());
var doSomething2 = function () {
    //that is why we have throw
    //never is never popular like any other type
    //function return never cannot have a reachable endpoint
    throw "james";
};
//unknown
//this is an alternative to type any that was introduct type 3
var vAny = 10;
//type assertion === convert one type to another
var bUnknow = 10;
var s1 = vAny;
var s3 = bUnknow;
var pageNumber1 = "1";
var numeberPageNumer = pageNumber1;
//stick to unknown and void and do away from any type
