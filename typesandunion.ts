//union operator
let usernmae: string = "james";

let pageNumber: string | number = "1";  //union operator

let errorMessage: string | null = null; //default value of union is undefined

interface IUser {
    name: string,
    surname: string
}

let user1: IUser | null = null

let someProps: string | number | null | undefined | string[] | object; //this is bad





