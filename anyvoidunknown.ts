const doSomething = (): void => { //when we don't return somthing, is void
    
    console.log("do something") //void is a set of undefine or null
    

}

//any is the worst type in typescript

const foo: any = undefined //it is highly recommended to user any type
//any is not solution, is a start big problem in the project
//as the project grows
//if you check project and see any of about 10 or 20. this is a red flag
//that is you are doing something bad

console.log(foo.name())

const doSomething2 = (): never => { // function that return never are the function never end
    //that is why we have throw
    //never is never popular like any other type
    //function return never cannot have a reachable endpoint
    throw "james"
}

//unknown
//this is an alternative to type any that was introduct type 3

let vAny: any = 10;
//type assertion === convert one type to another
let bUnknow: unknown = 10;

let s1: string = vAny

let s3: string = bUnknow as string


let pageNumber1: string = "1"

let numeberPageNumer: number = (pageNumber1 as unknown) as number

//stick to unknown and void and do away from any type

