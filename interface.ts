interface IUser {
    name: string
    age?: number

    getMessage(): string
}

const user: IUser = {
    name: 'Monster',
    age: 30,
    getMessage() {
        return "Hello" + name
    }
}

const user2: IUser = {
    name: 'James',
    getMessage() {
        return "Hello" + name
    }
}

console.log(user.age)