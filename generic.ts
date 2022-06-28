interface IUser234 {
    name: string
}

const addId = <T extends object>(obj: T) => {
    const id = Math.random.toString()
    return {...obj, id}
}

const userJAmes : IUser234 = {
    name: "jaack"
}

const result = addId<IUser234>(userJAmes)
console.log(result)